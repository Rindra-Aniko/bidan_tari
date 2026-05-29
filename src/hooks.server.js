/** @type {import('@sveltejs/kit').HandleFetch} */

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Make platform.env available for database initialization on Cloudflare
	// This ensures env variables from Cloudflare Workers/Pages secrets are accessible
	if (event.platform?.env) {
		event.locals.platformEnv = event.platform.env;
	}

	return resolve(event);
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event, status, message }) {
	const errorId = crypto.randomUUID();

	// Log detailed error info to Cloudflare Workers logs
	console.error(`[Error ${errorId}]`, {
		status,
		message,
		path: event.url.pathname,
		error: error instanceof Error ? error.message : String(error),
		stack: error instanceof Error ? error.stack : undefined
	});

	return {
		message: `Terjadi kesalahan internal (ID: ${errorId.slice(0, 8)})`,
		errorId
	};
}
