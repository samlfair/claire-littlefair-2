<script>
  import * as prismicH from "@prismicio/helpers"

  export let slice
</script>

{#each slice.items as item}
  {@const reverse = item.reverse}
  {@const imageSrc = prismicH.asImageWidthSrcSet(item.image)}
  <section class="bound">
    <article>
      <a class="padding" href={prismicH.asLink(item.link)} class:reverse>
        <div class="image">
          <img 
            src={imageSrc.src}
            srcset={imageSrc.srcset}
            alt={item.image.alt}
          />
        </div>
        <div class="text">
          <h2>{prismicH.asText(item.heading)}</h2>
          {@html prismicH.asHTML(item.description)}
        </div>
      </a>
    </article>
  </section>
{/each}

<style>
  article {
    margin: min(10vw, 4rem) 0;
    perspective: 300px;
  }

  .padding {
    align-items: center;
    gap: 4vw;
    margin: -1rem;
    padding: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    transition: box-shadow 0.4s, transform 0.4s;
    border-radius: 6px;
    box-shadow: 
      0px 2px 15px 4px rgba(0,0,0,0.08), 
      0px 1px 2px 1px rgba(0,0,0,0.1);
    
  }
  
  .padding.reverse {
    flex-direction: row-reverse;
  }

  .padding:hover {
    box-shadow: 
      0px 4px 15px 6px rgba(0,0,0,0.08), 
      0px 2px 5px 1px rgba(0,0,0,0.1);
    transform: translateY(-1px) translateZ(1px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .text {
    flex: 2;
    min-width: 350px;
  }
  
  .image {
    border-radius: 2px;
    overflow: hidden;
    background: grey;
    flex: 1.2vw;
    align-self: stretch;
    min-width: 180px;
    max-height: 280px;
  }

  img {
    width: 100%;
    /* aspect-ratio: 1.2; */
    height: 100%;
    object-fit: cover;
    display: block;
  }

  h2 {
    margin-bottom:  0.5rem;
    font-size: 1.4rem;
  }
</style>