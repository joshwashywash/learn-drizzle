import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const {
		url,
		locals: { supabase },
	} = event;
	const code = url.searchParams.get('code');
	const next = url.searchParams.get('next') ?? '/';

	if (code !== null) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (error === null) {
			redirect(303, `/${next.slice(1)}`);
		}
	}

	// return the user to an error page with instructions
	redirect(303, '/auth/error');
};
