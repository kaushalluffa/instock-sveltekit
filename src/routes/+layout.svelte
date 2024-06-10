<script>
	import '../styles/global.scss';
	import { Header, Footer } from '$components';
</script>

<Header />
<div class="content">
	<div class="page-content-wrapper">
		<slot />
	</div>
</div>
<Footer />

<style lang="scss">
	.page-content-wrapper {
		background-color: $in-stock-white;
		border-radius: 4px;
		height: 100%;
		border-bottom: 1px solid $in-stock-cloud;
		max-width: 1020px;
		width: 100%;
		margin: -4rem 1rem 1rem 1rem;
	}
</style>
