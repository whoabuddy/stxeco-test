<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	import { getAccount, getAuth } from '@micro-stacks/svelte';
	const auth = getAuth();
	let response: any;
	$: label = $auth.isRequestPending
		? 'Loading...'
		: $auth.isSignedIn
		? 'Sign Out'
		: 'Connect Stacks Wallet';
	function onClick() {
		if ($auth.isSignedIn) {
			$auth.signOut();
		} else {
			$auth.openAuthRequest();
		}
	}
	const account = getAccount();
	$: sessionStatus = !$account.stxAddress ? 'No active session' : $account.stxAddress;
</script>

<main>
	<h2>{sessionStatus}</h2>

	<Button size="small" on:click={onClick}>
		{label}
	</Button>

	{#if response}
		<pre>
      <code>{JSON.stringify(response, null, 2)}</code>
    </pre>
	{/if}
</main>
