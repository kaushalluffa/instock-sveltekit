import { getWarehousesClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const warehouses = await getWarehousesClient({ cookies });
	return { warehouses };
};
