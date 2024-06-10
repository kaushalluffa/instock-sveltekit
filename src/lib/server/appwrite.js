// src/lib/server/appwrite.js
import { Client, Account, Databases, ID, Query } from 'node-appwrite';
import {
	PRIVATE_APP_WRITE_API_KEY,
	PRIVATE_APP_WRITE_CATEGORIES_COLLECTION_ID,
	PRIVATE_APP_WRITE_DATABASE_ID,
	PRIVATE_APP_WRITE_INVENTORIES_COLLECTION_ID,
	PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID
} from '$env/static/private';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

export const SESSION_COOKIE = 'instock_sveltekit_session';

export const client = new Client()
	.setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
	.setProject(PUBLIC_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export function createAdminClient() {
	client.setKey(PRIVATE_APP_WRITE_API_KEY); // Set the Appwrite API key!

	// Return the services we want to use.
	return {
		get account() {
			return new Account(client);
		}
	};
}

/**
 * Description placeholder
 *
 * @export
 * @param {*} event
 * @returns {{ readonly account: any; }}
 */
export function createSessionClient(event) {
	// Extract our custom domain's session cookie from the request
	const session = event.cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}

	client.setSession(session);

	// Return the services we want to use.
	return {
		get account() {
			return new Account(client);
		}
	};
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; warehouseData: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function createWarehouseClient({ cookies, warehouseData }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const createdWarehouseResponse = await databases.createDocument(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID,
		ID.unique(),
		warehouseData
	);
	return createdWarehouseResponse;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; }} param0
 * @param any
 * @returns any
 */
export async function getWarehousesClient({ cookies }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const warehouses = await databases.listDocuments(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID
	);
	return warehouses;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; params: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function deleteWarehouse({ cookies, params }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const deletedWarehouse = await databases.deleteDocument(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID,
		params.$id
	);
	return deletedWarehouse;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; params: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function getOneWarehouseClient({ cookies, params }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const warehouse = await databases.getDocument(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID,
		params.warehouseId,
		[
			Query.select([
				'$id',
				'city',
				'country',
				'contact_name',
				'warehouse_name',
				'address',
				'contact_position',
				'contact_email',
				'contact_phone',
				'createdAt',
				'updatedAt'
			])
		]
	);
	return warehouse;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; warehouseData: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function updateOneWarehouseClient({ cookies, warehouseData }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const updatedWarehouse = await databases.updateDocument(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_WAREHOUSES_COLLECTION_ID,
		warehouseData.$id,
		warehouseData
	);
	return updatedWarehouse;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; warehouseId: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function getWarehouseInventories({ cookies, warehouseId }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const inventories = await databases.listDocuments(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_INVENTORIES_COLLECTION_ID,
		[Query.equal('warehouse_id', [warehouseId])]
	);
	return inventories;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; inventoryId: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function getOneInventoryDetailsClient({ cookies, inventoryId }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const inventory = await databases.getDocument(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_INVENTORIES_COLLECTION_ID,
		inventoryId
	);
	return inventory;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; }} param0
 * @param any
 * @param any
 * @returns any
 */
export async function getInventories({ cookies }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const inventories = await databases.listDocuments(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_INVENTORIES_COLLECTION_ID
	);
	return inventories;
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {{ cookies: any; }} param0
 * @param any
 * @returns any
 */
export async function getCategories({ cookies }) {
	const session = cookies.get(SESSION_COOKIE);
	if (!session) {
		throw new Error('No user session');
	}
	client.setSession(session);
	const categories = await databases.listDocuments(
		PRIVATE_APP_WRITE_DATABASE_ID,
		PRIVATE_APP_WRITE_CATEGORIES_COLLECTION_ID
	);
	return categories;
}