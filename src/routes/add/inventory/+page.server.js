import { createInventory, getCategories, getWarehousesClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';
export const load = async ({ locals, cookies }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const categories = await getCategories({ cookies });
	const warehouses = await getWarehousesClient({ cookies });
	return { categories, warehouses };
};
export const actions = {
	default: async ({ request, cookies }) => {
		// Extract the form data.
		const form = await request.formData();
		const item_name = form.get('itemName');
		const item_description = form.get('description');
		const item_category = form.get('category');
		const status = form.get('status');
		const quantity = form.get('quantity');
		const warehouse = form.get('warehouse');
		const inventoryData = {
			item_name,
			item_description,
			status,
			quantity: Number(quantity),
			warehouse: [warehouse],
			category: item_category,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		const createdInventory = await createInventory({ cookies, inventoryData });
		redirect(301, `/details/inventory/${createdInventory?.$id}`);
	}
};
