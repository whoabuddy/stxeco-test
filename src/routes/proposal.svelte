<script lang="ts">
	import { Content, Grid, Row, Column } from 'carbon-components-svelte';
	import PageHeader from '../components/page-header.svelte';
	import WalletConnectButton from '../components/wallet-connect-button.svelte';
</script>

<PageHeader />

<Content>
	<Grid>
		<Row>
			<Column>
				<h1>Proposals</h1>
				<hr />
				<WalletConnectButton />
			</Column>
		</Row>
	</Grid>
</Content>
