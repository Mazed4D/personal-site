<script>
	import { browser } from '$app/environment';
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

	let confConfig = {
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

	function loadScript() {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = "/script/main.js";
			script.onload = resolve;
			script.onerror = reject;
			document.head.appendChild(script);
		});
	}

	onMount(async () => {
		try {
			await loadScript();
			console.log('Creating widges');

			// Wait a bit to ensure BV is defined
			setTimeout(() => {
				if (typeof BV !== 'undefined') {
					widgetLayouts.forEach((layout, i) => {
						console.log('Creating widget:', layout);
						BV.CfWidget({
							...confConfig,
							WidgetContainerId: `widgetContainer${i}`,
							widgetLayout: layout
						});
					});
				} else {
					console.error('BV is not defined');
				}
			}, 1000);
		} catch (error) {
			console.error('Failed to load widget script:', error);
		}
	});
</script>

<div>
	{#if browser}
		{#each widgetLayouts as layout, i}
			<div style="background-color: white;">
				<p>{layout}</p>
				<div id="widgetContainer{i}" style="padding-top: 20px;"></div>
			</div>
		{/each}
	{/if}
</div>