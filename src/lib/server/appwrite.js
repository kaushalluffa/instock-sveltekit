// src/lib/server/appwrite.js
import { Client, Account, Databases, ID } from 'node-appwrite';
import {
	PRIVATE_APP_WRITE_API_KEY,
	PRIVATE_APP_WRITE_DATABASE_ID,
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
