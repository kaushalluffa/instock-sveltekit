import {
	getCategories,
	getOneInventoryDetailsClient,
	getWarehousesClient,
} from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies, params }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const inventoryId = params.inventoryId;
	const inventoryDetails = await getOneInventoryDetailsClient({ cookies, inventoryId });
	const categories = await getCategories({ cookies });
	const warehouses = await getWarehousesClient({ cookies });
	return { inventoryDetails, categories, warehouses };
};
