import { getOneWarehouseClient, updateOneWarehouseClient } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, cookies, params }) => {
	if (!locals?.user) {
		redirect(301, '/login');
	}
	const warehouses = await getOneWarehouseClient({ cookies, params });
	return { warehouses };
};
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		if (!data) return { success: false, message: 'No data provided' };
		const warehouseName = data?.get('warehouseName');
		const streetAddress = data?.get('streetAddress');
		const city = data?.get('city');
		const country = data?.get('country');
		const contactName = data?.get('contactName');
		const position = data?.get('position');
		const phoneNumber = data?.get('phoneNumber');
		const email = data?.get('email');
		const warehouseId = data?.get('warehouseId');
		const warehouseData = {
			$id: warehouseId,
			warehouse_name: warehouseName,
			address: streetAddress,
			city,
			country,
			contact_name: contactName,
			contact_position: position,
			contact_phone: phoneNumber,
			contact_email: email,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		await updateOneWarehouseClient({ cookies, warehouseData });
		redirect(301, '/');
	}
};
