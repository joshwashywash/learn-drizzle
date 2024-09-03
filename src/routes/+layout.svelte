<script>
	import { invalidate } from '$app/navigation';

	let { children, data } = $props();

	let supabase = $derived(data.supabase);
	let session = $derived(data.session);

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return data.subscription.unsubscribe;
	});
</script>

{@render children()}
