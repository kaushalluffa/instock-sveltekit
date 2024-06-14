import { getCategories, getWarehousesClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';
export const load = async ({ locals, cookies }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const categories = await getCategories({ cookies });
	const warehouses = await getWarehousesClient({ cookies });
	return { categories, warehouses };
};
