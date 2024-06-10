<script>
	import { PageHeaderWithSearch, WarehouseCard, WarehouseTableHeader } from '$components';
	export let data;
	$: warehouses = data?.warehouses?.documents;
	$: totalWarehouses = data?.warehouses?.total;
</script>

<PageHeaderWithSearch
	heading="Warehouses"
	placeholder="Search..."
	actionBtnLink="/add/warehouse"
	actionBtnText="+ Add New Warehouse"
/>
<div class="warehouses-list">
	<WarehouseTableHeader />
	{#if warehouses && Array.isArray(warehouses) && warehouses.length > 0}
		{#each warehouses as warehouse (warehouse?.$id)}
			<WarehouseCard {warehouse} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.warehouses-list {
		display: flex;
		flex-direction: column;
	}
</style>
