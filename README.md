# Wrong error handling with Multiple Rest Parameters & Param Matchers in SvelteKit

This repository contains a minimal reproduction of a bug in SvelteKit related to error handling when using multiple rest parameters in route definitions.

## Setup
```
Routes
[...prefix]/[event=eventSlug]/[id]/overview/+page.svelte
[...prefix]/[event=eventSlug]/[id]/details/+page.svelte
                                          ...
[...prefix]/[event=eventSlug]/[id]/[...rest]/+page.ts -> throw 404

[...prefix]/[event=eventSlug]/[id]/+error.svelte -> never called
```
## Expected Behavior
When a request is made to a route that does not match any of the defined subpaths of `/event/:id` (e.g., `/some/long/prefix/event|project/:id/invalid-path`), the `/event/:id/+error.svelte` component should be rendered, displaying a 404 error page.

## Actual Behavior
Instead of rendering the nested `+error.svelte` component, SvelteKit renders the top-most `+error.svelte` component, which is not what I would expect.

## To be noted:
- The issue does not occur, when you remove the `[...prefix]` part of the route.
- It also does not occur, when you don't use a parameter in the route (e.g., `event` instead of `[event=eventSlug]`).
