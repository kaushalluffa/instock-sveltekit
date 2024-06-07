<div class="warehouses-page">
	<div class="warehouses__header">
		<h1 class="warehouses__heading">Warehouses</h1>
		<input placeholder="Search..." class="warehouses__search" />
		<a href="/" class="warehouses__add">+ Add New Warehouse</a>
	</div>
</div>

<style lang="scss">
	.warehouses {
		&-page {
			padding: 1rem;
			background-color: $in-stock-white;
			border-radius: 4px;
			height: 100%;
			border-bottom: 1px solid $in-stock-cloud;
			max-width: 1020px;
			width: 100%;
			margin: -4rem 1rem 1rem 1rem;
		}
		&__header {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			@include tablet {
				flex-direction: row;
				justify-content: space-between;
			}
		}
		&__heading {
			font-size: $h1M;
			font-weight: normal;
			@include laptop {
				flex: 2;
			}
		}
		&__search {
			border-radius: 20px;
			border: 1px solid $in-stock-cloud;
			min-height: 36px;
			padding: 0 1rem;
			flex: 1;
		}
		&__add {
			background-color: $in-stock-indigo;
			color: $in-stock-white;
			border-radius: 20px;
			padding: 0.5rem 1rem;
			width: fit-content;
			text-decoration: none;
			text-align: center;
			flex: 1;
			width: 100%;
		}
	}
</style>
