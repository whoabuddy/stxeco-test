<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import {
		Header,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column,
		SideNav,
		SideNavItems,
		SideNavLink
	} from 'carbon-components-svelte';
	import WalletConnectButton from '../components/wallet-connect-button.svelte';

	let isSideNavOpen = false;
</script>

<h1>STX Ecosystem DAO</h1>

<Header bind:isSideNavOpen>
	<div slot="skip-to-content">
		<SkipToContent />
	</div>
	<div slot="platform">STX Ecosystem DAO</div>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink href="#" text="Membership" />
		<SideNavLink href="#" text="Proposal" />
		<SideNavLink href="#" text="Voting" />
		<SideNavLink href="#" text="Delegation" />
	</SideNavItems>
</SideNav>

<Content>
	<Grid>
		<Row>
			<Column>
				<WalletConnectButton />
			</Column>
		</Row>
	</Grid>
</Content>

<style>
	:global(#main-content.bx--content) {
		background: none;
		margin-top: 0;
		padding-top: 1rem;
	}
</style>
