import type { ParamMatcher } from '@sveltejs/kit';

const EVENT_SLUGS = ['job', 'project', 'event'] as const;

type EventSlug = (typeof EVENT_SLUGS)[number];

export const match = ((param: string): param is EventSlug => {
  return EVENT_SLUGS.includes(param as EventSlug);
}) satisfies ParamMatcher;
