<script>
  import * as prismicH from "@prismicio/helpers"
  import {beforeNavigate} from "$app/navigation"

  export let menu, header_image

  const srcset = prismicH.asImageWidthSrcSet(header_image)

  let hamburger = true
</script>

<header>
  <div class="image">
    <a class="home" href="/">
      <img 
        src={srcset.src} 
        srcset={srcset.srcset} 
        alt={header_image.alt}
        width={header_image.dimensions.width}
        height={header_image.dimensions.height}
      />
    </a>
  </div>
  <input bind:checked={hamburger} type="checkbox" id="menu">
  <menu>
    {#each menu as item}
      <li>
        <a on:click={() => hamburger = !hamburger} 
          href={prismicH.asLink(item.link)}
        >
            {item.label}
          </a>
      </li>
    {/each}
  </menu>
  <label class="hamburger" tabindex=0 for="menu" />
</header>

<style>
header {
  --speed: 0.4s;
  --speed-half: calc(var(--speed) / 2);
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
  min-height: 17rem;
  display: flex;
  background: var(--lightblue);
  box-sizing: border-box;
}

.image a {
  z-index: 1;
  width: 30%;
  margin: auto;
  padding: 5%;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

menu {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-around;
  height: 100%;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
}

li {
  z-index: 2;
  list-style: none;
  flex-grow: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightblue);
  transition: all var(--speed);
}

input {
  display: none;
}

label.hamburger {
  z-index: 3;
  position: absolute;
  user-select: none;
  top: 2px;
  right: 22px;
}

label.hamburger:after {
  content: "×";
  display: block;
  font-size: 3rem;
  width: 1em;
  height: 1em;
  text-align: center;
}

menu a {
  line-height: 100%;
  flex-grow: 1;
  text-align: center;
  transition: all var(--speed-half);
  color: unset;
  text-decoration: none;
  overflow: hidden;
  text-transform: uppercase;
}

:checked ~ menu a {
  transition-delay: var(--speed-half);
  line-height: 0rem;
}

:checked ~ menu li {
  flex-grow: 0;
}

:checked ~ label.hamburger:after {
  content: "☰";
}
</style>