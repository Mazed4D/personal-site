<article>
	<section class="technologies" aria-label="Technologies I use">
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
	</section>

	<section class="page-header">
		<h1>
			Need a <span id="frontend">frontend developer</span> that gets things done?
		</h1>
		<div class="subtitle">
			<a href="/contact" class="cta-button">
				<iconify-icon icon="bxs:right-arrow" />
				Let's get in touch!
				<iconify-icon icon="bxs:left-arrow" />
			</a>
		</div>
	</section>

	<section id="my-work">
		<h1>Take a look at some of my work!</h1>
		<div class="hstack">
			<a href="/projects#bookvisit" class="vstack gap-1 project-card">
				<img src="/images/bookvisit.jpeg" alt="BookVisit project logo" />
				<div>BookVisit</div>
			</a>
			<a href="/projects#talentbase" class="vstack gap-1 project-card">
				<img src="/images/talentBase.svg" alt="TalentBase project logo" />
				<div>TalentBase</div>
			</a>
			<a href="/projects#quickdeal" class="vstack gap-1 project-card">
				<img src="/images/quickdeal.png" alt="QuickDeal project logo" />
				<div>QuickDeal</div>
			</a>
		</div>
	</section>
</article>

<style lang="scss">
  .page-header {
    padding: 3rem 2rem;
    border-radius: 50px;
    background: linear-gradient(145deg, #2b2b2a, #242423);
  }

  #frontend {
    color: #f5cb5c;
    font-weight: bold;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }

  .subtitle {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .cta-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 1.2rem;
    color: #f5cb5c;
    background-color: transparent;
    border: 2px solid #f5cb5c;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    transition: all 250ms ease-in-out;
    animation: pulse 2s infinite;

    &:hover {
      background-color: #f5cb5c;
      color: #242423;
      transform: scale(1.1);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(245, 203, 92, 0.4);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 20px rgba(245, 203, 92, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(245, 203, 92, 0);
    }
  }

  .technologies {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding: 3rem 0;
    max-width: 100%;
    font-size: 2rem;

    iconify-icon {
      transition: transform 200ms ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  #my-work {
    margin: 3rem 0;
    padding: 3rem 2rem;
    border-radius: 50px;
    background: linear-gradient(145deg, #2b2b2a, #242423);

    .project-card {
      text-decoration: none;
      text-align: center;
      transition: transform 200ms ease-in-out;

      &:hover {
        transform: translateY(-10px);
      }
    }

    img {
      margin: 1rem 0;
      width: 5rem;
      height: 5rem;
      transition: transform 200ms ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .hstack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: #f5cb5c;
    }
  }

  .gap-1 {
    gap: 1rem;
  }
</style>