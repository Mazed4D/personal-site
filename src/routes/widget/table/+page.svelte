<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('table-reservation').addEventListener('click', () => {
			const config = {};
			config.widgetContainerId = 'widgetContainer';
			config.open = true;
			config.channelId = '57e4223d-8b29-4a40-ac87-257922f01573';
			config.languageCulture = 'en-GB';
			BV.TableReservationWidget({ ...config });
		});
	});
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="//online.bookvisit.com/Content/widget/table_reservation_widget.bundle.js"
	></script>
	<title>Table Reservation Script Test</title>
</svelte:head>

<div>
	<div style="background-color: white;">
		<div id="widgetContainer" />
		<button id="table-reservation">Replace me!</button>
	</div>
</div>
