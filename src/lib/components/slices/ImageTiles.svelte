<script>
  import * as prismicH from "@prismicio/helpers"
  export let slice
</script>

<div class="images">

  {#each slice.items as item}
  {@const srcset = prismicH.asImageWidthSrcSet(item.image)}
  <div class="image"
    srcset={srcset.srcset}
    style:aspect-ratio={item.image.dimensions.width / item.image.dimensions.height}
    style:flex={item.image.dimensions.width / item.image.dimensions.height}
  >
    <img 
      src={srcset.src}
      alt={item.image.alt}
    />
  </div>
    
  {/each}
</div>

<style>
  .images {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: auto;
    width: 100%;
    display: block;
  }
</style>