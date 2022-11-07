<script>
	import Card from '$lib/projects/Card.svelte';
</script>

<article>
	<Card
		link="https://thetalentbase.com/"
		id="talentbase"
		name="TalentBase"
		description="A platform for connecting businesses with remote workers. Built using TypeScript with React, Redux, Material-UI and react-hook-forms. Consumes data from a REST API created in Java Spring Boot."
		image="/images/talentBase.svg"
	/>
	<Card
		link="https://play.google.com/store/apps/details?id=com.fishmansasha.quickdeal"
		id="quickdeal"
		name="QuickDeal"
		description="An Android application for hyper-local classifieds. Developed using JavaScript with React-Native (Expo), Redux, React-Navigation, NativeBase and Formik. The backend was made in Java Spring Boot and Keycloak."
		image="/images/quickdeal.png"
	/>
</article>
