import { getInventories } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const inventories = await getInventories({ cookies });
	return { inventories };
};
