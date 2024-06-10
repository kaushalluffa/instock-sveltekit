<script>
	import { FormPageHeader, InventoryForm, WarehouseForm } from '$components';
	export let data;
	$: inventoryData = data?.inventoryDetails;
	$: categories = data?.categories?.documents;
	$: warehouses = data?.warehouses?.documents;
</script>

<FormPageHeader heading="Edit Item" backBtnLink="/" />
<InventoryForm isEditPage={true} {inventoryData} {categories} {warehouses} />
