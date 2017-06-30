<template>
    <table>
        <tr>
            <th class="name-header"></th>
            <th class="item-header black-border white-background">S</th>
            <th class="item-header black-border white-background">1</th>
            <th class="item-header black-border white-background">2</th>
            <th class="item-header black-border white-background">3</th>
            <th class="item-header black-border white-background">4</th>
            <th class="item-header-down black-border white-background">Down</th>
            <th class="item-header-ball-on black-border white-background">Ball On</th>
            <th class="item-header-time black-border white-background">Time</th>
            <th class="item-header black-border white-background">TO</th>
        </tr>
        <tr>
            <th class="name black-border white-background">Home</th>
            <th class="item black-border white-background">{{gamedata.score[0][0]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][1]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][2]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][3]}}</th>
            <th class="item black-border white-background">{{gamedata.score[0][4]}}</th>
            <th rowspan="2" class="item black-border white-background">{{down}}</th>
            <th rowspan="2" class="item black-border white-background">{{ballon}}</th>
            <th rowspan="2" class="item black-border white-background">{{time}}</th>
            <th class="item black-border white-background">{{gamedata.to[0]}}</th>
        </tr>
        <tr>
            <th class="name black-border white-background">Visitor</th>
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
            time: '15.00'
        }
    },
    watch: {
        'gamedata.down': function() {
            console.log('scoreboard: gamedata.down: ' + this.gamedata.down)
        },
        'gamedata.togo': function() {
            console.log('scoreboard: gamedata.togo: ' + this.gamedata.togo)
        },
        'gamedata.yardline': function() {
            console.log('scoreboard: gamedata.yardline: ' + this.gamedata.yardline)
        },
        'gamedata.offense': function() {
            console.log('scoreboard: gamedata.offense: ' + this.gamedata.offense)
        },
        'gamedata.defense': function() {
            console.log('scoreboard: gamedata.defense: ' + this.gamedata.defense)
        },
        'gamedata.quarter': function() {
            console.log('scoreboard: gamedata.quarter: ' + this.gamedata.quarter)
        },
        'gamedata.time': function() {
            console.log('scoreboard: gamedata.time: ' + this.gamedata.time)
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
