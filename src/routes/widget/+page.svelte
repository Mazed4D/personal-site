<svelte:head>
	<script type="text/javascript" charset="UTF-8" src=".\conference_widget.bundle.js" defer></script>
</svelte:head>

<script>
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

	let selectedWidgetId = 0;

	const handleCycleWidgetLayout = () => {
		selectedWidgetId = selectedWidgetId + 1 > widgetLayouts.length ? 0 : selectedWidgetId + 1;
	};

	onMount(() => {
		let confConfig = {};
		confConfig.CustomHeader = 'Single prop widget';
		// @ts-ignore
		BV.CfWidget({
			...confConfig,
			WidgetContainerId: 'widgetContainer',
			openOption: 'redirect',
			promoCode: true,
			corpCode: false,
			agentCode: false,
			loginLink: false,
			type: 'multi_property',
			widgetLayout: widgetLayouts[5],
			currency: 'SEK',
			channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
		});
		// @ts-ignore
		BV.CfWidget({
			...confConfig,
			WidgetContainerId: 'widgetContainer3',
			openOption: 'redirect',
			promoCode: true,
			corpCode: false,
			agentCode: false,
			loginLink: false,
			type: 'multi_property',
			widgetLayout: widgetLayouts[selectedWidgetId],
			currency: 'SEK',
			channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
		});
	});
</script>

<div>
	<div id="widgetContainer"/>
	<div id="widgetContainer3"/>
</div>