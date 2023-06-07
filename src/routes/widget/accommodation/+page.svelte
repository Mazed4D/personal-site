<svelte:head>
	<script type="text/javascript" charset="UTF-8" src="/accommodation_widget.bundle.js" defer></script>
	<title>SP Accommodation Widget</title>
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
		widgetLayouts.forEach((layout, i) => {
			BV.SPWidget({
				...confConfig,
				WidgetContainerId: 'widgetContainer' + i,
				openOption: 'redirect',
				promoCode: 'true',
				corpCode: false,
				agentCode: false,
				loginLink: false,
				type: 'single_property',
				widgetLayout: layout,
				currency: 'SEK',
				// channelId: '7e81c8a9-ac42-4b6a-abd6-da4bb246afca'
				// JESPER TEST ID
				channelId: 'e4586ac0-0604-48b7-b7f4-df22593d0231',
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