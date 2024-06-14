import { getOneWarehouseClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies, params }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const warehouses = await getOneWarehouseClient({ cookies, params });
	return { warehouses };
};
