<script>
  import Header from "$lib/components/Header.svelte"
  import Footer from "../lib/components/Footer.svelte";
  import { repositoryName } from "$lib/prismicio"

  export let data
  
  const { config } = data

  const { site_title, config_theme, header_image, menu, favicon = "𓍰" } = config.data
</script>

<svelte:head>
  <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"></script>
  <title>{site_title}</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2284%22>{favicon}</text></svg>"/>
  <link
    rel="preload"
    href="/fonts/americana.ttf"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</svelte:head>

<Header {menu} {config_theme} {header_image} />

<main>
  <slot />
</main>

<Footer {menu} {config_theme} />

<style>
  @font-face {
    font-family: "Americana";
    src: local('Americana'), local('americana'),
        url('/fonts/americana.ttf');
    font-style: regular;
    font-weight: normal;
  }

  @font-face {
    font-family: "Sweet Sans Pro";
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
        url('/fonts/sweet-sans-pro-regular.ttf');
    font-style: regular;
    font-weight: normal;
  }

  @font-face {
    font-family: "Sweet Sans Pro";
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
        url('/fonts/sweet-sans-pro-medium.ttf');
    font-style: regular;
    font-weight: bold;
  }

  @font-face {
    font-family: "Sweet Sans Pro";
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
        url('/fonts/sweet-sans-pro-light.otf');
    font-style: regular;
    font-weight: normal;
  }

  :global(body) {
    margin: 0;
    min-height: 100vh;
    font-weight: normal;
  }

  :global(:root) {
    --gold: #E7A85D;
    --lightblue: #D6EAEA;
    --blue: #52A3A3;
  }

    
  :global(h2) {
    font-family: "Americana";
  }

  :global(h2) {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  :global(h3) {
    text-transform: uppercase;
    font-family: "Sweet Sans Pro";
    font-weight: bold;
    font-size: 1.3rem;
  }

  :global(h2 + h3) {
    font-family: "Americana";
    letter-spacing: 1px;
    color: #666;
    margin-top: -1.3rem;
    line-height: 1.3;
  }

  :global(p, li) {
    font-weight: 500;
    font-family: "Sweet Sans Pro";
    text-align: justify;
    line-height: 1.4rem;
  }

  :global(p + p) {
    margin-top: 0.6rem;
    text-indent: 0;
  }

  :global(.bound) {
    width: 100%;
    max-width: min(calc(100vw - 5rem), 900px);
    margin: auto;
  }
</style>