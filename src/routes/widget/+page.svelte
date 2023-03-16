<svelte:head>
	<script type="text/javascript" charset="UTF-8" src=".\conference_widget.bundle.js" defer></script>
	<script type="text/javascript">
		setTimeout(() => {
			let confConfig = {};
			confConfig.WidgetContainerId = 'widgetContainer';
			confConfig.CustomHeader = 'Single prop widget';
			BV.CfWidget({
				...confConfig,
				openOption: 'redirect',
				promoCode: true,
				corpCode: false,
				agentCode: false,
				loginLink: false,
				widgetLayout: 'StandardWide',
				currency: 'SEK',
				channelId: '35BEC48D-58A7-490F-A8BC-675201D8E810'
			});
		}, 1000);
	</script>
</svelte:head>

<div id="widgetContainer" style="width: 100%;" />
