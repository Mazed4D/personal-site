<footer>
	<p id="footer-text">
		Built with <span id="coffee">coffee ☕</span> &
		<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer"
			>SvelteKit <iconify-icon icon="logos:svelte-icon" /></a
		>
	</p>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		padding: 1rem;
		background: linear-gradient(to top, #db2b3980, 1%, #db2b3900);
	}

	#footer-text {
		font-size: 1.2rem;
		text-align: center;
		padding: 1rem;
		border: 1px solid #ffbe0b;
		border-radius: 50px;
		background: #31393c;
		box-shadow: inset 20px 20px 60px #2a3033, inset -20px -20px 60px #384245;
	}

	#coffee {
		color: #b2675e;
	}
</style>
