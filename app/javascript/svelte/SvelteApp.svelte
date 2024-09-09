<script> 
  import { onMount } from "svelte";
  export let target;
  let count = 0;

  function increment() {
    count++;
  }

  onMount(() => {
    target = "World";
  })
</script>

<h1 class="text-center text-">Hello {target}</h1>
<button on:click={increment} class="btn btn-outline">Count</button>
<p>You clicked {count} times.</p>