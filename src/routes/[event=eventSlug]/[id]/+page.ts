import { goto } from '$app/navigation';
import type { PageLoad } from './$types';

// Redirect from /event/:id to /event/:id/overview
export const load: PageLoad = (data) => {
  goto(data.url.pathname + '/overview');
};
