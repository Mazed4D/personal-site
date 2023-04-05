<svelte:head>
	<script type="text/javascript" charset="UTF-8" src="/conference_widget.bundle.js" defer></script>
	<title>SP Conference Widget</title>
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
		let confConfig = {};
		confConfig.CustomHeader = 'Single prop widget';
		widgetLayouts.forEach((layout,i)=>{
			BV.CfWidget({
			...confConfig,
			WidgetContainerId: 'widgetContainer'+i,
			openOption: 'redirect',
			promoCode: "true",
			corpCode: false,
			agentCode: false,
			loginLink: false,
			type: 'single_property',
			widgetLayout: layout,
			currency: 'SEK',
			channelId: 'b7806ce7-aaa6-425b-8a7b-bd4230d79ef0'
		});
		})
	});
</script>

<div>
	{#each widgetLayouts as layout, i}
	<div style="background-color: white;">
		<p>{layout}</p>
		<div id="widgetContainer{i}" style="padding-top: 20px;"/>
	</div>
		{/each}
</div>
