<template>
    <div id="mySidenav" class="sidenav">
        <div class="closebtn" @click="closeNav">&times;</div>

		<div style="font-size:32px">{{junk.name}}</div>
        <ul id="example-1">
            <li v-for="item in junk.teams" :key="item.id" style="list-style: none">
				<v-team-select-item :team="item">
				</v-team-select-item>					
            </li>
        </ul>
    </div>
</template>

<script>
import VTeamSelectItem from "./VTeamSelectItem.vue"
import {BCS} from "./assets/Teams/BCS.js"
import {SEC} from "./assets/Teams/SEC.js"

export default {
    name: "VTeamSelect",
    props: [ 'gamedata' ],
    components: { VTeamSelectItem },
    data() {
        return {
		   junk: BCS
        }
    },
    watch: {
    },
    methods: {
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },
        closeNav() {
            console.log("VTeamSelect:closeNav");
            document.getElementById("mySidenav").style.width = "0";
        }
    },
    mounted() {
    }
}
</script>

<style>
/* The side navigation menu */
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    overflow: scroll;
	white-space: nowrap;
    /*padding-top: 60px;*/
    transition: 0.5s;
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover, .offcanvas a:focus{
    color: #1111ff;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 50px;
    height: 50px;
    background-color: white;
    border: 1px solid blue;
    font-size: 36px;
    margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
    transition: margin-left .5s;
    padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
</style>
