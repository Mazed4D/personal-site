<article>
	<section class="about-header">
		<!-- <img src="/images/pfp.jpg" alt="Milan Paunovic" /> -->
		<h1>Milan Paunovic - Frontend Developer</h1>
	</section>
	<section class="about-desc">
		<header>
			<h1>Passionate Frontend Developer | React & React Native Specialist</h1>
		</header>
		<p>
			As a results-driven and highly independent Frontend Developer, I specialize in crafting responsive, modern, and
			user-friendly applications using React and React Native. My dedication to delivering exceptional user experiences
			is evident in my successful track record, which includes developing a React-Native-based Android application for
			hyper-local shopping and creating a platform connecting businesses with remote workers using React (TypeScript)
			and Redux.
		</p>
		<p>
			I thrive in dynamic and forward-thinking environments, constantly seeking to enhance my skills and stay abreast of
			the latest technologies. Open to embracing new technologies and innovative approaches, I am committed to
			delivering high-quality projects. My passion for creating user-oriented software extends beyond individual
			projects, as I actively contribute to the success of teams through collaboration and a drive for excellence.
		</p>
		<footer>
			<p>
				<strong>Let’s connect</strong> and explore how my expertise and enthusiasm can contribute to your team’s
				success!
			</p>
		</footer>
	</section>
</article>

<style lang="scss">
  article {
    max-width: 900px;
    margin: auto;
    justify-content: center;
    border-radius: 50px;
    background: #242423;
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
