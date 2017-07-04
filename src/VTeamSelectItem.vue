<template>
	<div :class="itemclass" @mouseover="mouseover" @mouseout="mouseout" @click="click">
		<img :src="helmetpath" class="team-select-align">
		<font :color="fontcolor">{{team.year}} {{team.name}}</font>
	</div>
</template>

<script>
export default {
    name: "VTeamSelectItem",
    props: [ 'team' ],
	data() {
		return {
			helmetpath: "/src/assets/helmets/" + this.team.helmet,
			itemclass: "team-select-item team-select-align",
			fontcolor: "black"
		}
	},
	methods: {
		mouseover() {
			this.fontcolor = "red";
		},
		mouseout() {
			this.fontcolor = "black";
		},
		click(e) {
			console.log("this.team.tag: " + this.team.tag);
			this.$emit('loadteam', this.team.tag);
		}
	}
}
</script>

<style>
.team-select-item {
	font-size: 24px;
	height: 120px;
	width: 150px;
}
.team-select-align {
	vertical-align: middle;
} 
</style>
