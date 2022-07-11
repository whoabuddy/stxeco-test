<script lang="ts">
	import {
		Header,
		Link,
		SkipToContent,
		SideNav,
		SideNavItems,
		SideNavLink
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>

<Header bind:isSideNavOpen>
	<div slot="skip-to-content">
		<SkipToContent />
	</div>
	<div slot="platform"><a href="/">STX Ecosystem DAO</a></div>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink href="/membership" text="Membership" />
		<SideNavLink href="/proposal" text="Proposal" />
		<SideNavLink href="/voting" text="Voting" />
		<SideNavLink href="/delegation" text="Delegation" />
	</SideNavItems>
</SideNav>

<style>
	a {
		color: #fff;
		text-decoration: none;
	}
</style>
