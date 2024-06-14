<script>
	export let formAction = '';
	import { page } from '$app/stores';
	export let inputData = undefined;
	export let submitBtnText = 'Save';
	$: isEditPage = $page.url.pathname.startsWith('/edit');
	$: warehouseData = inputData ?? {
		warehouse_name: '',
		address: '',
		city: '',
		country: '',
		contact_name: '',
		contact_position: '',
		contact_phone: '',
		contact_email: '',
		$id: ''
	};
</script>

<form method="POST" class="warehouse-form" action={formAction}>
	<div class="warehouse-form--inputs">
		<section class="details__warehouse">
			<h2 class="details__heading">Warehouse Details</h2>
			<label class="details__label" for="warehouseName">Warehouse Name</label>
			<input
				value={warehouseData?.warehouse_name}
				class="details__input"
				type="text"
				id="warehouseName"
				name="warehouseName"
				required
			/>
			{#if isEditPage}
				<input
					class="details__input--hidden"
					type="text"
					id="warehouseId"
					name="warehouseId"
					required
					value={warehouseData?.$id}
				/>
			{/if}
			<label class="details__label" for="streetAddress">Street Address</label>
			<input
				value={warehouseData?.address}
				class="details__input"
				type="text"
				id="streetAddress"
				name="streetAddress"
				required
			/>
			<label class="details__label" for="city">City</label>
			<input
				value={warehouseData?.city}
				class="details__input"
				type="text"
				id="city"
				name="city"
				required
			/>
			<label class="details__label" for="country">Country</label>
			<input
				value={warehouseData?.country}
				class="details__input"
				type="text"
				id="country"
				name="country"
				required
			/>
		</section>
		<section class="details__contact">
			<h2 class="details__heading">Contact Details</h2>
			<label class="details__label" for="contactName">Contact Name</label>
			<input
				value={warehouseData?.contact_name}
				class="details__input"
				type="text"
				id="contactName"
				name="contactName"
				required
			/>
			<label class="details__label" for="position">Position</label>
			<input
				value={warehouseData?.contact_position}
				class="details__input"
				type="text"
				id="position"
				name="position"
				required
			/>
			<label class="details__label" for="phoneNumber">Phone Number</label>
			<input
				value={warehouseData?.contact_phone}
				class="details__input"
				type="text"
				id="phoneNumber"
				name="phoneNumber"
				required
			/>
			<label class="details__label" for="email">Email</label>
			<input
				value={warehouseData?.contact_email}
				class="details__input"
				type="email"
				id="email"
				name="email"
				required
			/>
		</section>
	</div>
	<section class="warehouse-form--actions">
		<a href="/" class="warehouse-form--cancel" type="reset">Cancel</a>
		<button class="warehouse-form--submit" type="submit">{submitBtnText}</button>
	</section>
</form>

<style lang="scss">
	.warehouse-form {
		display: flex;
		flex-direction: column;
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
