import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

const url = env.DATABASE_URL || env.TURSO_CONNECTION_URL;
const authToken = env.TURSO_AUTH_TOKEN;

if (!url) throw new Error('Database Connection URL is not set');

const client = createClient({
	url,
	authToken: url.startsWith('file:') ? undefined : authToken
});

export const db = drizzle(client, { schema });
