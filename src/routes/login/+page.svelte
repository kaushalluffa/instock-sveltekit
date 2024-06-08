<!-- src/routes/login/+page.svelte -->
<script>
	/** @type {string|null} */
	let formError = null;
</script>

<form method="post" action="?/login">
	<label for="email">Email</label>
	<input type="email" id="email" name="email" required />
	<label for="password">Password</label>
	<input
		type="password"
		id="password"
		name="password"
		placeholder="SuperSecretPassword"
		required
		minlength="8"
	/>
	<button type="submit">Login</button>
	{#if formError}
		<p>{formError}</p>
	{/if}
</form>
