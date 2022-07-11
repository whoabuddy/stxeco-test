<script lang="ts">
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderUtilities,
		SkipToContent,
		SideNav,
		SideNavItems,
		SideNavLink,
		Theme
	} from 'carbon-components-svelte';

	// TODO fix the hack: definition added here because
	// I was unable to pull it from the actual location:
	// node_modules/carbon-components-svelte/types/Theme/Theme.svelte.d.ts
	type CarbonTheme = 'white' | 'g10' | 'g80' | 'g90' | 'g100';

	let isSideNavOpen = false;
	let theme: CarbonTheme = 'g90';

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
	<HeaderUtilities>
		<Theme
			bind:theme
			persist
			persistKey="__carbon-theme"
			render="toggle"
			toggle={{
				themes: ['white', 'g90'],
				labelA: '🌞',
				labelB: '🌙',
				hideLabel: true,
				size: 'sm'
			}}
		/>
	</HeaderUtilities>
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
