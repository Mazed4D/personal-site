<article>
	<section class="technologies">
		<iconify-icon icon="vscode-icons:file-type-reactjs" />
		<iconify-icon icon="logos:redux" />
		<iconify-icon icon="logos:create-react-app" />
		<iconify-icon icon="logos:nextjs-icon" />
		<iconify-icon icon="logos:gatsby" />
		<iconify-icon icon="logos:svelte-icon" />
		<iconify-icon icon="logos:nodejs-icon" />
		<iconify-icon icon="simple-icons:express" />
		<iconify-icon icon="logos:npm-icon" />
		<iconify-icon icon="logos:javascript" />
		<iconify-icon icon="vscode-icons:file-type-typescript-official" />
		<iconify-icon icon="simple-icons:axios" />
		<iconify-icon icon="bi:git" />
		<iconify-icon icon="akar-icons:github-fill" />
		<iconify-icon icon="vscode-icons:file-type-gitlab" />
		<iconify-icon icon="logos:firebase" />
		<iconify-icon icon="vscode-icons:file-type-mongo" />
		<iconify-icon icon="vscode-icons:file-type-vscode" />
	</section>

	<section class="page-header">
		<h1>Need a <span id="frontend"> frontend developer </span> that gets things done?</h1>
		<div class="subtitle">
			<a href="/contact"
				><h2>
					<iconify-icon icon="bxs:right-arrow" /> Let's get in touch!
					<iconify-icon icon="bxs:left-arrow" />
				</h2></a
			>
		</div>
	</section>

	<section id="my-work">
		<h1>Take a look at some of my work!</h1>
		<div class="hstack">
			<div class="vstack">
				<img src="/images/talentBase.svg" alt="TalentBase" />
				<a href="/projects#talentbase">TalentBase</a>
			</div>
			<div class="vstack">
				<img src="/images/quickdeal.png" alt="QuickDeal" />
				<a href="/projects#quickdeal">QuickDeal</a>
			</div>
		</div>
	</section>
</article>

<style lang="scss">
	.page-header {
		padding: 3rem 2rem;
		border-radius: 50px;
		background: #31393c;
		box-shadow: inset 20px 20px 60px #2a3033, inset -20px -20px 60px #384245;
	}
	#frontend {
		color: #ffbe0b;
	}

	h1 {
		text-align: center;
		font-size: 3rem;
		margin: 0.5rem 0;
	}

	.subtitle {
		display: flex;
		justify-content: center;
	}
	h2 {
		border-radius: 50px;
		margin-top: 2rem;
		transition: transform 250ms ease-in-out;
		transform-origin: center;
		animation: pulse 2s infinite;

		&:hover,
		&:active {
			transform: scale(1.1);
		}

		@keyframes pulse {
			0% {
				transform: scale(0.95);
				box-shadow: 0 0 0 0 #ffbe0b30;
				background-color: #ffbe0b30;
			}

			70% {
				transform: scale(0.99);
				box-shadow: 0 0 0 20px #ffbe0b00;
				background-color: #ffbe0b00;
			}

			100% {
				transform: scale(0.95);
				box-shadow: 0 0 0 0 ffbe0b00;
				background-color: #ffbe0b00;
			}
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
			transition: all 250ms ease-in;
			&:hover {
				transform: scale(1.3);
			}
		}
	}

	#my-work {
		margin: 3rem 0;
		padding: 3rem 2rem;
		border-radius: 50px;
		background: #31393c;
		box-shadow: -31px -31px 62px #2a3033, 31px 31px 62px #384245;

		.vstack {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		img {
			margin-top: 2rem;
			width: 5rem;
			height: 5rem;
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
			font-size: 1.5rem;
		}
	}
</style>
