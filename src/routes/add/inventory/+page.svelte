<script>
	import { FormPageHeader, InventoryForm } from '$components';
	export let data;
	$: categories = data?.categories?.documents;
	$: warehouses = data?.warehouses?.documents;
</script>

<FormPageHeader heading="Add New Inventory Item" backBtnLink="/inventory" />
<InventoryForm submitBtnText="+ Add Item" {warehouses} {categories} />
