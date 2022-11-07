<script>
	export let slice;

  const { items } = slice
</script>

{#each items as item}
  <img src={} alt="">
{/each}

<pre>
  {JSON.stringify(slice, null, 2)}
</pre>
