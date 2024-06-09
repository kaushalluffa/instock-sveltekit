<script>
	import backArrow from '$assets/backArrow.svg';
	export let data;
	$: warehouseData = data?.warehouses;
</script>

<div class="add">
	<div class="add__warehouses">
		<div class="add__warehouses--header">
			<a href="/">
				<img class="add__warehouses--backBtn" src={backArrow} alt="back arrow" />
			</a>
			<h1 class="add__warehouses--heading">Edit Warehouses</h1>
		</div>
	</div>
	<form method="POST" class="add__warehouses--form">
		<div class="add__warehouses--inputs">
			<section class="details__warehouse">
				<h2 class="details__heading">Warehouse Details</h2>
				<label class="details__label" for="warehouseName">Warehouse Name</label>
				<input
					class="details__input"
					type="text"
					id="warehouseName"
					name="warehouseName"
					required
					value={warehouseData?.warehouse_name}
				/>
				<input
					class="details__input--hidden"
					type="text"
					id="warehouseId"
					name="warehouseId"
					required
					value={warehouseData?.$id}
				/>
				<label class="details__label" for="streetAddress">Street Address</label>
				<input
					class="details__input"
					type="text"
					id="streetAddress"
					name="streetAddress"
					required
					value={warehouseData?.address}
				/>
				<label class="details__label" for="city">City</label>
				<input
					class="details__input"
					type="text"
					id="city"
					name="city"
					required
					value={warehouseData?.city}
				/>
				<label class="details__label" for="country">Country</label>
				<input
					class="details__input"
					type="text"
					id="country"
					name="country"
					required
					value={warehouseData?.country}
				/>
			</section>
			<section class="details__contact">
				<h2 class="details__heading">Contact Details</h2>
				<label class="details__label" for="contactName">Contact Name</label>
				<input
					class="details__input"
					type="text"
					id="contactName"
					name="contactName"
					required
					value={warehouseData?.contact_name}
				/>
				<label class="details__label" for="position">Position</label>
				<input
					class="details__input"
					type="text"
					id="position"
					name="position"
					required
					value={warehouseData?.contact_position}
				/>
				<label class="details__label" for="phoneNumber">Phone Number</label>
				<input
					class="details__input"
					type="text"
					id="phoneNumber"
					name="phoneNumber"
					required
					value={warehouseData?.contact_phone}
				/>
				<label class="details__label" for="email">Email</label>
				<input
					class="details__input"
					type="email"
					id="email"
					name="email"
					required
					value={warehouseData?.contact_email}
				/>
			</section>
		</div>
		<section class="add__warehouses--actions">
			<a class="add__warehouses--cancel" href="/">Cancel</a>
			<button class="add__warehouses--submit" type="submit">Save</button>
		</section>
	</form>
</div>

<style lang="scss">
	.add {
		background-color: $in-stock-white;
		border-radius: 4px;
		height: 100%;
		max-width: 1020px;
		width: 100%;
		margin: -5rem 1rem 1rem 1rem;
		&__warehouses {
			border-bottom: 1px solid $in-stock-cloud;
			padding: 1rem;
			&--header {
				width: 100%;
				display: flex;
				align-items: center;
				gap: 1rem;
			}
			&--heading {
				font-size: $h1M;
				line-height: 36px;
				font-weight: 600;
				@include laptop {
					flex: 2;
				}
			}

			&--backBtn {
				width: 24px;
				height: 24px;
			}
			&--form {
				display: flex;
				flex-direction: column;
			}
			&--inputs {
				flex-direction: column;
				display: flex;
				@include tablet {
					flex-direction: row;
				}
			}
			&--actions {
				display: flex;
				justify-content: space-between;
				padding: 1rem;
				gap: 1rem;
				@include tablet {
					justify-content: flex-end;
				}
			}
			&--submit {
				background-color: $in-stock-indigo;
				color: $in-stock-white;
				border-radius: 20px;
				padding: 0.5rem;
				border: none;
				flex: 1;
				@include tablet {
					flex: 0.2;
				}
			}
			&--cancel {
				padding: 0.5rem;
				flex: 1;
				background-color: $in-stock-white;
				border: 1px solid $in-stock-cloud;
				border-radius: 20px;
				text-align: center;
				text-decoration: none;
				color: $in-stock-black;
				@include tablet {
					flex: 0.2;
				}
			}
		}
	}
	.details {
		&__heading {
			font-size: $h2M;
			font-weight: 600;
		}
		&__label {
			padding-left: 0.5rem;
			margin-top: 0.5rem;
		}
		&__input {
			margin-top: 0.5rem;
			border-radius: 20px;
			border: 1px solid $in-stock-cloud;
			min-height: 36px;
			padding: 0 1rem;
			flex: 1;
			&--hidden {
				display: none;
			}
		}
		&__warehouse {
			display: flex;
			border-bottom: 1px solid $in-stock-cloud;
			flex-direction: column;
			padding: 1.5rem;
			flex: 1;
			border-right: 1px solid $in-stock-cloud;
		}
		&__contact {
			flex: 1;
			padding: 1.5rem;
			display: flex;
			border-bottom: 1px solid $in-stock-cloud;
			flex-direction: column;
		}
	}
</style>
