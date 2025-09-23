<script>
	import { fly, slide } from 'svelte/transition';

	function scrollToSection(sectionId) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
		// Close menu after clicking
		const event = new Event('closemenu');
		window.dispatchEvent(event);
	}
</script>

<nav in:slide={{ duration: 250 }} out:fly={{ duration: 250, delay: 50 }}>
	<ul>
		<li>
			<button on:click={() => scrollToSection('hero')}>Home</button>
		</li>
		<li>
			<button on:click={() => scrollToSection('about')}>About</button>
		</li>
		<li>
			<button on:click={() => scrollToSection('projects')}>Projects</button>
		</li>
		<li>
			<button on:click={() => scrollToSection('contact')}>Contact</button>
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
		margin-top: 7rem;
		padding-left: 20px;
		list-style: none;
		flex-grow: 1;
		justify-content: flex-start;
		gap: 1rem;
		padding-right: 20px;

		li {
			width: 100%;
		}

		button {
			width: 100%;
			font-size: 1.2rem;
			text-decoration: none;
			color: #cfdbd5;
			background-color: rgba(245, 203, 92, 0.1);
			display: flex;
			text-align: center;
			justify-content: center;
			border-radius: 10px;
			padding: 1rem;
			border: none;
			cursor: pointer;
			transition: all 0.3s ease;

			&:active,
			&:hover {
				color: #f5cb5c;
				background-color: rgba(245, 203, 92, 0.3);
				transform: translateX(10px);
			}
		}
	}
</style>