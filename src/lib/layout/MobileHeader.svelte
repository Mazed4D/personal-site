<script lang="ts">
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { onMount } from 'svelte';

	let showMenu: boolean = false;
	let isScrolling = false;

	onMount(() => {
		const handleCloseMenuEvent = () => handleCloseMenu();
		window.addEventListener('closemenu', handleCloseMenuEvent);

		const handleScroll = () => {
			isScrolling = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('closemenu', handleCloseMenuEvent);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleToggleMenu = () => {
		window?.navigator?.vibrate?.(50);
		showMenu = !showMenu;
	};
	const handleCloseMenu = () => (showMenu = false);

	function scrollToSection(sectionId) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header class:scrolled={isScrolling}>
	<button on:click={handleToggleMenu} aria-label="Main Menu Button" class="btn">
		<iconify-icon icon="charm:menu-hamburger" />
	</button>
	<h1>
		<button on:click={() => scrollToSection('hero')} class="logo-button">
			Milan Paunovic
		</button>
	</h1>
</header>

{#if showMenu}
	<HamburgerMenu />
{/if}

<style lang="scss">
  button.btn {
    position: absolute;
    cursor: pointer;
    z-index: 101;
    left: 1rem;
    border: none;
    margin: 0;
    padding: 0.5rem;
    width: auto;
    background-color: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    iconify-icon {
      font-size: 1.5rem;
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
    z-index: 100;
    position: fixed;
    top: 0;
    min-width: 100vw;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: rgba(31, 31, 30, 0.9);
    backdrop-filter: blur(10px);
    color: #f5cb5c;
    transition: all 0.3s ease;

    &.scrolled {
      background: rgba(31, 31, 30, 0.95);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      padding: 0.8rem;
    }

    @media only screen and (min-width: 900px) {
      display: none;
    }
  }

  h1 {
    margin: 0;
    flex-grow: 1;
    text-align: center;
  }

  .logo-button {
    font-size: 1.2rem;
    font-weight: bold;
    color: #f5cb5c;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
</style>
