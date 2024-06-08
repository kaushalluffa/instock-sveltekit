// src/routes/signup/+page.server.js

import { SESSION_COOKIE, createAdminClient } from '$lib/server/appwrite.js';
import { error, redirect } from '@sveltejs/kit';
export const load = async ({ locals }) => {
	if (locals?.user) {
		redirect(301, '/');
	}
};
/**
 * Description placeholder
 *
 * @type {{ login: ({ request, cookies }: { request: any; cookies: any; }) => any; }}
 */
export const actions = {
	login: async ({ request, cookies }) => {
		// Extract the form data.
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (!email || !password) {
			error(400, 'Missing required fields');
		}
		// Create the Appwrite client.
		const { account } = createAdminClient();

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
