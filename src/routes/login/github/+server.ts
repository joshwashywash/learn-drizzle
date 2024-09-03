import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { supabase }, url }) => {
	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: url.origin + '/auth/callback',
		},
	});

	redirect(307, data.url ?? '/auth/error');
};
