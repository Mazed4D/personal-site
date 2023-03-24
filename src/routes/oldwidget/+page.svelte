<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	onMount(() => {
var baseUrl = "https://boka.svenskamoten.se/multipropertywidget/getwidget";
(function($) {
$.ajax({
dataType: 'json',
url: baseUrl + '?multiPropertyId=35bec48d-58a7-490f-a8bc-675201d8e810&newWindow=false&culture=sv-SE&layout=Calendar2Columns&containerId=widgetContainer&currency=SEK&showAccommodationTypes=false',
xhrFields: { withCredentials: true },
success: function(data) {
$('#widgetContainer').html(data.Widget);
}
});
})(bvJQuery);

	});
</script>

<svelte:head>
	<script
		charset="UTF-8"
		type="text/javascript"
		src="//online.bookvisit.com/Content/flexwidget/FlexWidgetScripts.min.js"
	></script>
</svelte:head>

<div>
	<div id="widgetContainer" />
	<div id="widgetContainer3" />
</div>
