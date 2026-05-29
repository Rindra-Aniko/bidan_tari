import { db } from '$lib/server/db';
import { articles, users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const article = await db
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
}
