import { db, getDb } from '$lib/server/db';
import { articles, users } from '$lib/server/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function load({ url, platform }) {
	const selectedCategory = url.searchParams.get('category') || 'all';

	try {
		// Use platform.env for reliable Cloudflare Workers secret access
		const database = getDb(platform?.env);

		// Base query
		let query = database
			.select({
				id: articles.id,
				title: articles.title,
				slug: articles.slug,
				summary: articles.summary,
				category: articles.category,
				image: articles.image,
				readingTime: articles.readingTime,
				featured: articles.featured,
				createdAt: articles.createdAt,
				authorName: users.name
			})
			.from(articles)
			.leftJoin(users, eq(articles.authorId, users.id))
			.orderBy(desc(articles.createdAt));

		// Apply filter if category is selected
		if (selectedCategory && selectedCategory !== 'all') {
			query = query.where(eq(articles.category, selectedCategory));
		}

		const articleList = await query.all();

		// Find the featured article
		let featuredArticle = articleList.find(a => a.featured) || null;
		
		// If no article is explicitly marked featured, pick the latest one
		if (!featuredArticle && articleList.length > 0) {
			featuredArticle = articleList[0];
		}

		// Standard articles are all articles except the featured one
		const standardArticles = featuredArticle
			? articleList.filter(a => a.id !== featuredArticle.id)
			: articleList;

		return {
			featuredArticle,
			articles: standardArticles,
			selectedCategory
		};
	} catch (e) {
		console.error('[Informasi] Error:', e instanceof Error ? e.message : e);
		console.error('[Informasi] Stack:', e instanceof Error ? e.stack : 'N/A');
		
		return {
			featuredArticle: null,
			articles: [],
			selectedCategory,
			dbError: e instanceof Error ? e.message : 'Gagal mengambil data dari database'
		};
	}
}
