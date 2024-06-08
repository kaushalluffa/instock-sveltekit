<script>
	import logoSvg from '$assets/logo.svg';
</script>

<div class="header">
	<div class="header__content">
		<h1 class="header__logo">
			<img src={logoSvg} alt="logo" />
		</h1>
		<nav class="header__nav">
			<ul class="header__nav--items">
				<li class="header__nav--item">
					<a href="/" class="header__nav--link">Warehouses</a>
				</li>
				<li class="header__nav--item">
					<a href="/inventory" class="header__nav--link"> Inventory</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style lang="scss">
	.header {
		background-color: $in-stock-graphite;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		&__content {
			margin: 0 auto;
			gap: 2rem;
			padding: 2rem 1rem 6rem 1rem;
			display: flex;
			flex-direction: column;
			width: 1020px;
			max-width: 100%;
			@include tablet {
				justify-content: space-between;
				flex-direction: row;
				align-items: center;
			}
		}
		&__logo {
			display: flex;
			margin: 0;
			padding: 1rem;
			justify-content: center;
		}

		&__nav {
			display: flex;
			align-items: center;
			@include tablet {
				padding: 1rem;
			}
			&--items {
				width: 100%;
				display: flex;
				justify-content: space-between;
				@include tablet {
					gap: 1.5rem;
				}
			}
			&--link {
				text-decoration: none;
				color: $in-stock-white;
				background-color: $in-stock-black;
				padding: 0.5rem 1.5rem;
				border-radius: 20px;
				text-align: center;
			}
		}
	}
</style>
