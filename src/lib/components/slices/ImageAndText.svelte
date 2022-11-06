<script>
  import * as prismicH from "@prismicio/helpers"
  import { htmlSerializer } from "$lib/prismicio"

  export let slice

  const reverse = slice.primary.reverse
  const imageSrc = prismicH.asImageWidthSrcSet(slice.primary.image)  
</script>

<section class="bound">
  <article>
    <div class="padding" class:reverse>
      <div class="image">
        <img 
        src={imageSrc?.src}
        srcset={imageSrc?.srcset}
        alt={slice.primary?.image?.alt}
        height={slice.primary.image.dimensions.height}
        width={slice.primary.image.dimensions.width}
        />
      </div>
      <div class="text">
        {@html prismicH.asHTML(slice.primary.description, null, htmlSerializer)}
      </div>
    </div>
  </article>
</section>


<style>
  article {
    margin: min(10vw, 4rem) 0;
  }

  .padding {
    align-items: flex-start;
    gap: 4vw;
    margin: -1rem;
    padding: 1rem;
    display: flex;
    transition: box-shadow 0.6s, transform 0.6s;
  }
  
  .padding.reverse {
    flex-direction: row-reverse;
  }

  .text {
    flex: 2;
  }

  .text :global(img) {
    width: 100%;
    height: auto;
    display: block;
    margin: 2rem 0 3rem;
  }
  
  .image {
    /* aspect-ratio: 1.8; */
    flex: 1.2vw;
    align-self: stretch;
  }

  img {
    width: 100%;
    display: block;
    position: sticky;
    top: 15vh;
    height: auto;
  }

  h2 {
    margin-bottom:  0.5rem;
    font-size: 1.4rem;
  }
</style>