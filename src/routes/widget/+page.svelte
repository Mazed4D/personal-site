<svelte:head>
	<script type="text/javascript" charset="UTF-8" src=".\conference_widget.bundle.js" defer></script>
</svelte:head>

<script>
	import { onMount } from "svelte";


	onMount(() => {
		let confConfig = {};
			confConfig.CustomHeader = 'Single prop widget';
			// @ts-ignore
			BV.CfWidget({
				...confConfig,
				WidgetContainerId : 'widgetContainer',
				openOption: 'redirect',
				promoCode: true,
				corpCode: false,
				agentCode: false,
				loginLink: false,
				type: "multi_property",
				widgetLayout: 'StandardWide',
				currency: 'SEK',
				channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
			});
			// 			// @ts-ignore
			// 			BV.CfWidget({
			// 	...confConfig,
			// 	WidgetContainerId : 'widgetContainer2',
			// 	openOption: 'redirect',
			// 	promoCode: true,
			// 	corpCode: false,
			// 	agentCode: false,
			// 	loginLink: false,
			// 	type: "single_property",
			// 	widgetLayout: 'StandardWide',
			// 	currency: 'SEK',
			// 	channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
			// });
						// @ts-ignore
						BV.CfWidget({
				...confConfig,
				WidgetContainerId : 'widgetContainer3',
				openOption: 'redirect',
				promoCode: true,
				corpCode: false,
				agentCode: false,
				loginLink: false,
				type: "multi_property",
				widgetLayout: 'Standard1Column',
				currency: 'SEK',
				channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
			});
	})
</script>

<div id="widgetContainer" style="width: 100%;" />
<div id="widgetContainer2" style="width: 100%;" />
<div id="widgetContainer3" style="width: 100%;" />

