<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { navigating } from '$app/stores';

	let showMenu: boolean = false;

	$: if ($navigating) handleCloseMenu();

	const handleToggleMenu = () => (showMenu = !showMenu);
	const handleCloseMenu = () => (showMenu = false);
</script>

<header>
	<button on:click={handleToggleMenu}>
		<iconify-icon icon="charm:menu-hamburger" />
	</button>
	<h1>Milan Paunovic</h1>
</header>

{#if showMenu}
	<HamburgerMenu />
{/if}

<style lang="scss">
	button {
		z-index: 5;
		position: absolute;
		top: 20px;
		left: 20px;
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;
		background: transparent;
		color: inherit;
		font: inherit;
		line-height: normal;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
		-webkit-appearance: none;
		iconify-icon {
			font-size: 2rem;
		}
	}

	header {
		display: inline-flex;
		justify-content: center;
		padding: 0 1rem;
		color: #ffbe0b;
		background: linear-gradient(#db2b3980, 1%, #db2b3900);
	}
	nav {
		display: inline-flex;
		align-items: center;
		flex-grow: 1;
	}
</style>
