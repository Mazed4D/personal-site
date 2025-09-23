<script lang="ts">
	export let id: string;
	export let name: string;
	export let image: string;
	export let description: string;
	export let link: string;
</script>

<a
	href={link}
	target="_blank"
	rel="noreferrer"
>
	<section
		{id}
		class="card"
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
    color: #cfdbd5;
    text-decoration: none;
    display: block;
    width: 100%;

    &:hover {
      color: #cfdbd5;
    }
  }

  h1 {
    font-size: 1.6rem;
    margin: 0 0 0.8rem 0;
    color: #f5cb5c;
    font-weight: 600;
  }

  .card {
    margin: 0 auto;
    max-width: 900px;
    position: relative;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(36, 36, 35, 0.6), rgba(36, 36, 35, 0.4));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(245, 203, 92, 0.1);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(245, 203, 92, 0.3), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                  0 0 60px rgba(245, 203, 92, 0.05);
      border-color: rgba(245, 203, 92, 0.2);

      &::before {
        opacity: 1;
      }

      img {
        transform: scale(1.05);
        filter: brightness(1.1);
      }

      h1 {
        color: #f5cb5c;
        text-shadow: 0 0 20px rgba(245, 203, 92, 0.3);
      }
    }
  }

  .card-content {
    display: flex;
    gap: 2rem;
    padding: 2.5rem;
    position: relative;
    z-index: 1;

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 2rem;
    }
  }

  img {
    width: 5rem;
    height: 5rem;
    align-self: center;
    border-radius: 15px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .vstack {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: rgba(207, 219, 213, 0.9);
    font-size: 1rem;
  }
</style>