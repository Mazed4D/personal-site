<script>
	import { fly } from 'svelte/transition';
	/**
	 * @type {any}
	 */
	export let refresh;
</script>

{#key refresh}
	<!-- <main in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}> -->
	<main in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
		<slot />
	</main>
{/key}

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		flex: 1;
		padding: 1rem 2rem;
		align-items: center;
		@media only screen and (max-width: 900px) {
			margin-top: 3rem;
		}
	}
</style>
