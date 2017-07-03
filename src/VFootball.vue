<template>
  <div id="app" class="football black-border">
    <div class="scoreboard black-border"><v-scoreboard :gamedata="gamedata"></v-scoreboard></div>
    <div class="field black-border"><v-field :gamedata="gamedata"></v-field></div>
    <div class="text black-border"><v-text :gamedata="gamedata"></v-text></div>
    <div class="options black-border"><v-options :gamedata="gamedata"></v-options></div>
    <div class="stats black-border"><v-stats :gamedata="gamedata"></v-stats></div>
    <div class="debug black-border"><v-debug :gamedata="gamedata"></v-debug></div>
  </div>
</template>

<script>
import VScoreboard from "./VScoreboard.vue"
import VField from "./VField.vue"
import VText from "./VText.vue"
import VOptions from "./VOptions.vue"
import VStats from "./VStats.vue"
import VDebug from "./VDebug.vue"
import JTeam from "./JTeam.js"

export default {
  name: 'v-football',
  components: { VScoreboard, VField, VText, VOptions, VStats, VDebug },

  data() {
    return {
      gamedata: {
        trigger: 0,
        offense: 0,
        defense: 1,
        score: [
          [ 1, 2, 3, 4, 5 ],
          [ 6, 7, 8, 9, 10 ]
        ],
        quarter: 1,
        down: 1,
        yardline: 0,
        togo: 10,
        time: 900,
        to: [ 3, 3 ],
        name: [ 'HOME', 'VISITOR' ]
      }
    }
  },
  mounted: function() {
    console.log('mounted: ')
    var gd = {
      home: 1,
      visitor: 0,
      offense: 1,
      defense: 0,
      score: [
        [ 1, 2, 3, 4, 5 ],
        [ 6, 7, 8, 9, 10 ]
      ],
      quarter: 1,
      down: 1,
      yardline: 60,
      togo: 10,
      time: 900,
      to: [ 3, 3 ],
//        teams: [ new JTeam(), new JTeam() ]
    }
  },
  methods: {
  }
}
</script>

<style>
.football {
  position:absolute;
  left:0px;
  top:0px;
  right:0px;
  bottom:0px;
  background-color:green;
}
.scoreboard {
  width:1200px;
  height:110px;
  background-color:lightgreen;
}
.field {
  position:absolute;
  left:0px;
  top:115px;
  width:1200px;
  height:520px;
  background-color:lightgreen;
}
.text {
  position:absolute;
  left:0px;
  top:640px;
  width:1200px;
  height:178px;
  background-color:lightgreen;
}
.options {
  position:absolute;
  left:0px;
  bottom:0px;
  /*width:50%;
  height:15%;*/
  background-color:lightgreen;
}
.stats {
  position:absolute;
  left:1205px;
  top:0px;
  right:0px;
  bottom:0px;
  background-color:lightgreen;
}
.debug {
  position:absolute;
  left:939px;
  bottom:0px;
  width:260px;
  height:32px;
  background-color:lightgreen;
}
.black-border {
  border:2px solid black;
  border-radius:5px;
  margin:3px;
}
</style>
