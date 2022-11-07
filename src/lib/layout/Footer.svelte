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
		background: linear-gradient(45deg, #2c3336, #343d40);
		box-shadow: 20px -20px 60px #2a3033, -20px 20px 60px #384245;
	}

	#coffee {
		color: #b2675e;
		text-shadow: 0 0 5px #b2675e, 0 0 #b2675e;
	}
</style>
