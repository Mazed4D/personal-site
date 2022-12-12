<script>
	import Header from '$lib/layout/Header.svelte';
	import { mobile, Fractils, MacScrollbar } from 'fractils';
	import { navigating } from '$app/stores';

	import Footer from '$lib/layout/Footer.svelte';
	import MobileHeader from '$lib/layout/MobileHeader.svelte';
	import PageTransition from '$lib/layout/PageTransition.svelte';
</script>

<MacScrollbar disabled={false} />
<Fractils />

{#if $mobile}
	<MobileHeader />
{:else}
	<Header />
{/if}
<div class="wrapper">
	<div class="main">
		<PageTransition refresh={$navigating}>
			<slot />
		</PageTransition>
	</div>
</div>
<Footer />

<style lang="scss">
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
	.main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		flex: 1;
	}
	.wrapper {
		display: flex;
		flex-grow: 1;
		min-height: 100vh;
	}
</style>
