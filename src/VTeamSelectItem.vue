<template>
	<div style="font-size:24px; vertical-align: middle">
		<img :src="helmetpath" style="vertical-align: middle">
		{{team.year}} {{team.name}}
	</div>
</template>

<script>
export default {
    name: "VTeamSelectItem",
    props: [ 'team' ],
	data() {
		return {
			helmetpath: "/src/assets/helmets/" + this.team.helmet
		}
	}
}
</script>

<style>
</style>
