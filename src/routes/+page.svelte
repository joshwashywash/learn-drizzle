<script lang="ts">
	let { data } = $props();
</script>

{#if data.user === null}
	<a href="/login">sign up / login</a>
{:else}
	<p>you are logged in as {data.user.email}</p>
	<button
		onclick={async () => {
			const { error } = await data.supabase.auth.signOut();
			if (error !== null) {
				console.error(error);
			}
		}}
	>
		sign out
	</button>
{/if}
