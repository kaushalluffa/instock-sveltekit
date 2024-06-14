<script>
	import { DetailsPageHeader, InventoryCard, InventoryTableHeader } from '$components';
	export let data;
	$: warehouseInventories = data?.warehouseInventories?.documents;
	$: warehouseData = data?.warehouse;
</script>

<DetailsPageHeader
	heading={warehouseData?.warehouse_name}
	actionBtnLink="/edit/warehouse/{warehouseData?.$id}"
/>
<div class="warehouses__list">
	<InventoryTableHeader />
	{#if warehouseInventories && Array.isArray(warehouseInventories) && warehouseInventories.length > 0}
		{#each warehouseInventories as inventory (inventory?.$id)}
			<InventoryCard {inventory} deleteAction="/inventory?/deleteInventory" />
		{/each}
	{/if}
	<div class="warehouses-page"></div>
</div>

<style lang="scss">
	.warehouses {
		&__list {
			display: flex;
			flex-direction: column;
		}
	}
</style>
