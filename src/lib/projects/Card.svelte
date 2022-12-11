<script lang="ts">
	export let id: string;
	export let name: string;
	export let image: string;
	export let description: string;
	export let link: string;
</script>

<a href={link} target="_blank" rel="noreferrer">
	<section {id} class="card">
		<img src={image} alt={name} />
		<div class="vstack">
			<h1>{name}</h1>
			<p>{description}</p>
		</div>
	</section>
</a>

<style lang="scss">
	a {
		color: #819595;
		transition: none;
		align-self: center;
		&:hover,
		&:active {
			color: #819595;
			text-shadow: none;
		}
	}

	h1 {
		font-size: 1.5rem;
		margin: 0.5rem 0;
	}

	.card {
		margin: 0 auto;
		max-width: 900px;
		position: relative;
		display: flex;
		gap: 1rem;
		margin-top: 3rem;
		padding: 2rem;
		border-radius: 50px;
		background: #242423;
		box-shadow: -20px -20px 60px #1e1e1d, 20px 20px 60px #2a2a29;
		z-index: 1;

		&:hover {
			color: #242423;
		}

		@media (max-width: 600px) {
			flex-direction: column;
		}
	}

	.card::before {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 50px;
		background: linear-gradient(145deg, #f5cb5c, #e6ab0a);
		z-index: -1;
		transition: opacity 250ms ease-in;
		opacity: 0;
	}

	.card:hover::before {
		opacity: 1;
	}

	img {
		width: 5rem;
		height: 5rem;
		align-self: center;
	}

	.vstack {
		display: flex;
		flex-direction: column;
	}
</style>
