import { defineConfig } from 'drizzle-kit';

const url = process.env.DATABASE_URL || process.env.TURSO_CONNECTION_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) throw new Error('Database URL is not set');

const isLocal = url.startsWith('file:');

export default defineConfig({
	schema: './src/lib/server/db/schema.js',
	dialect: isLocal ? 'sqlite' : 'turso',
	dbCredentials: {
		url,
		authToken: isLocal ? undefined : authToken
	},
	verbose: true,
	strict: false
});
