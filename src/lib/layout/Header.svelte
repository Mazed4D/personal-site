<header>
	<h1>Milan Paunovic</h1>
	<nav>
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
</header>

<style lang="scss">
	header {
		display: inline-flex;
		padding: 0 2rem;
		color: #f5cb5c;
	}

	h1 {
		transition: all 250ms ease-in;
		&:hover {
			transform: scale(1.025);
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
		align-items: stretch;
		display: inline-flex;
		align-items: center;
		justify-content: flex-end;
		gap: 2rem;
		padding-right: 1rem;
		a {
			font-size: 1.2rem;
			text-decoration: none;
			color: #cfdbd5;
			&:active,
			&:hover {
				color: #f5cb5c;
			}
		}
	}
</style>
