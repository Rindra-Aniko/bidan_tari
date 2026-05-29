import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { verifyPassword, createSession } from '$lib/server/auth';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString().trim();
		const password = data.get('password')?.toString();

		if (!username || !password) {
			return fail(400, { 
				error: 'Username dan password wajib diisi.' 
			});
		}

		// Find user in database
		const user = await db
			.select()
			.from(users)
			.where(eq(users.username, username))
			.get();

		if (!user) {
			return fail(400, { 
				username,
				error: 'Username atau password salah.' 
			});
		}

		// Verify password
		const isValid = verifyPassword(password, user.passwordHash);
		if (!isValid) {
			return fail(400, { 
				username,
				error: 'Username atau password salah.' 
			});
		}

		// Create session & set cookie
		await createSession(user.id, cookies);

		// Redirect to admin dashboard
		throw redirect(303, '/admin');
	}
};
