<script lang='ts'>
	import type {OG, User, Posts, AdministrationList} from './types'

	export let data:{
		og_data: OG[];
		user: User;
		notices: Posts;
		news: Posts;
		administration: AdministrationList;
	};

	let og_data = data.og_data[0];
	let user = data.user;
	let notices = data.notices;
	let news = data.news;
	let administration = data.administration;

	let isOpenGraphEdit = false;

	import AdminButtons from '../components/AdminButtons.svelte';
	import BtnAdminEdit from '../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../components/OpenGraphEditor.svelte';
	import HeaderContent from '../components/HeaderContent.svelte';
	import HomeNotices from '../components/HomeNotices.svelte';
	import HomeNews from '../components/HomeNews.svelte';
	import Administration from '../components/Administration.svelte';

	function openGraphEdit(){
		isOpenGraphEdit = true;
	}
</script>

<svelte:head>
	<title>{og_data.title}</title>
	<meta name="description" content="{og_data.description}" />
	<meta property="og:type" content="{og_data.og_type}" />
	<meta property="og:title" content="{og_data.og_title}" />
	<meta property="og:description" content="{og_data.og_description}" />
	<meta property="og:url" content="{og_data.og_url}">
	<meta property="og:image" content="{og_data.og_image}">
	<meta property="og:image:type" content="{og_data.og_image_type}" />
	<meta property="og:image:width" content="{og_data.og_image_width}">
	<meta property="og:image:height" content="{og_data.og_image_height}">
	<meta name="twitter:title" content="{og_data.title}">
	<meta name="twitter:description" content="{og_data.description}">
</svelte:head>

{#if user.isAdmin}
<AdminButtons>
	<BtnAdminEdit title="OpenGraph" bg="opengraph" on:click="{openGraphEdit}" />
</AdminButtons>
{/if}

{#if isOpenGraphEdit}
	<OpenGraphEditor bind:dataOpenGraph={og_data}  bind:isOpenGraphEdit={isOpenGraphEdit} />
{/if}


<div class="maincontainer">
	<HeaderContent />
	<HomeNotices  notices={notices}/>
	<Administration administration={administration} />
	<HomeNews news={news} />
</div>
	


<style lang="scss">

</style>
