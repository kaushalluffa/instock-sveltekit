<script>
	export let heading;
	export let placeholder = 'Search...';
	export let actionBtnLink = '/';
	export let actionBtnText = '+ Add';
</script>

<div class="page-header">
	<h1 class="page-header__heading">{heading}</h1>
	<input {placeholder} class="page-header__search" />
	<a href={actionBtnLink} class="page-header__actionBtn">{actionBtnText}</a>
</div>

<style lang="scss">
	.page-header {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		@include tablet {
			flex-direction: row;
			justify-content: space-between;
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
        &__actionBtn {
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
