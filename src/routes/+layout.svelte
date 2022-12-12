<script>
	import Header from '$lib/layout/Header.svelte';
	import { Fractils, MacScrollbar } from 'fractils';
	import { navigating } from '$app/stores';

	import Footer from '$lib/layout/Footer.svelte';
	import MobileHeader from '$lib/layout/MobileHeader.svelte';
	import PageTransition from '$lib/layout/PageTransition.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></script>
</svelte:head>

<MacScrollbar disabled={false} />
<Fractils />

<MobileHeader />
<Header />

<PageTransition refresh={$navigating}>
	<slot />
</PageTransition>
<Footer />

<style lang="scss">
	@font-face {
		font-family: 'Fira Sans';
		src: url(/fonts/FiraSans-Regular.woff2);
		font-weight: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Fira Sans';
		src: url(/fonts/FiraSans-Bold.woff2);
		font-weight: bold;
		font-display: swap;
	}

	:global(html) {
		font-family: 'Fira Sans', sans-serif;
		color: #cfdbd5;
		min-height: 100vh;
		min-width: 100vw;
		background-color: #242423;
	}

	:global(a) {
		color: #f5cb5c;
		text-decoration: none;
		transition: all 250ms ease-in;
		outline: none;
		&:active,
		&:hover {
			color: #f5cb5c;
			text-shadow: 0 0 15px #f5cb5c60, 0 0 #f5cb5c60;
			-webkit-transition: all 0.5s;
			-moz-transition: all 0.5s;
			-o-transition: all 0.5s;
			transition: all 0.5s;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}
	}

	:global(button) {
		outline: none;
		cursor: pointer;
		&:active,
		&:hover {
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		min-height: 100vh;
		min-width: 100vw;
		background: linear-gradient(300deg, #313130, #242423);
		background-size: 120% 120%;
	}
</style>
