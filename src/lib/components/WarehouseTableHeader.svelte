<script>
	import sortIcon from '$assets/sortIcon.svg';
</script>

<div class="warehouses-table-header">
	<p class="warehouses-table-header--warehouse">
		WAREHOUSE <img src={sortIcon} alt="sort warehouse by name" />
	</p>
	<p class="warehouses-table-header--address">
		ADDRESS <img src={sortIcon} alt="sort warehouse by address" />
	</p>
	<p class="warehouses-table-header--contact-name">
		CONTACT <img src={sortIcon} alt="sort warehouse by contact name" />
	</p>
	<p class="warehouses-table-header--contact-info">
		CONTACT INFO <img src={sortIcon} alt="sort warehouse by contact info" />
	</p>
	<p class="warehouses-table-header--actions">ACTIONS</p>
</div>

<style lang="scss">
	.warehouses-table-header {
		display: none;
		@include tablet {
			display: flex;
			padding: 0.5rem 1rem;
			background-color: $in-stock-light-grey;
		}
		&--warehouse,
		&--address,
		&--contact-name,
		&--contact-info,
		&--actions {
			font-size: $h4M;
			font-weight: 600;
			color: $in-stock-slate;
			line-height: 18px;
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
		&--warehouse,
		&--address,
		&--contact-name,
		&--contact-info {
			img {
				width: 18px;
				height: 18px;
			}
		}
		&--warehouse {
			flex: 1.5;
			@include laptop {
				flex: 3;
			}
		}
		&--address {
			flex: 1.5;
			@include laptop {
				flex: 2.9;
			}
		}
		&--contact-name {
			flex: 1.3;
			@include laptop {
				flex: 2.7;
			}
		}
		&--contact-info {
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
