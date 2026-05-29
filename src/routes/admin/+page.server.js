import { db } from '$lib/server/db';
import { articles, users } from '$lib/server/db/schema';
import { desc, eq, sql } from 'drizzle-orm';
import { invalidateSession } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	// Wait for layout data to ensure user is authenticated
	await parent();

	// Fetch all articles, join with users to get author name
	const articleList = await db
		.select({
			id: articles.id,
			title: articles.title,
			slug: articles.slug,
			category: articles.category,
			featured: articles.featured,
			createdAt: articles.createdAt,
			authorName: users.name
		})
		.from(articles)
		.leftJoin(users, eq(articles.authorId, users.id))
		.orderBy(desc(articles.createdAt))
		.all();

	// Fetch stats
	const totalArticles = articleList.length;
	
	const totalOperatorsResult = await db
		.select({ count: sql`count(*)` })
		.from(users)
		.get();
	const totalOperators = totalOperatorsResult?.count ?? 0;

	const featuredCount = articleList.filter(a => a.featured).length;

	return {
		articles: articleList,
		stats: {
			totalArticles,
			totalOperators,
			featuredCount
		}
	};
}

export const actions = {
	logout: async ({ cookies }) => {
		await invalidateSession(cookies);
		throw redirect(303, '/admin/login');
	},
	
	deleteArticle: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id')?.toString();
		
		if (id) {
			await db.delete(articles).where(eq(articles.id, id));
		}
		
		return { success: true };
	}
};
