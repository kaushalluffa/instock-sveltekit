<script>
	import { PageHeaderWithSearch, InventoryCard, InventoryTableHeader } from '$components';
	export let data;
	$: inventories = data?.inventories?.documents;
	$: totalInventories = data?.inventories?.total;
</script>

<PageHeaderWithSearch
	heading="Inventory"
	placeholder="Search..."
	actionBtnLink="/add/inventory"
	actionBtnText="+ Add New Item"
/>
<div class="inventories-list">
	<InventoryTableHeader />
	{#if inventories && Array.isArray(inventories) && inventories.length > 0}
		{#each inventories as inventory (inventory?.$id)}
			<InventoryCard {inventory} />
		{/each}
	{/if}
</div>

<style lang="scss">
	.inventories-list {
		display: flex;
		flex-direction: column;
	}
</style>
