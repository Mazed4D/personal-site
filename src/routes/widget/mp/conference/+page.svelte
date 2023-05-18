<svelte:head>
	<script type="text/javascript" charset="UTF-8" src="/conference_widget.bundle.js" defer></script>
	<title>MP Conference Widget</title>
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
		const config = {};
   config.channelId = "35bec48d-58a7-490f-a8bc-675201d8e810";
   config.widgetLayout = "Standard2Columns";
   config.WidgetContainerId = "widgetContainer";
   config.openOption = "newwindow";
   config.currency = "SEK";
   config.languageCulture = "sv-SE";
   config.type = "multi_property";
   BV.CfWidget({...config})

		widgetLayouts.forEach((layout,i)=>{
			BV.CfWidget({
			...config,
			WidgetContainerId: 'widgetContainer'+i,
			promoCode: "true",
			corpCode: false,
			agentCode: false,
			loginLink: false,
			type: 'multi_property',
			widgetLayout: layout,
			currency: 'SEK',
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
