import { getDb } from '$lib/server/db';
import { articles } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export async function GET({ url, platform }) {
	const domain = url.hostname === 'localhost' || url.hostname === '127.0.0.1' 
		? url.origin 
		: 'https://bidantari.my.id';

	// Daftar halaman statis situs
	const staticRoutes = [
		{ path: '/', priority: '1.0', changefreq: 'daily' },
		{ path: '/layanan', priority: '0.8', changefreq: 'weekly' },
		{ path: '/babyspa', priority: '0.8', changefreq: 'weekly' },
		{ path: '/galeri', priority: '0.7', changefreq: 'weekly' },
		{ path: '/tentang', priority: '0.7', changefreq: 'monthly' },
		{ path: '/informasi', priority: '0.8', changefreq: 'daily' }
	];

	let articleList = [];
	try {
		const database = getDb(platform?.env);
		articleList = await database
			.select({
				slug: articles.slug,
				createdAt: articles.createdAt
			})
			.from(articles)
			.orderBy(desc(articles.createdAt))
			.all();
	} catch (e) {
		console.error('[Sitemap] Error fetching articles from database:', e);
		// Tetap teruskan dengan halaman statis jika query database gagal
	}

	const sitemapEntries = [
		...staticRoutes.map(route => {
			const today = new Date().toISOString().split('T')[0];
			return `  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
		}),
		...articleList.map(article => {
			let dateStr = new Date().toISOString().split('T')[0];
			if (article.createdAt) {
				try {
					dateStr = new Date(article.createdAt).toISOString().split('T')[0];
				} catch (err) {
					// Fallback ke tanggal hari ini jika format salah
				}
			}
			return `  <url>
    <loc>${domain}/informasi/${article.slug}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
		})
	];

	const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

	return new Response(sitemapXml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=0, s-maxage=3600'
		}
	});
}
