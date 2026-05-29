import { redirect } from '@sveltejs/kit';
import { validateSession, seedDefaultAdmin } from '$lib/server/auth';
import { getDb } from '$lib/server/db';

export async function load({ cookies, url, platform }) {
	// Initialize database with platform env for Cloudflare
	// This ensures auth functions can access the database
	if (platform?.env) {
		getDb(platform.env);
	}

	// Seed default admin if database is empty
	await seedDefaultAdmin();

	// Validate session
	const user = await validateSession(cookies);
	const isLoggingIn = url.pathname === '/admin/login';

	if (!user) {
		if (!isLoggingIn) {
			throw redirect(303, '/admin/login');
		}
	} else {
		if (isLoggingIn) {
			throw redirect(303, '/admin');
		}
	}

	return {
		user
	};
}
