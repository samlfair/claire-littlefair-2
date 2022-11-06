<script>
  import * as prismicH from "@prismicio/helpers"
  export let slice
</script>

<section style="background: {slice.primary.slice_theme?.data?.color}">
  <div class="grid bound">
    {#each slice.items as item}
    {@const imageSrc = prismicH.asImageWidthSrcSet(item.image)}
      <a href={prismicH.asLink(item.link)} class="square">
        <img
          src={imageSrc.src}
          srcset={imageSrc.srcset}
          alt={item.image.alt}
        />
      </a>
    {/each}
  </div>
</section>

<style> 
  section {
    margin: 3rem 0;
  }

  .grid {
    padding: 2rem 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .square {
    /* flex: 33.3%; */
    width: calc(33.3% - 0.66rem);
    background: grey;
  }

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
  }
</style>