<script>
	import backArrow from '$assets/backArrow.svg';
	export let heading;
	export let backBtnLink = '/';
</script>

<div class="form-page-header">
	<div class="form-page-header--header">
		<a href="{backBtnLink}">
			<img class="form-page-header--backBtn" src={backArrow} alt="back arrow" />
		</a>
		<h1 class="form-page-header--heading">{heading}</h1>
	</div>
</div>

<style lang="scss">
	.form-page-header {
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
	}
</style>
