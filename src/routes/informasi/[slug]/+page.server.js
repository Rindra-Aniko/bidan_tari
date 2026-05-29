import { getDb } from '$lib/server/db';
import { articles, users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export async function load({ params, platform }) {
	try {
		const database = getDb(platform?.env);

		const article = await database
			.select({
				id: articles.id,
				title: articles.title,
				slug: articles.slug,
				summary: articles.summary,
				content: articles.content,
				category: articles.category,
				image: articles.image,
				readingTime: articles.readingTime,
				createdAt: articles.createdAt,
				authorName: users.name
			})
			.from(articles)
			.leftJoin(users, eq(articles.authorId, users.id))
			.where(eq(articles.slug, params.slug))
			.get();

		if (!article) {
			throw error(404, {
				message: 'Artikel tidak ditemukan'
			});
		}

		return {
			article
		};
	} catch (e) {
		// Re-throw SvelteKit HttpErrors (like 404)
		if (e?.status) throw e;
		
		console.error('[Informasi/Slug] Error:', e instanceof Error ? e.message : e);
		throw error(500, {
			message: 'Gagal memuat artikel. Silakan coba lagi nanti.'
		});
	}
}
