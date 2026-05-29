import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { building } from '$app/environment';

let _db = null;
let _dbUrl = null;

/**
 * Get or create the database connection.
 * 
 * @param {Record<string, string>} [platformEnv] - Optional Cloudflare platform.env for reliable secret access
 * @returns {any} Drizzle database instance
 */
export function getDb(platformEnv) {
	if (building) {
		return /** @type {any} */ ({});
	}

	// Priority: platformEnv (most reliable on CF) > $env/dynamic/private (bridged by adapter)
	const url = platformEnv?.DATABASE_URL 
		|| platformEnv?.TURSO_CONNECTION_URL 
		|| env?.DATABASE_URL 
		|| env?.TURSO_CONNECTION_URL;

	const authToken = platformEnv?.TURSO_AUTH_TOKEN 
		|| env?.TURSO_AUTH_TOKEN;

	if (!url) {
		// Log available keys for debugging
		const envKeys = env ? Object.keys(env).filter(k => !k.startsWith('_')).join(', ') : 'empty';
		const platKeys = platformEnv ? Object.keys(platformEnv).join(', ') : 'N/A';
		console.error(`[DB] No database URL found!`);
		console.error(`[DB] $env/dynamic/private keys: ${envKeys}`);
		console.error(`[DB] platform.env keys: ${platKeys}`);
		throw new Error(
			'Database URL not configured. ' +
			'Ensure DATABASE_URL or TURSO_CONNECTION_URL is set in Cloudflare Dashboard → Settings → Variables and Secrets.'
		);
	}

	// Reuse existing connection if URL unchanged
	if (_db && _dbUrl === url) {
		return _db;
	}

	console.log('[DB] Initializing connection to:', url.substring(0, 40) + '...');

	const client = createClient({
		url,
		authToken: url.startsWith('file:') ? undefined : authToken
	});

	_db = drizzle(client, { schema });
	_dbUrl = url;
	return _db;
}

/**
 * Default database instance using $env/dynamic/private.
 * Works locally (via .env) and on Cloudflare (bridged by adapter-cloudflare).
 * For Cloudflare reliability, prefer getDb(platform.env) in load functions.
 */
export const db = new Proxy(/** @type {any} */ ({}), {
	get(_target, prop) {
		if (building) return undefined;
		const database = getDb();
		return Reflect.get(database, prop);
	}
});
