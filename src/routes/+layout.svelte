<script>
	import Header from '$lib/layout/Header.svelte';
</script>

<Header />
<div class="main">
	<slot />
</div>
<footer>
	<p id="footer-text">
		Built with <span id="coffee">coffee</span> & <span id="sveltekit">SvelteKit</span>
	</p>
</footer>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		padding: 1rem 2rem;
	}
	footer {
		display: flex;
		justify-content: center;
		padding: 1rem;
	}
	#coffee {
		color: #b2675e;
	}
	#sveltekit {
		color: #ffbe0b;
	}
</style>
