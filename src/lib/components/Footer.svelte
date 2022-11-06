<script>
  import * as prismicH from "@prismicio/helpers"
  export let menu, config_theme

</script>

<footer style:background={config_theme.data.color}>
    <menu>
      {#each menu as item}
        <a href={prismicH.asLink(item.link)}>{item.label}</a>
      {/each}
    </menu>
    <span class="copyright">
      © Claire Littlefair Jewellery {new Date().getFullYear()}
    </span>
</footer>

<style>
  footer {
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Sweet Sans Pro";
    padding: 2.5rem 15vw 5rem;
  }

  menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    padding: 0 0 3rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>