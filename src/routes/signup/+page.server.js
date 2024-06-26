// src/routes/signup/+page.server.js

import { SESSION_COOKIE, createAdminClient } from '$lib/server/appwrite.js';
import { error, redirect } from '@sveltejs/kit';
import { ID } from 'node-appwrite';
export const load = async ({ locals, url }) => {
	if (locals?.user && url.pathname.startsWith('/signup')) {
		redirect(301, '/');
	}
};
/**
 * Description placeholder
 *
 * @type {{ signup: ({ request, cookies }: { request: any; cookies: any; }) => any; }}
 */
export const actions = {
	signup: async ({ request, cookies }) => {
		// Extract the form data.
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		const name = form.get('name');
		if (!email || !password || !name) {
			error(400, 'Missing required fields');
		}
		// Create the Appwrite client.
		const { account } = createAdminClient();

		// Create the session using the client
		await account.create(ID.unique(), email, password, name);
		const session = await account.createEmailPasswordSession(email, password);

		// Set the session cookie with the secret
		cookies.set(SESSION_COOKIE, session.secret, {
			sameSite: 'strict',
			expires: new Date(session.expire),
			secure: true,
			path: '/'
		});

		// Redirect to the account page.
		redirect(301, '/');
	}
};
