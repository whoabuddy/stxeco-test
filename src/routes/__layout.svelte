<script context="module">
	export async function load({ session }) {
		const dehydratedState = session.dehydratedState;
		return {
			props: { dehydratedState }
		};
	}
</script>

<script lang="ts">
	import { mountClient } from '@micro-stacks/svelte';
	import { onPersistState, onSignOut } from '../common/fetchers';
	export let dehydratedState: string | undefined;
	// TODO: update appIconUrl once identified
	mountClient({
		appName: 'STX-ECO-DAO',
		appIconUrl: '/',
		onPersistState,
		onSignOut,
		dehydratedState
	});
</script>

<slot />
