<script lang="ts">
	import { fly } from 'svelte/transition';

	export let refresh: any;
</script>

{#key refresh}
	<main in:fly={{ y: -50, duration: 200, delay: 300 }} out:fly={{ y: -50, duration: 200 }}>
		<slot />
	</main>
{/key}

<style lang="scss">
  main {
    display: flex;
    min-height: 70vh;
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
