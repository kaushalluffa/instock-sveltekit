<script>
	import { FormPageHeader, PageContentWrapper, WarehouseForm } from '$components';
	export let data;
	$: warehouseData = data?.warehouses;
</script>

<PageContentWrapper>
	<FormPageHeader heading="Edit Warehouse" backBtnLink="/" />
	<WarehouseForm inputData={warehouseData} submitBtnText="Save" />
</PageContentWrapper>
