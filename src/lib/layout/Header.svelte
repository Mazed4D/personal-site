<script>
	import { onMount } from 'svelte';

	let currentSection = 'hero';
	let isScrolling = false;

	onMount(() => {
		// Track which sections are currently visible
		let visibleSections = new Set();

		const observerOptions = {
			root: null,
			rootMargin: '-100px 0px -100px 0px',
			threshold: [0, 0.25, 0.5, 0.75, 1]
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					visibleSections.add(entry.target.id);
				} else {
					visibleSections.delete(entry.target.id);
				}
			});

			// Update current section based on scroll position
			if (visibleSections.size > 0) {
				// Get the topmost visible section
				const sections = ['hero', 'about', 'projects', 'contact'];
				for (const sectionId of sections) {
					if (visibleSections.has(sectionId)) {
						currentSection = sectionId;
						break;
					}
				}
			}
		}, observerOptions);

		const sections = document.querySelectorAll('section[id]');
		sections.forEach((section) => observer.observe(section));

		const handleScroll = () => {
			isScrolling = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			sections.forEach((section) => observer.unobserve(section));
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToSection(sectionId) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header class:scrolled={isScrolling}>
	<h1>
		<button on:click={() => scrollToSection('hero')} class="logo-button">
			Milan Paunovic
		</button>
	</h1>
	<nav>
		<ul>
			<li>
				<button
					on:click={() => scrollToSection('hero')}
					class:active={currentSection === 'hero'}
					class="nav-link"
				>
					Home
				</button>
			</li>
			<li>
				<button
					on:click={() => scrollToSection('about')}
					class:active={currentSection === 'about'}
					class="nav-link"
				>
					About
				</button>
			</li>
			<li>
				<button
					on:click={() => scrollToSection('projects')}
					class:active={currentSection === 'projects'}
					class="nav-link"
				>
					Projects
				</button>
			</li>
			<li>
				<button
					on:click={() => scrollToSection('contact')}
					class:active={currentSection === 'contact'}
					class="nav-link"
				>
					Contact
				</button>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 1000;
		display: inline-flex;
		width: 100%;
		padding: 1rem 2rem;
		color: #f5cb5c;
		background: rgba(31, 31, 30, 0.7);
		backdrop-filter: blur(20px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		border-bottom: 1px solid rgba(245, 203, 92, 0.05);

		&.scrolled {
			background: rgba(31, 31, 30, 0.95);
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
			padding: 0.8rem 2rem;
			border-bottom: 1px solid rgba(245, 203, 92, 0.1);
		}

		@media only screen and (max-width: 900px) {
			display: none;
		}
	}

	h1 {
		margin: 0;
		display: flex;
		align-items: center;
	}

	.logo-button {
		font-size: 1.5rem;
		font-weight: bold;
		color: #f5cb5c;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		transition: all 250ms ease-in;

		&:hover {
			transform: scale(1.05);
			text-shadow: 0 0 15px rgba(245, 203, 92, 0.5);
		}
	}

	nav {
		display: inline-flex;
		align-items: center;
		flex-grow: 1;
	}

	ul {
		list-style: none;
		flex-grow: 1;
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		gap: 2rem;
		padding: 0;
		margin: 0;

		.nav-link {
			font-size: 1.1rem;
			background: none;
			border: none;
			color: #cfdbd5;
			cursor: pointer;
			padding: 0.5rem 1rem;
			border-radius: 25px;
			transition: all 0.3s ease;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: 0;
				height: 2px;
				background: #f5cb5c;
				transition: width 0.3s ease;
			}

			&:hover {
				color: #f5cb5c;
				background: rgba(245, 203, 92, 0.1);

				&::before {
					width: 80%;
				}
			}

			&.active {
				color: #f5cb5c;
				background: rgba(245, 203, 92, 0.15);

				&::before {
					width: 80%;
				}
			}
		}
	}
</style>