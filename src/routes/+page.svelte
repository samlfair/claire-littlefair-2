<script>
  import {SliceZone} from "@prismicio/svelte"
  import { dev } from "$app/environment"
  import components from "$lib/components/slices"

  export let data
  const { document } = data
</script>

<SliceZone slices={document?.data?.body} {components} {dev} />
