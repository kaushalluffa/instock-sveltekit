<script>
	import editIconWhite from '$assets/editIconWhite.svg';
	import backArrow from '$assets/backArrow.svg';
	export let heading;
	export let actionBtnLink = '/';
	export let actionBtnText = 'Edit';
</script>

<div class="details-page-header">
	<div class="details-page-header__left">
		<a href="/" class="details-page-header__backBtn">
			<img class="details-page-header--backBtn" src={backArrow} alt="back arrow" />
		</a>
		<h1 class="details-page-header__heading">{heading}</h1>
	</div>
	<a href={actionBtnLink} class="details-page-header__edit">
		<img src={editIconWhite} alt="go to edit {heading} warehouse" />
		<span class="details-page-header__text">{actionBtnText}</span>
	</a>
</div>

<style lang="scss">
	.details-page-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		&__text {
			display: none;
			@include tablet {
				display: block;
			}
		}
		&__backBtn {
			display: flex;
		}
		&__left {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
		&__heading {
			font-size: $h1M;
			font-weight: normal;
			@include laptop {
				flex: 2;
			}
		}
		&__edit {
			color: $in-stock-white;
			text-decoration: none;
			padding: 0.5rem;
			display: flex;
			background-color: $in-stock-indigo;
			gap: 0.5rem;
			border-radius: 50%;
			@include tablet {
				border-radius: 20px;
				padding: 8px 16px 8px 18px;
			}
		}
	}
</style>
