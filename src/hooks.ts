import { handleSession } from 'svelte-kit-cookie-session';
import type { RequestEvent } from '@sveltejs/kit';

export async function getSession({ locals }: RequestEvent) {
	return locals.session.data;
}

// You can do it like this, without passing a own handle function
export const handle = handleSession({
	secret: '#WaYU-+d6D2F&Xg6~p"G`z#9T-LN#2yn)B~?SQ^nW}/raAU"M(J7qu:r)n@Nyd'
});
