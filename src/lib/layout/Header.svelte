<header>
	<h1>Milan Paunovic</h1>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: inline-flex;
		padding: 0 1rem;
		color: #ffbe0b;
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
			color: #819595;
			transition: all 250ms ease-in;
			&:active,
			&:hover {
				color: #ffbe0b;
				text-shadow: 0 0 15px #ffbe0b60, 0 0 #ffbe0b60;
				-webkit-transition: all 0.5s;
				-moz-transition: all 0.5s;
				-o-transition: all 0.5s;
				transition: all 0.5s;
			}
		}
	}
</style>
