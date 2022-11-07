<script>
	import Header from '$lib/layout/Header.svelte';
	import { fade } from 'svelte/transition';
	import { OnMount, mobile, Fractils, MacScrollbar } from 'fractils';

	import Footer from '$lib/layout/Footer.svelte';
	import MobileHeader from '$lib/layout/MobileHeader.svelte';
</script>

<MacScrollbar disabled={false} />
<Fractils />

{#if $mobile}
	<MobileHeader />
{:else}
	<Header />
{/if}
<div class="wrapper">
	<OnMount>
		<div in:fade={{ delay: 200, duration: 1000 }} class="main">
			<slot />
		</div>
	</OnMount>
</div>
<Footer />

<style lang="scss">
	:global(a) {
		color: #ffbe0b;
		text-decoration: none;
		transition: all 250ms ease-in;
		outline: none;
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
		flex: 1;
		padding: 1rem 2rem;
	}
	.wrapper {
		display: flex;
		flex-grow: 1;
	}
</style>
