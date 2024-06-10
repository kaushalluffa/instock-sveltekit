import { getOneInventoryDetailsClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, params }) => {
	const inventoryId = params.inventoryId;
	if (!inventoryId) {
		redirect(301, '/');
	}
	const inventoryDetails = await getOneInventoryDetailsClient({ cookies, inventoryId });
	return {
		inventoryDetails
	};
};
