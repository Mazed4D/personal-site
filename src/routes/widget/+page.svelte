<svelte:head>
	<script type="text/javascript" charset="UTF-8" src=".\conference_widget.bundle.js" defer></script>
</svelte:head>

<script>
	import { onMount } from "svelte";


	onMount(() => {
		let confConfig = {};
			confConfig.WidgetContainerId = 'widgetContainer';
			confConfig.CustomHeader = 'Single prop widget';
			// @ts-ignore
			BV.CfWidget({
				...confConfig,
				openOption: 'redirect',
				promoCode: true,
				corpCode: false,
				agentCode: false,
				loginLink: false,
				type: "single_property",
				widgetLayout: 'StandardWide',
				currency: 'SEK',
				channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
			});
	})
</script>

<div id="widgetContainer" style="width: 100%;" />
