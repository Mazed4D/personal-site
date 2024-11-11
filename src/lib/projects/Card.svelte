<script lang="ts">
	export let id: string;
	export let name: string;
	export let image: string;
	export let description: string;
	export let link: string;

	let rotateX = 0;
	let rotateY = 0;
	let scale =1;

	function handleMouseMove(event: MouseEvent, element: HTMLElement) {
		const rect = element.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		rotateY = ((x / rect.width) - 0.5) * 20;
		rotateX = ((y / rect.height) - 0.5) * -30;
		scale = 1.05;
	}

	function handleMouseLeave() {
		rotateX = 0;
		rotateY = 0;
		scale = 1;
	}
</script>

<a
	href={link}
	target="_blank"
	rel="noreferrer"
	on:mousemove={(e) => handleMouseMove(e, e.currentTarget)}
	on:mouseleave={handleMouseLeave}
>
	<section
		{id}
		class="card"
		style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg) scale({scale})"
	>
		<div class="card-content">
			<img src={image} alt={name} />
			<div class="vstack">
				<h1>{name}</h1>
				<p>{description}</p>
			</div>
		</div>
	</section>
</a>

<style lang="scss">
  a {
    color: #819595;
    transition: none;
    align-self: center;
    perspective: 1000px;
    display: block;

    &:hover,
    &:active {
      color: #819595;
      text-shadow: none;
    }
  }

  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    transition: transform 0.3s ease-out;
  }

  .card {
    margin: 0 auto;
    max-width: 900px;
    position: relative;
    margin-top: 3rem;
    border-radius: 50px;
    background: #242423;
    z-index: 1;
    transition: all 0.3s ease-out;
    transform-style: preserve-3d;

    &:hover {
      color: #242423;

      .card-content {
        transform: translateZ(1px) scale(1.05);
      }

      img {
        transform: translateZ(1px) scale(1.1);
      }

      h1 {
        transform: translateZ(1px);
      }

      p {
        transform: translateZ(1px);
      }
    }
  }

  .card-content {
    display: flex;
    gap: 1rem;
    padding: 2rem;
    transition: transform 0.3s ease-out;
    transform-style: preserve-3d;

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
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  }

  img {
    width: 5rem;
    height: 5rem;
    align-self: center;
    transition: transform 0.3s ease-out;
  }

  .vstack {
    display: flex;
    flex-direction: column;
    transform-style: preserve-3d;
  }

  p {
    transition: transform 0.3s ease-out;
    margin: 0;
  }
</style>