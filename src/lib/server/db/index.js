import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { building } from '$app/environment';

const url = env.DATABASE_URL || env.TURSO_CONNECTION_URL;
const authToken = env.TURSO_AUTH_TOKEN;

if (!url && !building) {
	throw new Error('Database Connection URL is not set');
}

const client = !building && url ? createClient({
	url,
	authToken: url.startsWith('file:') ? undefined : authToken
}) : null;

export const db = client ? drizzle(client, { schema }) : {};

