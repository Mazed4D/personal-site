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
	}

	#footer-text {
		font-size: 1.2rem;
		text-align: center;
		padding: 1rem;
		border: 1px solid #f5cb5c;
		border-radius: 50px;
		background: #242423;
		box-shadow: -20px -20px 60px #1e1e1d, 20px 20px 60px #2a2a29;
		margin-bottom: 3rem;
	}
</style>
