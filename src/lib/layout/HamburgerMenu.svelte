<script>
	import { fly, slide } from 'svelte/transition';
</script>

<nav in:slide={{ duration: 250 }} out:fly={{ duration: 250, delay: 50 }}>
	<ul>
		<li>
			<a href="/">Home 🏠</a>
		</li>
		<li>
			<a href="/about">About 💻</a>
		</li>
		<li>
			<a href="/projects">Projects 💼</a>
		</li>
		<li>
			<a href="/contact">Contact 📧</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		z-index: 4;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #242423;
		animation-name: slide;
		animation-duration: 1s;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 5rem;
		padding-left: 20px;
		list-style: none;
		flex-grow: 1;
		justify-content: flex-end;
		gap: 1rem;
		padding-right: 1rem;

		li {
			width: 100%;
		}
		a {
			font-size: 1.2rem;
			text-decoration: none;
			color: #cfdbd5;
			background-color: #f5cb5c10;
			display: flex;
			text-align: center;
			justify-content: center;
			border-radius: 10px;
			padding: 1rem;
			&:active,
			&:hover {
				color: #f5cb5c;
				background-color: #f5cb5c30;
			}
		}
	}

	// @keyframes slide {
	// 	0% {
	// 		transform: translateX(-100vw);
	// 	}
	// 	100% {
	// 		transform: translateX(0);
	// 	}
	// }
</style>
