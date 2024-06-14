import { createInventory, deleteInventoryClient, getInventories, updateInventoryClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const inventories = await getInventories({ cookies });
	return { inventories };
};
export const actions = {
	addInventory: async ({ request, cookies }) => {
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
			warehouses: warehouse,
			category: item_category,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		const createdInventory = await createInventory({ cookies, inventoryData });
		redirect(301, `/details/inventory/${createdInventory?.$id}`);
	},
	deleteInventory: async ({ cookies, request }) => {
		const form = await request.formData();
		const inventoryId = form.get('inventoryId');
		await deleteInventoryClient({ cookies, inventoryId });
	},
	updateInventory: async ({ request, cookies }) => {
		// Extract the form data.
		const form = await request.formData();
		const inventoryId = form.get('itemId');
		const item_name = form.get('itemName');
		const item_description = form.get('description');
		const item_category = form.get('category');
		const status = form.get('status');
		const quantity = form.get('quantity');
		const warehouse = form.get('warehouse');
		const updatedInventoryData = {
			$id: inventoryId,
			item_name,
			item_description,
			status,
			quantity: Number(quantity),
			warehouses: warehouse,
			category: item_category,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		const createdInventory = await updateInventoryClient({ cookies, updatedInventoryData });
		redirect(301, `/details/inventory/${createdInventory?.$id}`);
	}
};