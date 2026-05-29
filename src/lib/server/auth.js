import { pbkdf2Sync, randomBytes } from 'node:crypto';
import { db } from './db';
import { users, sessions } from './db/schema';
import { eq } from 'drizzle-orm';

/**
 * Hash a password using Node.js pbkdf2
 * @param {string} password 
 * @returns {string} salt:hash
 */
export function hashPassword(password) {
	const salt = randomBytes(16).toString('hex');
	const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return `${salt}:${hash}`;
}

/**
 * Verify a password against a stored hash
 * @param {string} password 
 * @param {string} storedValue salt:hash
 * @returns {boolean}
 */
export function verifyPassword(password, storedValue) {
	if (!storedValue || !storedValue.includes(':')) return false;
	const [salt, hash] = storedValue.split(':');
	const verifyHash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
	return hash === verifyHash;
}

/**
 * Create a new session for a user
 * @param {string} userId 
 * @param {import('@sveltejs/kit').Cookies} cookies 
 */
export async function createSession(userId, cookies) {
	const token = randomBytes(32).toString('hex');
	const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // 7 days from now

	// Save session in database
	await db.insert(sessions).values({
		id: token,
		userId,
		expiresAt
	});

	// Set session cookie
	cookies.set('session_id', token, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7
	});

	return token;
}

/**
 * Validate a session token from cookies
 * @param {import('@sveltejs/kit').Cookies} cookies 
 * @returns {Promise<any | null>} User data if valid, null otherwise
 */
export async function validateSession(cookies) {
	const token = cookies.get('session_id');
	if (!token) return null;

	// Query session and user
	const result = await db
		.select({
			session: sessions,
			user: {
				id: users.id,
				username: users.username,
				name: users.name,
				role: users.role
			}
		})
		.from(sessions)
		.where(eq(sessions.id, token))
		.innerJoin(users, eq(sessions.userId, users.id))
		.get();

	if (!result) {
		cookies.delete('session_id', { path: '/' });
		return null;
	}

	const { session, user } = result;

	// Check expiration
	const now = Math.floor(Date.now() / 1000);
	if (now > session.expiresAt) {
		await db.delete(sessions).where(eq(sessions.id, token));
		cookies.delete('session_id', { path: '/' });
		return null;
	}

	// Proactively extend session if it's close to expiring (e.g. less than 3 days left)
	if (session.expiresAt - now < 60 * 60 * 24 * 3) {
		const newExpiresAt = now + 60 * 60 * 24 * 7;
		await db.update(sessions)
			.set({ expiresAt: newExpiresAt })
			.where(eq(sessions.id, token));
		
		cookies.set('session_id', token, {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7
		});
	}

	return user;
}

/**
 * Invalidate a session (logout)
 * @param {import('@sveltejs/kit').Cookies} cookies 
 */
export async function invalidateSession(cookies) {
	const token = cookies.get('session_id');
	if (token) {
		await db.delete(sessions).where(eq(sessions.id, token));
		cookies.delete('session_id', { path: '/' });
	}
}

/**
 * Seed a default admin user if the users table is empty
 */
export async function seedDefaultAdmin() {
	// 1. If old 'admin' user exists, delete it to upgrade to superuser
	const oldAdmin = await db.select().from(users).where(eq(users.username, 'admin')).get();
	if (oldAdmin) {
		console.log('Old default admin account detected. Removing it...');
		await db.delete(users).where(eq(users.username, 'admin'));
	}

	// 2. Check if 'superuser' exists
	const superUser = await db.select().from(users).where(eq(users.username, 'superuser')).get();
	if (!superUser) {
		console.log('superuser not found. Seeding superuser admin...');
		const defaultPassword = 'Kontrol308687';
		const passwordHash = hashPassword(defaultPassword);
		
		await db.insert(users).values({
			username: 'superuser',
			name: 'Administrator',
			passwordHash,
			role: 'admin'
		});
		console.log('Seeded default admin (username: "superuser", password: "Kontrol308687")');
	}
}
