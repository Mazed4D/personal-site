<article>
	<section class="about-header">
		<img src="/images/pfp.jpg" alt="Milan Paunovic" />
		<h1>Milan Paunovic - Frontend Developer</h1>
	</section>
	<section class="about-desc">
		An independent, motivated and ambitious Frontend developer specializing in delivering
		responsive, modern, and quick React/React-native-based applications with the best UX possible. I
		always strive to improve my skills and embrace new technologies to create special user-oriented
		software.
	</section>
</article>

<style lang="scss">
	article {
		max-width: 900px;
		margin: auto;
		justify-content: center;
		border-radius: 50px;
		background: #242423;
		box-shadow: -20px -20px 60px #1e1e1d, 20px 20px 60px #2a2a29;
	}

	img {
		max-height: 8rem;
		max-width: 8rem;
		border-radius: 50px;
	}

	.about-header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		padding-right: 3rem;
		gap: 1rem;
		align-items: center;
		font-size: 2rem;
		color: #f5cb5c;

		@media (max-width: 700px) {
			padding: 1rem;

			flex-direction: column;
			h1 {
				text-align: center;
			}
		}
	}

	.about-desc {
		padding: 2rem;
		font-size: 1.2rem;
	}
</style>
