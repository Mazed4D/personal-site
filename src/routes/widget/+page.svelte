<svelte:head>
	<script type="text/javascript" src="//reservations.bookvisit.com/widget?type=conference&new=1"></script>
</svelte:head>

<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	const widgetLayouts = [
		'Standard1Column',
		'Standard1ColumnCompact',
		'Standard2Columns',
		'Standard2ColumnsCompact',
		'Calendar2Columns',
		'StandardWide',
		'StandardWideCompact',
		'Large2Columns',
		'Large3Columns',
		'Standard1ColumnSimplify',
		'LinkOnly',
		'Standard1ColumnPlate'
	];

	onMount(() => {
		let confConfig = {
			CustomHeader: 'Single prop widget',
			openOption: 'redirect',
			promoCode: 'false',
			corpCode: 'false',
			agentCode: 'false',
			loginLink: 'false',
			currency: 'SEK',
			channelId: 'e833e662-2970-4e6e-943f-6b6088b5e1d2',
			languageCulture: 'sv-SE',
			accommodationTypePicker: 'false',
			type: 'single_property'
		};
		widgetLayouts.forEach((layout, i) => {
			BV.CfWidget({
				...confConfig,
				WidgetContainerId: 'widgetContainer' + i,
				widgetLayout: layout
			});
		});
	});
</script>

<div>
	{#each widgetLayouts as layout, i}
		<div style="background-color: white;">
			<p>{layout}</p>
			<div id="widgetContainer{i}" style="padding-top: 20px;" />
		</div>
	{/each}
</div>
