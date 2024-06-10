<script>
	import sortIcon from '$assets/sortIcon.svg';
</script>

<div class="inventory-table-header">
	<p class="inventory-table-header--item-name">
		ITEM NAME <img src={sortIcon} alt="sort item by name" />
	</p>
	<p class="inventory-table-header--category">
		CATEGORY <img src={sortIcon} alt="sort item by category" />
	</p>
	<p class="inventory-table-header--status">
		STATUS <img src={sortIcon} alt="sort item by contact status" />
	</p>
	<p class="inventory-table-header--qty">
		QTY <img src={sortIcon} alt="sort item by contact quantity" />
	</p>
	<p class="inventory-table-header--actions">ACTIONS</p>
</div>

<style lang="scss">
	.inventory-table-header {
		display: none;
		@include tablet {
			display: flex;
			padding: 0.5rem 1rem;
			background-color: $in-stock-light-grey;
		}
		&--item-name,
		&--category,
		&--status,
		&--qty,
		&--actions {
			font-size: $h4M;
			font-weight: 600;
			color: $in-stock-slate;
			line-height: 18px;
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
		&--item-name,
		&--category,
		&--status,
		&--qty {
			img {
				width: 18px;
				height: 18px;
			}
		}
		&--item-name {
			flex: 1.5;
			@include laptop {
				flex: 3;
			}
		}
		&--category {
			flex: 1.5;
			@include laptop {
				flex: 2.9;
			}
		}
		&--status {
			flex: 1.3;
			@include laptop {
				flex: 2.7;
			}
		}
		&--qty {
			flex: 1.3;
			@include laptop {
				flex: 2.55;
			}
		}
		&--actions {
			flex: 0.4;
			@include laptop {
				flex: 0.7;
			}
		}
	}
</style>
