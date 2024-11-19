<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { navigating } from '$app/stores';

	let showMenu: boolean = false;

	$: if ($navigating) handleCloseMenu();

	const handleToggleMenu = () => {
		window?.navigator?.vibrate?.(50);
		showMenu = !showMenu;
	};
	const handleCloseMenu = () => (showMenu = false);
</script>

<header>
	<button on:click={handleToggleMenu} aria-label="Main Menu Button" class="btn">
		<iconify-icon icon="charm:menu-hamburger" />
	</button>
	<h1>Milan Paunovic</h1>
</header>

{#if showMenu}
	<HamburgerMenu />
{/if}

<style lang="scss">
  button {
    position: relative;
    cursor: pointer;
    z-index: 100;
    position: fixed;
    top: 20px;
    left: 20px;
    border: none;
    margin: 0;
    padding: 1rwm;
    width: auto;
    background-color: #242423;
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

  .btn::after {
    display: none;
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: #f5cb5c30;

    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;

    /* Center the ripple */
    top: 50%;
    left: 50%;

    animation: ripple 500ms;
    opacity: 0;
  }

  .btn:focus:not(:active)::after {
    display: block;
  }

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(10);
    }
  }

  header {
    display: inline-flex;
    z-index: 5;
    position: fixed;
    min-width: 100vw;
    justify-content: center;
    border-radius: 0 0 50px 50px;
    background: #242423;
    color: #f5cb5c;
    border-bottom: 1px solid #f5cb5c;
    @media only screen and (min-width: 900px) {
      display: none;
    }
  }
</style>
