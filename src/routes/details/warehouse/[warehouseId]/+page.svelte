<script>
	import deleteIcon from '$assets/deleteIcon.svg';
	import editIcon from '$assets/editIcon.svg';
	import rightArrowIcon from '$assets/rightArrowIcon.svg';
	import backArrow from '$assets/backArrow.svg';
	import sortIcon from '$assets/sortIcon.svg';
	export let data;
	$: warehouseInventories = data?.warehouseInventories?.documents;
	$: warehouseData = data?.warehouse;
	// $: totalWarehouses = data?.warehouses?.toal;
	$: console.log(warehouseInventories);
</script>

<div class="warehouses-page">
	<div class="warehouses__header">
		<a href="/">
			<img class="add__warehouses--backBtn" src={backArrow} alt="back arrow" />
		</a>
		<h1 class="warehouses__heading">{warehouseData?.warehouse_name}</h1>
		<a href="/add/warehouse" class="warehouses__add">
			<img src={editIcon} alt="go to edit {warehouseData?.warehouse_name} warehouse" />
		</a>
	</div>
	<div class="warehouses__list">
		<div class="warehouses__table--header">
			<p class="warehouses__table--warehouse">
				ITEM NAME <img src={sortIcon} alt="sort warehouse by name" />
			</p>
			<p class="warehouses__table--address">
				CATEGORY <img src={sortIcon} alt="sort warehouse by address" />
			</p>
			<p class="warehouses__table--contact-name">
				STATUS <img src={sortIcon} alt="sort warehouse by contact name" />
			</p>
			<p class="warehouses__table--contact-info">
				QTY <img src={sortIcon} alt="sort warehouse by contact info" />
			</p>
			<p class="warehouses__table--actions">ACTIONS</p>
		</div>
		{#each warehouseInventories as inventory (inventory?.$id)}
			<div class="warehouse__card">
				<div class="warehouse__card--left">
					<div class="warehouse__card--warehouse-name">
						<h4 class="warehouse__card--heading">INVENTORY ITEM</h4>
						<a href="/details/warehouse/{inventory?.$id}" class="warehouse__card--warehouse-link">
							{inventory?.item_name}
							<img src={rightArrowIcon} alt="go to {inventory?.item_name} details" />
						</a>
					</div>
					<div class="warehouse__card--warehouse-address">
						<h4 class="warehouse__card--heading">CATEGORY</h4>
						<p class="warehouse__card--text">
							{inventory?.categoriy_id?.name}
						</p>
					</div>
					<form class="warehouse__card--form">
						<button class="warehouse__card--delete">
							<img src={deleteIcon} alt="delete button" />
						</button>
					</form>
				</div>
				<div class="warehouse__card--right">
					<div class="warehouse__card--warehouse-contact-name">
						<h4 class="warehouse__card--heading">STATUS</h4>
						<p class="warehouse__card--text">{inventory?.status?.split('_')?.join(' ')}</p>
					</div>
					<div class="warehouse__card--warehouse-contact-information">
						<h4 class="warehouse__card--heading">QTY</h4>
						<p class="warehouse__card--text">{inventory?.quantity}</p>
					</div>
					<form class="warehouse__card--form">
						<a href="/edit/warehouse/{inventory?.$id}" class="warehouse__card--edit">
							<img src={editIcon} alt="edit button" />
						</a>
						<button class="warehouse__card--delete delete-tablet">
							<img src={deleteIcon} alt="delete button" />
						</button>
					</form>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.warehouses {
		&__table {
			&--header {
				display: none;
				@include tablet {
					display: flex;
					padding: 0.5rem 1rem;
					background-color: $in-stock-light-grey;
				}
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
		&-page {
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
			align-items: center;
			gap: 1rem;
			padding: 1rem;
			justify-content: space-between;
			@include tablet {
				flex-direction: row;
			}
		}
		&__heading {
			font-size: $h1M;
			font-weight: normal;
			@include laptop {
				flex: 2;
			}
		}

		&__add {
			color: $in-stock-white;
			text-decoration: none;
			flex: 0.5;
		}
		&__list {
			display: flex;
			flex-direction: column;
		}
	}
	.warehouse {
		&__card {
			display: flex;
			border-top: 1px solid $in-stock-cloud;
			padding: 1rem;
			&--form {
				display: flex;
				align-items: center;
			}
			&--warehouse {
				&-name,
				&-address,
				&-contact-name,
				&-contact-information {
					@include tablet {
						flex: 1;
					}
				}
				&-link {
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
			&--left,
			&--right {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				@include tablet {
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
				}
			}
			&--heading {
				@include tablet {
					display: none;
				}
			}
			&--heading {
				font-size: $h4M;
				font-weight: 600;
				color: $in-stock-slate;
				line-height: 1rem;
			}
			&--text {
				font-size: $p2M;
				line-height: 20px;
				font-weight: 400;
			}
			&--delete,
			&--edit {
				background: none;
				border: none;
			}
			&--edit {
				display: flex;
				justify-content: flex-end;
				width: 100%;
				@include tablet {
					display: block;
				}
			}
			&--delete {
				@include tablet {
					display: none;
				}
			}
		}
	}
	.delete-tablet {
		display: none;
		@include tablet {
			display: block;
		}
	}
</style>
