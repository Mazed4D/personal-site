<article>
	<section class="about-header">
		<!-- <img src="/images/pfp.jpg" alt="Milan Paunovic" /> -->
		<h1>Milan Paunovic - Frontend Developer</h1>
	</section>
	<section class="about-desc">
		As a highly independent and ambitious Frontend developer, I am dedicated to delivering
		responsive, modern, and user-friendly applications using React and React-Native. With a focus on
		providing the best possible user experience, I am constantly seeking to improve my skills and
		stay current with new technologies. I am open to learning new technologies and approaches to
		software development in order to further enhance my skills and deliver exceptional results for
		my clients. My passion for creating special user-oriented software is evident in my successful
		track record of delivering high-quality projects, including the development of a
		React-Native-based android application for hyper-local shopping and the creation of a platform
		connecting businesses with remote workers using React (TypeScript) and Redux. I am eager to
		bring my expertise and drive to a dynamic and forward-thinking team.
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
		@media only screen and (max-width: 900px) {
			margin-top: 2rem;
		}
	}

	img {
		max-height: 8rem;
		max-width: 8rem;
		border-radius: 50px;
	}

	.about-header {
		display: flex;
		justify-content: center;
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
