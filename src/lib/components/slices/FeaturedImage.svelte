<script>
  import * as prismicH from "@prismicio/helpers"

  export let slice

  const background = slice.primary.theme?.data?.color
  const { src, srcset } = prismicH.asImageWidthSrcSet(slice.primary.image)
  const { alt } = slice.primary.image
</script>

<section style:background>
  <img class="bound" { src } { srcset } { alt } >
</section>

<style>
  section {
    padding: 2rem 0;
  }

  img {
    display: block;
  }
</style>