<script>
    import welcome from "$lib/images/svelte-welcome.webp";
    import welcomeFallback from "$lib/images/svelte-welcome.png";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<h3>Without random prefixes</h3>
<a href="event/1">Go to job</a>
<a href="event/1/overview">Go to job overview</a>
<a href="event/1/invalid">Go to job invalid</a>
<a href="event/1/other-invalid">Go to job other-invalid</a>

<h3>With random prefixes</h3>
<a href="calendar/2026/event/1">Go to job</a>
<a href="calendar/2026/event/1/overview">Go to job overview</a>
<a href="calendar/2026/event/1/invalid">Go to job invalid</a>
<a href="calendar/2026/event/1/other-invalid">Go to job other-invalid</a>
