<svelte:head>
    <script charset="UTF-8" type="text/javascript" src="/customer_enquiry_widget.bundle.js"></script>
    	<title>SP Conference Widget</title>
</svelte:head>

<div>
    <div id="widgetContainer"></div>

    <button id="customer-enquiry">Open customer enquiry widget</button>
</div>

<script>
	import { onMount } from "svelte";
	onMount(() => {
let config = {};
    config.widgetContainerId = "widgetContainer";
    config.open = false;

    document?.getElementById("customer-enquiry")
      .addEventListener("click", () => {
        config = {};
        config.widgetContainerId = "widgetContainer";
        config.channelId = "f4f47e77-2f29-4bee-8869-4b300d68782b"
        config.open = true;
        BV.CustomerEnquiryWidget({ ...config });
      });
	})
</script>

