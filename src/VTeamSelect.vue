<template>
    <div id="mySidenav" class="sidenav">
        <div class="closebtn" @click="closeNav">&times;</div>

        <ul id="example-1">
            <li v-for="item in sec" :key="item.id" style="list-style: none">
				<v-team-select-item :team="item">
				</v-team-select-item>					
            </li>
        </ul>
    </div>
</template>

<script>
import VTeamSelectItem from "./VTeamSelectItem.vue"
export default {
    name: "VTeamSelect",
    props: [ 'gamedata' ],
    components: { VTeamSelectItem },
    data() {
        return {
            sec: [
                // { name: "#SEC,,," },
				{ name: "Alabama", year: "2012", filenamme: "CSV\\2012 Alabama.csv", helmet: "Alabama.png" },
				{ name: "Arkansas", year: "1977", filenamme: "CSV\\1977 Arkansas.csv", helmet: "Arkansas.png" },
				{ name: "Auburn", year: "2010", filenamme: "CSV\\2010 Auburn.csv", helmet: "Auburn.png" },
				{ name: "Florida", year: "2008", filenamme: "CSV\\2008 Florida.csv", helmet: "Florida.png" },
				{ name: "Georgia", year: "1980", filenamme: "CSV\\1980 Georgia.csv", helmet: "Georgia.png" },
				{ name: "Kentucky", year: "1977", filenamme: "CSV\\1977 Kentucky.csv", helmet: "Kentucky2.png" },
				{ name: "LSU", year: "2007", filenamme: "CSV\\2007 LSU.csv", helmet: "LSU.png" },
				{ name: "Mississippi", year: "2003", filenamme: "CSV\\2003 Mississippi.csv", helmet: "Mississippi.png" },
				{ name: "Missouri", year: "1969", filenamme: "CSV\\1969 Missouri.csv", helmet: "Missouri.png" },
				{ name: "South Carolina", year: "1984", filenamme: "CSV\\1984 South Carolina.csv", helmet: "South_Carolina.png" }
           ]
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
        },
        readfile() {
            console.log('\n\nVTeamSelect:readfile');
            var file = new File([""], "C:\\Mike\\VFootball\\src\\assets\\Teams\\SEC.csv");
            console.log("file.name: " + file.name);
            var reader = new FileReader();
            console.log('VTeamSelect:mounted-2');
            reader.onload = function(progressEvent) {
                // Entire file
                console.log("VTextSelect:mounter:read.onload:this.result: " + this.result);

                // By lines
                var lines = this.result.split('\n');
                console.log("VTextSelect:mounter:read.onload:lines: " + lines);
                for(var line = 0; line < lines.length; line++){
                    console.log("lines[line]: " + line.toString() + ", " + lines[line]);
                }
            };

            try {
                console.log('VTeamSelect:mounted-3');
                // reader.readAsText(".\\assets\\teams\\sec.csv");
                reader.readAsText(file);
            }
            catch(e) {
                console.log("readastext failed")
            }
            console.log('VTeamSelect:mounted-4');
        }
    },
    mounted() {
        console.log('VTeamSelect:mounted-1');
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
