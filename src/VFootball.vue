<template>
  <div id="app" class="football black-border">
    <div class="scoreboard black-border">
      <v-scoreboard></v-scoreboard>
    </div>
    <div class="field black-border">
      <v-field></v-field>
    </div>
    <div class="text black-border">
      <v-text></v-text>
    </div>
    <div class="options black-border">
      <v-options></v-options>
    </div>
    <div class="stats black-border">
      <v-stats></v-stats>
    </div>
    <div class="debug black-border">
      <v-debug></v-debug>
    </div>
  </div>
</template>

<script>
import VScoreboard from "./VScoreboard.vue"
import VField from "./VField.vue"
import VText from "./VText.vue"
import VOptions from "./VOptions.vue"
import VStats from "./VStats.vue"
import VDebug from "./VDebug.vue"

export default {
  name: 'v-football',
  components: { VScoreboard, VField, VText, VOptions, VStats, VDebug },

  data () {
    return {
    }
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
  /*position:absolute;
  left:0px;
  top:0px;*/
  width:70%;
  height:110px;
  background-color:lightgreen;
}
.field {
  position:absolute;
  left:0px;
  top:115px;
  width:70%;
  height:360px;
  background-color:lightgreen;
}
.text {
  position:absolute;
  left:0px;
  top:480px;
  width:70%;
  height:100px;
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
  left:70.5%;
  top:0px;
  right:0px;
  height:90%;
  background-color:lightgreen;
}
.debug {
  position:absolute;
  left:50%;
  bottom:0px;
  width:18%;
  height:15%;
  background-color:lightgreen;
}
.black-border {
  border:2px solid black;
  border-radius:5px;
  margin:3px;
}
.white-background {
  background-color: white;
}
.blue-background {
  background-color: #aaffff;
}
.green-background {
  background-color: #aaffaa;
}
.red-background {
  background-color: #ffaaaa;
}
.yellow-background {
  background-color: #ffffaa;
}
.orange-background {
  background-color: #ffccaa;
}
.black-border {
    border: 1px solid black;
    border-radius: 5px;
}
</style>
