<script>
	import deleteIcon from '$assets/deleteIcon.svg';
	import editIcon from '$assets/editIcon.svg';
	import rightArrowIcon from '$assets/rightArrowIcon.svg';
	import sortIcon from '$assets/sortIcon.svg';
	export let data;
	$: warehouses = data?.warehouses?.documents;
	$: totalWarehouses = data?.warehouses?.total;
	// $: console.log(warehouses);
</script>

<div class="warehouses-page">
	<div class="warehouses__header">
		<h1 class="warehouses__heading">Warehouses</h1>
		<input placeholder="Search..." class="warehouses__search" />
		<a href="/add/warehouse" class="warehouses__add">+ Add New Warehouse</a>
	</div>
	<div class="warehouses__list">
		<div class="warehouses__table--header">
			<p class="warehouses__table--warehouse">
				WAREHOUSE <img src={sortIcon} alt="sort warehouse by name" />
			</p>
			<p class="warehouses__table--address">
				ADDRESS <img src={sortIcon} alt="sort warehouse by address" />
			</p>
			<p class="warehouses__table--contact-name">
				CONTACT <img src={sortIcon} alt="sort warehouse by contact name" />
			</p>
			<p class="warehouses__table--contact-info">
				CONTACT INFO <img src={sortIcon} alt="sort warehouse by contact info" />
			</p>
			<p class="warehouses__table--actions">ACTIONS</p>
		</div>
		{#each warehouses as warehouse (warehouse?.$id)}
			<div class="warehouse__card">
				<div class="warehouse__card--left">
					<div class="warehouse__card--warehouse-name">
						<h4 class="warehouse__card--heading">WAREHOUSE</h4>
						<a href="/" class="warehouse__card--warehouse-link">
							{warehouse?.warehouse_name}
							<img src={rightArrowIcon} alt="go to {warehouse?.warehouse_name} details" />
						</a>
					</div>
					<div class="warehouse__card--warehouse-address">
						<h4 class="warehouse__card--heading">ADDRESS</h4>
						<p class="warehouse__card--text">
							{warehouse?.address},
						</p>
						<p class="warehouse__card--text">
							{warehouse?.city}, {warehouse?.country}
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
						<h4 class="warehouse__card--heading">CONTACT NAME</h4>
						<p class="warehouse__card--text">{warehouse?.contact_name}</p>
					</div>
					<div class="warehouse__card--warehouse-contact-information">
						<h4 class="warehouse__card--heading">CONTACT INFORMATION</h4>
						<p class="warehouse__card--text">{warehouse?.contact_phone}</p>
						<p class="warehouse__card--text">{warehouse?.contact_email}</p>
					</div>
					<form class="warehouse__card--form">
						<button class="warehouse__card--edit">
							<img src={editIcon} alt="edit button" />
						</button>
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
					flex: .7;
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
