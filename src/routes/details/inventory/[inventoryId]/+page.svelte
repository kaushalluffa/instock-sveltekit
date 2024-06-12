<script>
	import rightArrowIcon from '$assets/rightArrowIcon.svg';
	import { DetailsPageHeader } from '$components';
	export let data;
	$: inventoryData = data?.inventoryDetails;
</script>

<DetailsPageHeader
	heading={inventoryData?.item_name}
	actionBtnLink="/edit/inventory/{inventoryData?.$id}"
	actionBtnText="Edit"
/>
<div class="inventory__details">
	<div class="inventory__left">
		<div class="inventory__description">
			<h4 class="inventory__heading">ITEM DESCRIPTION:</h4>
			<p class="inventory__text">{inventoryData?.item_description}</p>
		</div>
		<div class="inventory__category">
			<h4 class="inventory__heading">CATEGORY:</h4>
			<p class="inventory__text">{inventoryData?.category?.name}</p>
		</div>
	</div>
	<div class="inventory__right">
		<div class="inventory__right--status-qty">
			<div class="inventory__status">
				<h4 class="inventory__heading">STATUS:</h4>
				<p class="inventory__text">{inventoryData?.status?.split('_')?.join(' ')}</p>
			</div>
			<div class="inventory__quantity">
				<h4 class="inventory__heading">QUANTITY:</h4>
				<p class="inventory__text">{inventoryData?.quantity}</p>
			</div>
		</div>
		<div class="inventory__warehouse">
			<h4 class="inventory__heading">WAREHOUSE:</h4>
			<a href="/details/warehouse/{inventoryData?.warehouses?.$id}" class="inventory__text--link">
				{inventoryData?.warehouses?.warehouse_name}
				<img src={rightArrowIcon} alt="go to {inventoryData?.warehouses?.warehouse_name} details" />
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.inventory {
		&__details {
			border-top: 1px solid $in-stock-cloud;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			@include tablet {
				flex-direction: row;
			}
		}
		&__heading {
			font-size: $h4M;
			font-weight: 600;
			line-height: 16px;
			color: $in-stock-slate;
		}
		&__text {
			font-size: $p2M;
			font-weight: 400;
			line-height: 20px;
			color: $in-stock-black;
			margin-top: 0.5rem;
			&--link {
				display: flex;
				align-items: center;
				color: $in-stock-indigo;
				text-decoration: none;
				font-weight: 600;
				font-size: $h3M;
				line-height: 20px;
				img {
					width: 20px;
					height: 20px;
				}
			}
		}
		&__left,
		&__right {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			flex: 1;
		}
		&__left {
			@include tablet {
				border-right: 1px solid $in-stock-cloud;
			}
		}
		&__right {
			&--status-qty {
				display: flex;
				justify-content: space-between;
			}
		}
		&__quantity,
		&__status {
			flex: 1;
		}
	}
</style>
