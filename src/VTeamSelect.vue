<template>
    <div id="mySidenav" class="sidenav">
        <div class="closebtn" @click="closeNav">&times;</div>
        <ul id="example-1">
            <li v-for="item in sec" :key="item.id">
                <div @click="toggle">
                    {{ item.team }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "VTeamSelect",
    props: [ 'gamedata' ],
    data() {
        return {
            sec: [
                { team: "#SEC,,," },
                    { team: "Alabama,2012,CSV\\2012 Alabama.csv,Alabama.png" },
                    { team: "Arkansas,1977,CSV\\1977 Arkansas.csv,Arkansas.png" },
                    { team: "Auburn,2010,CSV\\2010 Auburn.csv,Auburn.png" },
                    { team: "Florida,2008,CSV\\2008 Florida.csv,Florida.png" },
                    { team: "Georgia,1980,CSV\\1980 Georgia.csv,Georgia.png" },
                    { team: "Kentucky,1977,CSV\\1977 Kentucky.csv,Kentucky2.png" },
                    { team: "LSU,2007,CSV\\2007 LSU.csv,LSU.png" },
                    { team: "Mississippi,2003,CSV\\2003 Mississippi.csv,Mississippi.png" },
                    { team: "Missouri,1969,CSV\\1969 Missouri.csv,Missouri.png" },
                    { team: "South Carolina,1984,CSV\\1984 South Carolina.csv,South_Carolina.png" }
           ]
        }
    },
    watch: {
    },
    methods: {
        toggle() {
        },
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
    overflow-x: hidden;
    padding-top: 60px;
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
