<script>
	import { FormPageHeader, WarehouseForm } from '$components';
	export let data;
	$: warehouseData = data?.warehouses;
</script>

<FormPageHeader heading="Edit Warehouse" backBtnLink="/" />
<WarehouseForm inputData={warehouseData} submitBtnText="Save" />
