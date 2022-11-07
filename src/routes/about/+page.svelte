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
		background: linear-gradient(225deg, #2c3336, #343d40);
		box-shadow: -31px 31px 62px #2a3033, 31px -31px 62px #384245;
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
		color: #ffbe0b;

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
