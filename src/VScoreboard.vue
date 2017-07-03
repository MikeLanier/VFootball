<template>
    <table>
        <tr>
            <th class="name-header"></th>
            <th class="item-header"></th>
            <th :style="{'background-color': quarter1background}" class="item-header black-border white-background">1</th>
            <th :style="{'background-color': quarter2background}" class="item-header black-border white-background">2</th>
            <th :style="{'background-color': quarter3background}" class="item-header black-border white-background">3</th>
            <th :style="{'background-color': quarter4background}" class="item-header black-border white-background">4</th>
            <th class="item-header-ball-on"></th>
            <th class="item-header-time black-border white-background">Time</th>
            <th class="item-header black-border white-background">TO</th>
        </tr>
        <tr>
            <th @click="hometeamselect" :style="{'background-color': homebackground}" class="name black-border white-background">{{gamedata.name[0]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][0]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][1]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][2]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][3]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][4]}}</th>
            <th rowspan="2" class="item black-border white-background"><div style="margin:5px">{{down}}</div><div style="margin:5px">{{ballon}}</div></th>
            <th rowspan="2" class="item black-border white-background">{{time}}</th>
            <th class="item black-border white-background">{{gamedata.to[0]}}</th>
        </tr>
        <tr>
            <th @click="visitorteamselect" :style="{'background-color': visitorbackground}"class="name black-border white-background">{{gamedata.name[1]}}</th>
            <th class="item black-border white-background">{{gamedata.score[1][0]}}</th>
            <th class="item black-border white-background">{{gamedata.score[1][1]}}</th>
            <th class="item black-border white-background">{{gamedata.score[1][2]}}</th>
            <th class="item black-border white-background">{{gamedata.score[1][3]}}</th>
            <th class="item black-border white-background">{{gamedata.score[1][4]}}</th>
            <th class="item black-border white-background">{{gamedata.to[1]}}</th>
        </tr>
    </table>
</template>

<script>
export default {
    name: "v-scoreboard",
    props: [ 'gamedata' ],
    data() {
        return {
            down: '1st and 10',
            ballon: 'ball on the HOME 40 yards line',
            time: '15.00',
            homebackground: 'yellow',
            visitorbackground: 'white',
            quarter1background: 'yellow',
            quarter2background: 'white',
            quarter3background: 'white',
            quarter4background: 'white',
        }
    },
    watch: {
        'gamedata.trigger': function() {
            // console.log('scoreboard: trigger');
            this.format_names();
        },
        'gamedata.down': function() {
            // console.log('scoreboard: gamedata.down');
            this.format_down();
        },
        'gamedata.togo': function() {
            // console.log('scoreboard: gamedata.togo: ')
            // console.log('scoreboard: gamedata.down');
            this.format_down();
        },
        'gamedata.yardline': function() {
            // console.log('scoreboard: gamedata.yardline: ' + this.gamedata.yardline)
            this.format_ballon();
        },
        'gamedata.offense': function() {
            // console.log('scoreboard: gamedata.offense: ' + this.gamedata.offense)
            this.format_ballon();
            this.format_names();
        },
        'gamedata.defense': function() {
            // console.log('scoreboard: gamedata.defense: ' + this.gamedata.defense)
        },
        'gamedata.quarter': function() {
            // console.log('scoreboard: gamedata.quarter: ' + this.gamedata.quarter)
            this.quarter1background = (this.gamedata.quarter == 1) ? 'yellow' : 'white';
            this.quarter2background = (this.gamedata.quarter == 2) ? 'yellow' : 'white';
            this.quarter3background = (this.gamedata.quarter == 3) ? 'yellow' : 'white';
            this.quarter4background = (this.gamedata.quarter == 4) ? 'yellow' : 'white';
        },
        'gamedata.time': function() {
            // console.log('scoreboard: gamedata.time: ' + this.gamedata.time);
            var min = Math.floor(this.gamedata.time / 60);
            var sec = this.gamedata.time - (min * 60);
            console.log("   min, sec: " + min.toString() + ", " + sec.toString())

            this.time = min.toString();
            if(sec < 10)
            {
                this.time = this.time + ":0";
            }
            else
            {
                this.time = this.time + ":";
            }
            this.time = this.time + sec.toString();
        },
        'gamedata.score': function() {
            console.log('scoreboard: gamedata.score: ')
        },
        'gamedata.offense': function() {
            console.log('scoreboard: gamedata.offense: ' + this.gamedata.offense + ', ' + this.gamedata.defense)
        }
    },
    methods: {
        format_names() {
            console.log('scoreboard: format_names: offense: ' + this.gamedata.offense)

            if(this.gamedata.offense == 0) {
                this.homebackground = 'yellow';
                this.visitorbackground = 'white';
            }
            else {
                this.homebackground = 'white';
                this.visitorbackground = 'yellow';
            }
        },
        format_down() {
            // console.log('scoreboard: format_down')
            // console.log('scoreboard: gamedata.down: ' + this.gamedata.down)
            // console.log('scoreboard: gamedata.togo: ' + this.gamedata.togo)

            if(this.gamedata.down == 1) { this.down = '1st and ' }
            else if(this.gamedata.down == 2)    {this.down = '2nd and '}
            else if(this.gamedata.down == 3)    {this.down = '3rd and '}
            else if(this.gamedown.down == 4)    {this.down = '4th and '}
            else {this.down = this.gamedata.down.toString() + ' and '}

            this.down = this.down + this.gamedata.togo.toString(); 
        },
        format_ballon() {
            // console.log('scoreboard: format_ballon')
            // console.log("  yardline: " + this.gamedata.yardline)
            // console.log("  offense: " + this.gamedata.offense)
            var ballon = 'ball ';
            if(this.gamedata.yardline == 50) {
                ballon = ballon + 'at midfield'
            }
            else {
                // console.log('scoreboard: yardline: ' + this.gamedata.yardline)
                var yardline = 0;
                var team = 0;

                if(this.gamedata.yardline > 50) {
                    // console.log('>50')
                    yardline = 100 - this.gamedata.yardline;
                    team = this.gamedata.offense;
                }
                else {
                    // console.log('<50')
                    yardline = this.gamedata.yardline;
                    team = this.gamedata.defense;
                }

                this.ballon = "at the " + this.gamedata.name[team] + " " + yardline.toString() + " yardline";
            }
        },
        hometeamselect() {
            console.log("scoreboard:hometeamselect");
            document.getElementById("mySidenav").style.width = "400px";
        },
        visitorteamselect() {
            console.log("scoreboard:visitorteamselect");
            document.getElementById("mySidenav").style.width = "400px";
        }
    }
}
</script>

<style>
.black-border {
  border:1px solid black;
  border-radius:5px;
  margin:3px;
}
.no-wrap {
  white-space: nowrap;
}
.white-background {
  background-color: white;
}
.item-header {
    height: 16px;
    width: 32px;
}
.item-header-ball-on {
    height: 16px;
    width: 800px;
}
.item-header-down {
    height: 16px;
    width: 100px;
}
.item-header-time {
    height: 16px;
    width: 75px;
}
.item {
    height: 32px;
    width: 32px;
}
.name {
    height: 32px;
    width: 300px;
}
.name-header {
    height: 16px;
    width: 300px;
}
</style>
