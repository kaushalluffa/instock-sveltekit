<script>
	import deleteIcon from '$assets/deleteIcon.svg';
	import rightArrowIcon from '$assets/rightArrowIcon.svg';
	import editIcon from '$assets/editIcon.svg';
	export let inventory;
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
				{inventory?.categoriy_id?.name}
			</p>
		</div>
		<form class="inventory-card--form">
			<button class="inventory-card--delete">
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
			<button class="inventory-card--delete delete-tablet">
				<img src={deleteIcon} alt="delete button" />
			</button>
		</form>
	</div>
</div>
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
</style>