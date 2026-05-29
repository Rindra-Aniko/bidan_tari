import { db } from '$lib/server/db';
import { articles, users } from '$lib/server/db/schema';
import { eq, desc, and } from 'drizzle-orm';

export async function load({ url }) {
	const selectedCategory = url.searchParams.get('category') || 'all';

	// Base query
	let query = db
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
		// Drizzle where query
		query = query.where(eq(articles.category, selectedCategory));
	}

	const articleList = await query.all();

	// Find the featured article
	// If category is set, we just use the first article as featured if there's no explicitly marked featured article in the filtered set
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
}
