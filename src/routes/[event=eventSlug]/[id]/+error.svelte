<script lang="ts">
	import { page } from '$app/stores';

	$effect(() => {
		console.error('+error - /event/:id :', $page.error);
	});
</script>

<h1 style="color: #f05b6e;">We have encountered an error :c</h1>
