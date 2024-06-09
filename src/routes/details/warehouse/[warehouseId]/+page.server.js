import { getOneWarehouseClient, getWarehouseInventories } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, params }) => {
	const warehouseId = params.warehouseId;
	if (!warehouseId) {
		redirect(301, '/');
	}
	const warehouse = await getOneWarehouseClient({ cookies, params });
	const warehouseInventories = await getWarehouseInventories({ cookies, warehouseId });
	return {
		warehouse,
		warehouseInventories
	};
};
