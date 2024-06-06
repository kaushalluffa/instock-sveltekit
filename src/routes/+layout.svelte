<script>
	import '../styles/global.scss';
	import { Header, Footer } from '$components';
</script>

<Header />
<div class="content">
	<slot />
</div>
<Footer />
