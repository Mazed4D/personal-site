<script>
	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import MobileHeader from '$lib/layout/MobileHeader.svelte';
	import PageTransition from '$lib/layout/PageTransition.svelte';

	import { Fractils, MacScrollbar } from 'fractils';
	import { navigating } from '$app/stores';
</script>

<svelte:head>
	<script src="/script/iconify.js" defer></script>
	<meta name="theme-color" content="#2a2a29">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta name="apple-mobile-web-app-capable" content="yes">
</svelte:head>

<Fractils />
<MacScrollbar disabled />

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
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Fira Sans';
    src: url(/fonts/FiraSans-Bold.woff2);
    font-weight: 700;
    font-display: swap;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  :global(html) {
    margin: 0;
    padding: 0;
    min-height: 100%;
    min-height: -webkit-fill-available; /* iOS Safari fix */
    background: #1f1f1e; /* Fallback color */
    background: linear-gradient(300deg, #2a2a29, #1f1f1e);
    background-attachment: fixed; /* Prevents background shifting */
  }

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* iOS Safari fix */
    font-family: 'Fira Sans', sans-serif;
    color: #cfdbd5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:
            url('/images/noise.svg'),
            linear-gradient(300deg, #2a2a29, #1f1f1e),
            radial-gradient(circle at center, rgba(42, 42, 41, 0.8) 0%, rgba(31, 31, 30, 0.8) 100%);
    background-size: 400px 400px, 200% 200%, 200% 200%;
    background-repeat: repeat, no-repeat, no-repeat;
    background-blend-mode: screen, darken, normal;
    background-attachment: fixed; /* Prevents background shifting */
    scroll-behavior: smooth;
    position: relative;
    animation: gradientShift 15s ease infinite;
    /* Fix for iOS Safari overscroll */
    overscroll-behavior: none;
    -webkit-overflow-scrolling: touch;
  }

  /* Add this if you still see white edges */
  :global(#svelte) {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background: transparent;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  :global(a) {
    color: #f5cb5c;
    text-decoration: none;
    transition: color 200ms ease-in-out, text-shadow 200ms ease-in-out;
    outline: none;

    &:hover,
    &:focus {
      text-shadow: 0 0 10px #f5cb5c80;
    }
  }

  :global(button) {
    cursor: pointer;
    background: none;
    border: none;
    color: inherit;
    transition: color 200ms ease-in-out;

    &:hover,
    &:focus {
      color: #f5cb5c;
      outline: none;
    }
  }

  :global(.scrollbar-hidden) {
    overflow: hidden;
  }
</style>