export async function GET({ url }) {
	const domain = url.hostname === 'localhost' || url.hostname === '127.0.0.1' 
		? url.origin 
		: 'https://bidantari.my.id';

	const robots = `User-agent: *
Allow: /

# Pengecualian halaman admin dan user management
Disallow: /admin/
Disallow: /admin

Sitemap: ${domain}/sitemap.xml
`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'public, max-age=0, s-maxage=3600'
		}
	});
}
