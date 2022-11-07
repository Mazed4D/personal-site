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

<style lang="scss">
	nav {
		z-index: 4;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #31393c;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 5rem;
		padding-left: 20px;
		list-style: none;
		flex-grow: 1;
		justify-content: flex-end;
		gap: 1rem;
		padding-right: 1rem;

		li {
			width: 100%;
		}
		a {
			font-size: 1.2rem;
			text-decoration: none;
			color: #819595;
			background-color: #ffbe0b10;
			display: flex;
			text-align: center;
			justify-content: center;
			border-radius: 10px;
			padding: 1rem;
			&:active,
			&:hover {
				color: #ffbe0b;
				background-color: #ffbe0b30;
			}
		}
	}
</style>
