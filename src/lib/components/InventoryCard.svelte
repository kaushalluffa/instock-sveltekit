<script>
	import deleteIcon from '$assets/deleteIcon.svg';
	import rightArrowIcon from '$assets/rightArrowIcon.svg';
	import editIcon from '$assets/editIcon.svg';
	export let inventory;
	export let deleteAction = '';
	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog;
	let showModal = false;
	$: if (dialog && showModal) dialog.showModal();
</script>

<div class="inventory-card">
	<div class="inventory-card--left">
		<div class="inventory-card--item-name">
			<h4 class="inventory-card--heading">INVENTORY ITEM</h4>
			<a href="/details/inventory/{inventory?.$id}" class="inventory-card--item-link">
				{inventory?.item_name}
				<img src={rightArrowIcon} alt="go to {inventory?.item_name} details" />
			</a>
		</div>
		<div class="inventory-card--item-category">
			<h4 class="inventory-card--heading">CATEGORY</h4>
			<p class="inventory-card--text">
				{inventory?.category?.name}
			</p>
		</div>
		<form class="inventory-card--form">
			<button class="inventory-card--delete" on:click={() => (showModal = true)}>
				<img src={deleteIcon} alt="delete button" />
			</button>
		</form>
	</div>
	<div class="inventory-card--right">
		<div class="inventory-card--item-status">
			<h4 class="inventory-card--heading">STATUS</h4>
			<p class="inventory-card--text">{inventory?.status?.split('_')?.join(' ')}</p>
		</div>
		<div class="inventory-card--item-qty">
			<h4 class="inventory-card--heading">QTY</h4>
			<p class="inventory-card--text">{inventory?.quantity}</p>
		</div>
		<form class="inventory-card--form">
			<a href="/edit/inventory/{inventory?.$id}" class="inventory-card--edit">
				<img src={editIcon} alt="edit button" />
			</a>
			<button class="inventory-card--delete delete-tablet" on:click={() => (showModal = true)}>
				<img src={deleteIcon} alt="delete button" />
			</button>
		</form>
	</div>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	open={showModal}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div class="delete__modal">
		<div class="delete__modal--top">
			<h1 class="delete__modal--heading">
				Delete {inventory?.item_name} inventory item?
			</h1>

			<p class="delete__modal--message">
				Please confirm that you'd like to delete {inventory?.item_name} from the inventory list. You
				won't be able to undo this action.
			</p>
		</div>
		<div class="delete__modal--actions">
			<button
				class="delete__modal--cancel"
				on:click={() => {
					dialog && dialog.close();
				}}>Cancel</button
			>
			<form method="POST" action={deleteAction}>
				<button class="delete__modal--delete" name="inventoryId" value={inventory?.$id}>Delete</button>
			</form>
		</div>
	</div>
</dialog>

<style lang="scss">
	.inventory-card {
		display: flex;
		border-top: 1px solid $in-stock-cloud;
		padding: 1rem;
		&--form {
			display: flex;
			align-items: center;
		}
		&--item {
			&-name,
			&-category,
			&-status,
			&-qty {
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
	.delete-tablet {
		display: none;
		@include tablet {
			display: block;
		}
	}
	.delete {
		&__modal {
			padding: 1rem;
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: space-between;
			width: 500px;
			height: 500px;
			&--heading {
				font-size: $h1M;
				font-weight: 600;
				line-height: 36px;
			}
			&--actions {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
			}
			&--cancel,
			&--delete {
				border-radius: 20px;
				padding: 8px 63px;
			}
			&--cancel {
				border: 1px solid $in-stock-cloud;
				color: $in-stock-slate;
				background-color: $in-stock-white;
			}
			&--delete {
				background-color: $in-stock-red;
				color: white;
				border: 1px solid $in-stock-red;
			}
		}
	}
</style>
