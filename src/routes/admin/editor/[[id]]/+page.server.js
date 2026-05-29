import { db } from '$lib/server/db';
import { articles, users, sessions } from '$lib/server/db/schema';
import { eq, and, ne } from 'drizzle-orm';
import { fail, redirect } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

export async function load({ params, parent }) {
	// Ensure authenticated
	const { user } = await parent();

	let article = null;

	if (params.id) {
		article = await db
			.select()
			.from(articles)
			.where(eq(articles.id, params.id))
			.get();

		if (!article) {
			throw redirect(303, '/admin');
		}
	}

	return {
		article,
		user
	};
}

export const actions = {
	save: async ({ request, params, cookies }) => {
		const sessionUser = await db
			.select({ id: users.id })
			.from(users)
			.innerJoin(sessions, eq(users.id, sessions.userId))
			.where(eq(sessions.id, cookies.get('session_id') || ''))
			.get();

		if (!sessionUser) {
			throw redirect(303, '/admin/login');
		}

		const data = await request.formData();
		const title = data.get('title')?.toString().trim();
		const slug = data.get('slug')?.toString().trim().toLowerCase();
		const category = data.get('category')?.toString();
		const summary = data.get('summary')?.toString().trim();
		const content = data.get('content')?.toString();
		const readingTime = data.get('readingTime')?.toString().trim() || '5 Menit Baca';
		const featured = data.get('featured') === 'true';

		const imageType = data.get('imageType')?.toString() || 'url';
		const imageUrl = data.get('imageUrl')?.toString().trim();
		const imageFile = data.get('imageFile'); // File object

		let imagePath = '';

		if (!title || !slug || !category || !summary || !content) {
			return fail(400, {
				error: 'Harap lengkapi semua field utama (Judul, Slug, Kategori, Ringkasan, Konten).'
			});
		}

		// Handle image upload or URL
		if (imageType === 'file') {
			if (imageFile && imageFile instanceof File && imageFile.size > 0) {
				try {
					const buffer = Buffer.from(await imageFile.arrayBuffer());
					const ext = imageFile.name.split('.').pop() || 'jpg';
					const filename = `${crypto.randomUUID()}.${ext}`;
					const uploadDir = path.join(process.cwd(), 'static', 'uploads');

					// Create directory if not exists
					if (!fs.existsSync(uploadDir)) {
						fs.mkdirSync(uploadDir, { recursive: true });
					}

					fs.writeFileSync(path.join(uploadDir, filename), buffer);
					imagePath = `/uploads/${filename}`;
				} catch (err) {
					console.error('Failed to save uploaded file:', err);
					return fail(400, {
						error: 'Gagal mengunggah gambar. Silakan coba lagi.'
					});
				}
			} else {
				// If editing, they might keep the old image. Let's see if we have an old image.
				if (params.id) {
					const existing = await db.select({ image: articles.image }).from(articles).where(eq(articles.id, params.id)).get();
					imagePath = existing?.image || '';
				}
				
				if (!imagePath) {
					return fail(400, {
						error: 'Harap unggah file gambar atau pilih opsi URL.'
					});
				}
			}
		} else {
			if (!imageUrl) {
				return fail(400, {
					error: 'Harap masukkan URL gambar.'
				});
			}
			imagePath = imageUrl;
		}

		// Verify slug uniqueness
		let existingSlugCheck;
		if (params.id) {
			existingSlugCheck = await db
				.select()
				.from(articles)
				.where(and(eq(articles.slug, slug), ne(articles.id, params.id)))
				.get();
		} else {
			existingSlugCheck = await db
				.select()
				.from(articles)
				.where(eq(articles.slug, slug))
				.get();
		}

		if (existingSlugCheck) {
			return fail(400, {
				error: 'Slug ini sudah digunakan oleh artikel lain. Silakan ubah slug.'
			});
		}

		// If this is set as featured, reset featured status for all other articles in SQLite
		if (featured) {
			await db.update(articles).set({ featured: false });
		}

		if (params.id) {
			// Update article
			await db
				.update(articles)
				.set({
					title,
					slug,
					category,
					summary,
					content,
					readingTime,
					image: imagePath,
					featured
				})
				.where(eq(articles.id, params.id));
		} else {
			// Insert new article
			await db.insert(articles).values({
				title,
				slug,
				category,
				summary,
				content,
				readingTime,
				image: imagePath,
				featured,
				authorId: sessionUser.id
			});
		}

		throw redirect(303, '/admin');
	}
};
