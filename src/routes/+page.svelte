<script>
	import { onMount } from 'svelte';
	import Card from '$lib/projects/Card.svelte';

	let showScrollTop = false;
	let darkMode = false;
	let mounted = false;

	onMount(() => {
		mounted = true;

		// Check for saved theme preference
		const savedTheme = localStorage.getItem('theme');
		darkMode = savedTheme === 'dark';
		if (darkMode) {
			document.documentElement.classList.add('dark-mode');
		}

		// Handle scroll for scroll-to-top button and parallax
		let ticking = false;
		const handleScroll = () => {
			showScrollTop = window.scrollY > 500;

			// Parallax effects with requestAnimationFrame for better performance
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const scrolled = window.scrollY;
					const parallaxElements = document.querySelectorAll('.parallax');
					parallaxElements.forEach(el => {
						const speed = el.dataset.speed || 0.5;
						el.style.transform = `translateY(${scrolled * speed}px)`;
					});
					ticking = false;
				});
				ticking = true;
			}
		};

		// Intersection observer for fade-in animations
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		}, { threshold: 0.1 });

		document.querySelectorAll('.fade-in').forEach(el => {
			observer.observe(el);
		});

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToSection(sectionId) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function toggleDarkMode() {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark-mode');
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
	}
</script>

<article>
	<!-- Hero Section -->
	<section id="hero" class="hero-section parallax" data-speed="0.5">
		<div class="hero-content fade-in">
			<h1 class="hero-title">
				<span class="name-highlight">Milan Paunovic</span>
				<span class="role">Frontend Developer</span>
			</h1>
			<p class="hero-subtitle">
				Need a <span class="highlight">frontend developer</span> that gets things done?
			</p>
			<div class="cta-container">
				<button on:click={() => scrollToSection('contact')} class="cta-button primary">
					<iconify-icon icon="bxs:right-arrow" />
					Let's get in touch!
					<iconify-icon icon="bxs:left-arrow" />
				</button>
				<button on:click={() => scrollToSection('projects')} class="cta-button secondary">
					View My Work
				</button>
			</div>
		</div>

		<div class="technologies-container fade-in">
			<div class="technologies-carousel">
				<div class="technologies-track">
					<!-- First set of icons -->
					<iconify-icon icon="vscode-icons:file-type-reactjs" aria-label="React" />
					<iconify-icon icon="logos:redux" aria-label="Redux" />
					<iconify-icon icon="logos:create-react-app" aria-label="Create React App" />
					<iconify-icon icon="logos:nextjs-icon" aria-label="Next.js" />
					<iconify-icon icon="logos:gatsby" aria-label="Gatsby" />
					<iconify-icon icon="logos:svelte-icon" aria-label="Svelte" />
					<iconify-icon icon="logos:nodejs-icon" aria-label="Node.js" />
					<iconify-icon icon="simple-icons:express" aria-label="Express.js" />
					<iconify-icon icon="logos:npm-icon" aria-label="npm" />
					<iconify-icon icon="logos:javascript" aria-label="JavaScript" />
					<iconify-icon icon="vscode-icons:file-type-typescript-official" aria-label="TypeScript" />
					<iconify-icon icon="simple-icons:axios" aria-label="Axios" />
					<iconify-icon icon="bi:git" aria-label="Git" />
					<iconify-icon icon="akar-icons:github-fill" aria-label="GitHub" />
					<iconify-icon icon="vscode-icons:file-type-gitlab" aria-label="GitLab" />
					<iconify-icon icon="logos:firebase" aria-label="Firebase" />
					<iconify-icon icon="vscode-icons:file-type-mongo" aria-label="MongoDB" />
					<iconify-icon icon="vscode-icons:file-type-vscode" aria-label="VSCode" />
					<!-- Duplicate set for seamless loop -->
					<iconify-icon icon="vscode-icons:file-type-reactjs" aria-label="React" />
					<iconify-icon icon="logos:redux" aria-label="Redux" />
					<iconify-icon icon="logos:create-react-app" aria-label="Create React App" />
					<iconify-icon icon="logos:nextjs-icon" aria-label="Next.js" />
					<iconify-icon icon="logos:gatsby" aria-label="Gatsby" />
					<iconify-icon icon="logos:svelte-icon" aria-label="Svelte" />
					<iconify-icon icon="logos:nodejs-icon" aria-label="Node.js" />
					<iconify-icon icon="simple-icons:express" aria-label="Express.js" />
					<iconify-icon icon="logos:npm-icon" aria-label="npm" />
					<iconify-icon icon="logos:javascript" aria-label="JavaScript" />
					<iconify-icon icon="vscode-icons:file-type-typescript-official" aria-label="TypeScript" />
					<iconify-icon icon="simple-icons:axios" aria-label="Axios" />
					<iconify-icon icon="bi:git" aria-label="Git" />
					<iconify-icon icon="akar-icons:github-fill" aria-label="GitHub" />
					<iconify-icon icon="vscode-icons:file-type-gitlab" aria-label="GitLab" />
					<iconify-icon icon="logos:firebase" aria-label="Firebase" />
					<iconify-icon icon="vscode-icons:file-type-mongo" aria-label="MongoDB" />
					<iconify-icon icon="vscode-icons:file-type-vscode" aria-label="VSCode" />
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="about-section">
		<div class="section-container fade-in">
			<h2 class="section-title">About Me</h2>
			<div class="about-content">
				<div class="about-text fade-in">
					<h3>React & React Native Specialist</h3>
					<p class="about-lead">
						I craft <span class="highlight">responsive</span>, <span class="highlight">modern</span>, and <span class="highlight">user-focused</span> applications that deliver exceptional experiences.
					</p>
					<p>
						With expertise in React, React Native, and TypeScript, I've built everything from e-commerce platforms to hyper-local shopping apps. I thrive in dynamic environments where innovation meets practical solutions.
					</p>
					<div class="about-skills">
						<div class="skill-badge">Frontend Architecture</div>
						<div class="skill-badge">Mobile Development</div>
						<div class="skill-badge">UI/UX Implementation</div>
						<div class="skill-badge">Performance Optimization</div>
					</div>
					<div class="about-cta">
						Let's build something <strong>amazing</strong> together.
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="projects-section">
		<div class="section-container fade-in">
			<h2 class="section-title">Featured Projects</h2>
			<div class="projects-grid">
				<Card
					link="https://bookvisit.com/"
					id="bookvisit"
					name="BookVisit"
					description="A comprehensive business development platform for the hospitality industry. Contributed to transitioning the frontend from MVC to React and Next.js, enhancing user experience. Also involved in modifying backend MVC/.NET APIs to align with frontend requirements."
					image="/images/bookvisit.jpeg"
				/>
				<Card
					link="https://thetalentbase.com/"
					id="talentbase"
					name="TalentBase"
					description="A platform for connecting businesses with remote workers. Built using TypeScript with React, Redux, Material-UI and react-hook-forms. Consumes data from a REST API created in Java Spring Boot."
					image="/images/talentBase.svg"
				/>
				<Card
					link="https://play.google.com/store/apps/details?id=com.fishmansasha.quickdeal"
					id="quickdeal"
					name="QuickDeal"
					description="An Android application for hyper-local classifieds. Developed using JavaScript with React-Native (Expo), Redux, React-Navigation, NativeBase and Formik. The backend was made in Java Spring Boot and Keycloak."
					image="/images/quickdeal.png"
				/>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact-section">
		<div class="section-container fade-in">
			<h2 class="section-title">Get In Touch</h2>
			<div class="contact-content">
				<div class="contact-card">
					<div class="contact-group">
						<h3>Contact Information</h3>
						<a href="mailto:contact@milanpaunovic.xyz" class="contact-link">
							<iconify-icon icon="mdi:email" />
							contact@milanpaunovic.xyz
						</a>
						<a href="mailto:paunovic.milan@outlook.com" class="contact-link">
							<iconify-icon icon="mdi:email" />
							paunovic.milan@outlook.com
						</a>
						<a href="tel:+381628334294" class="contact-link">
							<iconify-icon icon="ant-design:phone-filled" />
							+381 62 8334294
						</a>
						<p class="location">
							<iconify-icon icon="fa6-solid:location-dot" />
							Smederevo, Serbia
						</p>
					</div>

					<div class="contact-group">
						<h3>Social Media</h3>
						<a href="https://www.linkedin.com/in/milan-paunovic/" target="_blank" rel="noreferrer" class="contact-link">
							<iconify-icon icon="akar-icons:linkedin-box-fill" />
							LinkedIn
						</a>
						<a href="https://gitlab.com/paunovM" target="_blank" rel="noreferrer" class="contact-link">
							<iconify-icon icon="fa6-brands:gitlab" />
							GitLab
						</a>
						<a href="https://github.com/mazed4d" target="_blank" rel="noreferrer" class="contact-link">
							<iconify-icon icon="akar-icons:github-fill" />
							GitHub
						</a>
					</div>

					<div class="contact-group">
						<h3>Resources</h3>
						<a href="/files/Resume.pdf" target="_blank" rel="noreferrer" class="contact-link download">
							<iconify-icon icon="qlementine-icons:resume-16" />
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Floating UI Elements -->
	{#if mounted}
		<!-- Dark Mode Toggle -->
		<button class="theme-toggle" on:click={toggleDarkMode} aria-label="Toggle theme">
			{#if darkMode}
				<iconify-icon icon="ph:sun-bold" />
			{:else}
				<iconify-icon icon="ph:moon-bold" />
			{/if}
		</button>

		<!-- Scroll to Top Button -->
		<button
			class="scroll-to-top {showScrollTop ? 'visible' : ''}"
			on:click={scrollToTop}
			aria-label="Scroll to top"
		>
			<iconify-icon icon="ph:arrow-up-bold" />
		</button>
	{/if}
</article>

<style lang="scss">
	article {
		scroll-behavior: smooth;
	}

	/* Hero Section */
	.hero-section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		position: relative;
		background: radial-gradient(ellipse at center, rgba(245, 203, 92, 0.03) 0%, transparent 50%),
					linear-gradient(180deg, transparent 0%, rgba(31, 31, 30, 0.3) 100%);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: -50%;
			right: -50%;
			width: 200%;
			height: 200%;
			background: radial-gradient(circle, rgba(245, 203, 92, 0.02) 0%, transparent 70%);
			animation: rotate 30s linear infinite;
		}

		@keyframes rotate {
			from { transform: rotate(0deg); }
			to { transform: rotate(360deg); }
		}
	}

	.hero-content {
		text-align: center;
		max-width: 900px;
		margin-bottom: 3rem;
		z-index: 1;
		position: relative;
	}

	.hero-title {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.name-highlight {
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 700;
		background: linear-gradient(135deg, #f5cb5c 0%, #e6ab0a 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: glow 3s ease-in-out infinite;
	}

	@keyframes glow {
		0%, 100% { filter: brightness(1) drop-shadow(0 0 20px rgba(245, 203, 92, 0.3)); }
		50% { filter: brightness(1.1) drop-shadow(0 0 30px rgba(245, 203, 92, 0.5)); }
	}

	.role {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		color: #cfdbd5;
		font-weight: 300;
	}

	.hero-subtitle {
		font-size: clamp(1.2rem, 3vw, 1.8rem);
		color: #819595;
		margin-bottom: 3rem;

		.highlight {
			color: #f5cb5c;
			font-weight: 600;
		}
	}

	.cta-container {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		border-radius: 50px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		position: relative;
		overflow: hidden;

		&.primary {
			background: linear-gradient(135deg, #f5cb5c, #e6ab0a);
			color: #242423;
			font-weight: 600;
			box-shadow: 0 4px 15px rgba(245, 203, 92, 0.3);

			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 6px 25px rgba(245, 203, 92, 0.5);
			}
		}

		&.secondary {
			background: transparent;
			color: #f5cb5c;
			border: 2px solid #f5cb5c;

			&:hover {
				background: rgba(245, 203, 92, 0.1);
				transform: translateY(-2px);
			}
		}
	}

	.technologies-container {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 20px;
		background: linear-gradient(135deg, rgba(36, 36, 35, 0.3), rgba(36, 36, 35, 0.1));
		backdrop-filter: blur(10px);
		border: 1px solid rgba(245, 203, 92, 0.1);
		padding: 1.5rem 0;

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100px;
			z-index: 2;
			pointer-events: none;
		}

		&::before {
			left: 0;
			background: linear-gradient(90deg, rgba(31, 31, 30, 0.8), transparent);
		}

		&::after {
			right: 0;
			background: linear-gradient(-90deg, rgba(31, 31, 30, 0.8), transparent);
		}
	}

	.technologies-carousel {
		overflow: hidden;
		position: relative;
	}

	.technologies-track {
		display: flex;
		gap: 3rem;
		animation: carousel 30s linear infinite;
		width: fit-content;

		iconify-icon {
			font-size: 3rem;
			min-width: 3rem;
			transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			filter: grayscale(0.3);
			opacity: 0.8;
			cursor: pointer;

			&:hover {
				transform: scale(1.2) translateY(-5px);
				filter: grayscale(0) drop-shadow(0 10px 20px rgba(245, 203, 92, 0.4));
				opacity: 1;
			}
		}
	}

	@keyframes carousel {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.technologies-track:hover {
		animation-play-state: paused;
	}

	/* Section Styles */
	.section-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 3rem);
		text-align: center;
		margin-bottom: 3rem;
		background: linear-gradient(135deg, #f5cb5c, #e6ab0a);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		position: relative;
		letter-spacing: -0.02em;
		font-weight: 700;

		&::after {
			content: '';
			position: absolute;
			bottom: -15px;
			left: 50%;
			transform: translateX(-50%);
			width: 80px;
			height: 2px;
			background: linear-gradient(90deg, transparent, #f5cb5c, transparent);
			animation: shimmer 3s ease-in-out infinite;
		}

		@keyframes shimmer {
			0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(0.8); }
			50% { opacity: 1; transform: translateX(-50%) scaleX(1); }
		}
	}

	/* About Section */
	.about-section {
		padding: 5rem 0;
		background: linear-gradient(180deg, transparent, rgba(36, 36, 35, 0.3), transparent);
	}

	.about-content {
		background: linear-gradient(135deg, rgba(36, 36, 35, 0.6), rgba(36, 36, 35, 0.4));
		border-radius: 30px;
		padding: 3rem;
		backdrop-filter: blur(20px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
					inset 0 1px 0 rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(245, 203, 92, 0.1);
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 1px;
			background: linear-gradient(90deg, transparent, rgba(245, 203, 92, 0.3), transparent);
		}
	}

	.about-text {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;

		h3 {
			background: linear-gradient(135deg, #f5cb5c, #e6ab0a);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			font-size: 2rem;
			margin-bottom: 1.5rem;
			font-weight: 700;
		}

		p {
			font-size: 1.1rem;
			line-height: 1.8;
			color: #cfdbd5;
			margin-bottom: 1.5rem;

			&.about-lead {
				font-size: 1.3rem;
				font-weight: 300;
				color: #f5cb5c;
				opacity: 0.9;
				margin-bottom: 2rem;
			}

			.highlight {
				color: #f5cb5c;
				font-weight: 600;
			}
		}
	}

	.about-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		margin: 2rem 0;

		.skill-badge {
			padding: 0.5rem 1.2rem;
			background: rgba(245, 203, 92, 0.1);
			border: 1px solid rgba(245, 203, 92, 0.3);
			border-radius: 25px;
			color: #f5cb5c;
			font-size: 0.95rem;
			font-weight: 500;
			transition: all 0.3s ease;

			&:hover {
				background: rgba(245, 203, 92, 0.2);
				transform: translateY(-2px);
				box-shadow: 0 5px 15px rgba(245, 203, 92, 0.2);
			}
		}
	}

	.about-cta {
		text-align: center;
		font-size: 1.25rem;
		color: #cfdbd5;
		margin-top: 2.5rem;
		font-weight: 300;
		letter-spacing: 0.5px;

		strong {
			color: #f5cb5c;
			font-weight: 700;
			font-size: 1.3rem;
		}
	}

	/* Projects Section */
	.projects-section {
		padding: 5rem 0;
		background: linear-gradient(180deg, transparent, rgba(36, 36, 35, 0.2), transparent);
	}

	.projects-grid {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 2rem 0;
	}

	/* Contact Section */
	.contact-section {
		padding: 5rem 0 3rem;
		background: linear-gradient(180deg, transparent, rgba(36, 36, 35, 0.5));
	}

	.contact-content {
		display: flex;
		justify-content: center;
	}

	.contact-card {
		background: linear-gradient(135deg, rgba(36, 36, 35, 0.8), rgba(36, 36, 35, 0.6));
		border-radius: 30px;
		padding: 3rem;
		backdrop-filter: blur(20px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
					inset 0 1px 0 rgba(255, 255, 255, 0.05);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem;
		width: 100%;
		max-width: 900px;
		border: 1px solid rgba(245, 203, 92, 0.1);
		position: relative;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			top: -50%;
			left: -50%;
			width: 200%;
			height: 200%;
			background: radial-gradient(circle, rgba(245, 203, 92, 0.03) 0%, transparent 70%);
			pointer-events: none;
		}
	}

	.contact-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h3 {
			color: #f5cb5c;
			font-size: 1.3rem;
			margin-bottom: 0.5rem;
			padding-bottom: 0.5rem;
			border-bottom: 2px solid rgba(245, 203, 92, 0.3);
		}
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		color: #cfdbd5;
		text-decoration: none;
		font-size: 1rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		padding: 0.5rem 0.8rem;
		border-radius: 12px;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 12px;
			background: linear-gradient(135deg, rgba(245, 203, 92, 0.1), rgba(245, 203, 92, 0.05));
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		&:hover {
			color: #f5cb5c;
			transform: translateX(5px);

			&::before {
				opacity: 1;
			}
		}

		&.download {
			background: linear-gradient(135deg, rgba(245, 203, 92, 0.2), rgba(230, 171, 10, 0.2));
			border: 1px solid rgba(245, 203, 92, 0.3);
			justify-content: center;
			padding: 1rem;
			margin-top: 0.5rem;

			&:hover {
				background: linear-gradient(135deg, rgba(245, 203, 92, 0.3), rgba(230, 171, 10, 0.3));
				transform: translateY(-2px);
			}
		}

		iconify-icon {
			font-size: 1.2rem;
		}
	}

	.location {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		color: #819595;
		font-size: 1rem;
		padding: 0.5rem;

		iconify-icon {
			font-size: 1.2rem;
			color: #f5cb5c;
		}
	}

	/* Animations */
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slideInLeft {
		from {
			opacity: 0;
			transform: translateX(-50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideInRight {
		from {
			opacity: 0;
			transform: translateX(50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes scaleIn {
		from {
			opacity: 0;
			transform: scale(0.8);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Floating animation for CTAs */
	@keyframes float {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.cta-button.primary {
		animation: float 3s ease-in-out infinite;
		animation-delay: 0.5s;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			inset: -2px;
			background: linear-gradient(45deg, #f5cb5c, #e6ab0a, #f5cb5c);
			border-radius: 50px;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.3s ease;
			filter: blur(10px);
		}

		&:hover::before {
			opacity: 0.7;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero-section {
			min-height: auto;
			padding: 4rem 1rem;
		}

		.technologies {
			font-size: 2rem;
			gap: 1.5rem;
		}

		.about-content,
		.contact-card {
			padding: 2rem 1.5rem;
		}

		.contact-card {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	/* Fade-in Animation */
	.fade-in {
		opacity: 1; /* Start visible as fallback */
		transform: translateY(0);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	/* Only apply animation when JS is working */
	@media (prefers-reduced-motion: no-preference) {
		.fade-in:not(.in-view) {
			opacity: 0;
			transform: translateY(30px);
		}

		.fade-in.in-view {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Scroll to Top Button */
	.scroll-to-top {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: linear-gradient(135deg, #f5cb5c, #e6ab0a);
		color: #242423;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		opacity: 0;
		visibility: hidden;
		transform: translateY(10px);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 999;
		box-shadow: 0 4px 20px rgba(245, 203, 92, 0.3);

		&.visible {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}

		&:hover {
			transform: translateY(-3px);
			box-shadow: 0 6px 30px rgba(245, 203, 92, 0.5);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	/* Theme Toggle */
	.theme-toggle {
		position: fixed;
		top: 1.5rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: rgba(36, 36, 35, 0.8);
		backdrop-filter: blur(10px);
		color: #f5cb5c;
		border: 1px solid rgba(245, 203, 92, 0.3);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.3rem;
		transition: all 0.3s ease;
		z-index: 998;

		&:hover {
			background: rgba(245, 203, 92, 0.2);
			transform: rotate(180deg);
		}

		@media (max-width: 900px) {
			top: 1rem;
		}
	}

	/* Dark Mode Styles */
	:global(html.dark-mode) {
		:global(body) {
			background: linear-gradient(300deg, #0a0a0a, #141414);
			color: #e0e0e0;
		}

		:global(.hero-section) {
			background: radial-gradient(ellipse at center, rgba(245, 203, 92, 0.02) 0%, transparent 50%);
		}

		:global(.about-content),
		:global(.contact-card) {
			background: linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(30, 30, 30, 0.6));
		}

		:global(.card) {
			background: linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(30, 30, 30, 0.6));
		}

		:global(.technologies-container) {
			background: linear-gradient(135deg, rgba(20, 20, 20, 0.4), rgba(30, 30, 30, 0.2));
		}

		:global(header) {
			background: rgba(10, 10, 10, 0.9);

			&.scrolled {
				background: rgba(10, 10, 10, 0.98);
			}
		}

		:global(.contact-link) {
			color: #e0e0e0;

			&:hover {
				color: #f5cb5c;
			}
		}

		:global(p) {
			color: rgba(224, 224, 224, 0.9);
		}
	}
</style>