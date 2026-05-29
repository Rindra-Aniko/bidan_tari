import { db } from '$lib/server/db';
import { users, sessions } from '$lib/server/db/schema';
import { eq, ne } from 'drizzle-orm';
import { fail, redirect } from '@sveltejs/kit';
import { hashPassword } from '$lib/server/auth';

export async function load({ parent }) {
	const { user } = await parent();

	// Restrict access to admin only
	if (user.role !== 'admin') {
		throw redirect(303, '/admin');
	}

	// Fetch all operators
	const userList = await db
		.select({
			id: users.id,
			name: users.name,
			username: users.username,
			role: users.role,
			createdAt: users.createdAt
		})
		.from(users)
		.all();

	return {
		users: userList
	};
}

export const actions = {
	createUser: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim();
		const username = data.get('username')?.toString().trim().toLowerCase();
		const password = data.get('password')?.toString();
		const role = data.get('role')?.toString() || 'operator';

		if (!name || !username || !password) {
			return fail(400, {
				createUserError: 'Semua field wajib diisi.'
			});
		}

		if (username.length < 3) {
			return fail(400, {
				createUserError: 'Username minimal 3 karakter.'
			});
		}

		if (password.length < 6) {
			return fail(400, {
				createUserError: 'Password minimal 6 karakter.'
			});
		}

		// Check if username already exists
		const existingUser = await db
			.select()
			.from(users)
			.where(eq(users.username, username))
			.get();

		if (existingUser) {
			return fail(400, {
				createUserError: 'Username sudah digunakan oleh operator lain.'
			});
		}

		// Hash password and insert
		const passwordHash = hashPassword(password);
		await db.insert(users).values({
			name,
			username,
			passwordHash,
			role
		});

		return { createUserSuccess: true };
	},

	deleteUser: async ({ request, cookies }) => {
		const data = await request.formData();
		const id = data.get('id')?.toString();
		
		if (!id) return fail(400, { deleteUserError: 'ID tidak valid' });

		// Verify session to prevent self-deletion
		const token = cookies.get('session_id');
		if (token) {
			const session = await db
				.select()
				.from(sessions)
				.where(eq(sessions.id, token))
				.get();
				
			if (session && session.userId === id) {
				return fail(400, { deleteUserError: 'Anda tidak dapat menghapus akun Anda sendiri yang sedang aktif.' });
			}
		}

		await db.delete(users).where(eq(users.id, id));
		return { deleteUserSuccess: true };
	}
};
