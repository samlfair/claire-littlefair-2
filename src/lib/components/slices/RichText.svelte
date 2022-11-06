<script>
  import * as prismicH from "@prismicio/helpers"
  export let slice
</script>

<section class="bound richtext">
  {@html prismicH.asHTML(slice.primary.text)}
</section>

<style>
  .richtext :global(a) {
    color: unset;
  }
</style>