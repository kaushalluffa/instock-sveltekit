<script>
	export let submitBtnText = 'Save';
	export let isEditPage = false;
	export let categories;
	export let warehouses;
	export let inventoryData = undefined;
	$: inventory = inventoryData ?? {
		item_name: '',
		item_description: '',
		categoriy_id: {
			$id: '',
			name: ''
		},
		$id: '',
		quantity: 0,
		status: ''
	};
</script>

<form method="POST" class="inventory-form">
	<div class="inventory-form__inputs">
		<section class="details__item">
			<h2 class="details__heading">Item Details</h2>
			<label class="details__label" for="itemName">Item Name</label>
			<input
				value={inventory?.item_name}
				class="details__input"
				type="text"
				id="itemName"
				name="itemName"
				required
			/>
			{#if isEditPage}
				<input
					class="details__input--hidden"
					type="text"
					id="itemId"
					name="itemId"
					required
					value={inventory?.$id}
				/>
			{/if}
			<label class="details__label" for="description">Description</label>
			<input
				value={inventory?.item_description}
				class="details__input"
				type="text"
				id="description"
				name="description"
				required
			/>
			<label class="details__label" for="category">Category</label>
			<select
				name="category"
				id="category"
				value={inventory?.categoriy_id?.$id}
				class="details__select"
			>
				{#if categories && Array.isArray(categories) && categories.length > 0}
					{#each categories as category (category?.$id)}
						<option value={category?.$id}>{category?.name}</option>
					{/each}
				{/if}
			</select>
		</section>
		<section class="details__availability">
			<h2 class="details__heading">Item Availability</h2>
			<label class="details__label" for="quantity">Status</label>
			<div class="details__status-radio">
				<label for="inStock">
					<input
						checked={inventory?.status === 'IN_STOCK'}
						type="radio"
						id="inStock"
						name="status"
						value="IN_STOCK"
						required
					/>
					In Stock
				</label>
				<label for="outOfStock">
					<input
						checked={inventory?.status === 'OUT_OF_STOCK'}
						type="radio"
						id="outOfStock"
						name="status"
						value="OUT_OF_STOCK"
						required
					/>
					Out of Stock
				</label>
			</div>
			<label class="details__label" for="quantity">Quantity</label>
			<input
				value={inventory?.quantity}
				class="details__input"
				type="number"
				id="quantity"
				name="quantity"
				required
			/>
			<label class="details__label" for="warehouse">Warehouse</label>
			<select name="warehouse" id="warehouse" class="details__select">
				{#if warehouses && Array.isArray(warehouses) && warehouses.length > 0}
					{#each warehouses as warehouse (warehouse?.$id)}
						<option value={warehouse?.$id}>{warehouse?.warehouse_name}</option>
					{/each}
				{/if}
			</select>
		</section>
	</div>
	<section class="inventory-form--actions">
		<a href="/" class="inventory-form--cancel" type="reset">Cancel</a>
		<button class="inventory-form--submit" type="submit">{submitBtnText}</button>
	</section>
</form>

<style lang="scss">
	.inventory-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		&__inputs {
			display: flex;
			flex-direction: column;
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
		&__status {
			&-radio {
				margin-top: 0.5rem;
				display: flex;
				align-items: center;
				gap: 1rem;
			}
		}
		&__heading {
			font-size: $h2M;
			font-weight: 600;
		}
		&__label {
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
		&__select {
			margin-top: 0.5rem;
			border-radius: 20px;
			border: 1px solid $in-stock-cloud;
			min-height: 36px;
			padding: 0 1rem;
			flex: 1;
			font-size: 1rem;
		}
		&__item {
			display: flex;
			border-bottom: 1px solid $in-stock-cloud;
			flex-direction: column;
			padding: 1.5rem;
			flex: 1;
			@include tablet {
				border-right: 1px solid $in-stock-cloud;
			}
		}
		&__availability {
			flex: 1;
			padding: 1.5rem;
			display: flex;
			border-bottom: 1px solid $in-stock-cloud;
			flex-direction: column;
		}
	}
</style>
