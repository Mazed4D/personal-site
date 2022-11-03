<script>
	import Header from '$lib/layout/Header.svelte';
	import SvelteLogo from '$lib/layout/SvelteLogo.svelte';
</script>

<Header />
<div class="main">
	<slot />
</div>
<footer>
	<p id="footer-text">
		Built with <span id="coffee">coffee ☕</span> &
		<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit <SvelteLogo /></a>
	</p>
</footer>

<style lang="scss">
	:global(a) {
		color: #ffbe0b;
		text-decoration: none;
		transition: all 250ms ease-in;
		&:active,
		&:hover {
			color: #ffbe0b;
			text-shadow: 0 0 15px #ffbe0b60, 0 0 #ffbe0b60;
			-webkit-transition: all 0.5s;
			-moz-transition: all 0.5s;
			-o-transition: all 0.5s;
			transition: all 0.5s;
		}
	}
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
		background: linear-gradient(to top, #db2b3980, 1%, #db2b3900);
	}

	#footer-text {
		text-align: center;
		background-color: #31393c;
		padding: 1rem;
		border-radius: 1rem;
		border: 1px solid #ffbe0b;
	}
	#coffee {
		color: #b2675e;
	}
</style>
