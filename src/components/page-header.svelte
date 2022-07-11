<script lang="ts">
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SkipToContent,
		SideNav,
		SideNavItems,
		SideNavLink
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;

	const navOptions = [
		{
			href: '/membership',
			text: 'Membership'
		},
		{
			href: '/proposal',
			text: 'Proposal'
		},
		{
			href: '/voting',
			text: 'Voting'
		},
		{
			href: '/delegation',
			text: 'Delegation'
		}
	];
</script>

<Header persistentHamburgerMenu={true} bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<div slot="platform"><a href="/">STX Ecosystem DAO</a></div>
	<HeaderNav>
		{#each navOptions as { href, text }}
			<HeaderNavItem {href} {text} />
		{/each}
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		{#each navOptions as { href, text }}
			<SideNavLink {href}>{text}</SideNavLink>
		{/each}
	</SideNavItems>
</SideNav>

<style>
	a {
		color: #fff;
		text-decoration: none;
	}
</style>
