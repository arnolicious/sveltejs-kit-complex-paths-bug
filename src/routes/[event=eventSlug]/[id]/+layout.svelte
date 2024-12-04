<script>
  let { children } = $props()
</script>

<div class="layout">
  {@render children()}
</div>

<style>
  .layout {
    outline: red solid 4px;
  }
</style>