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
  height:48px;
  background-color:lightgreen;
}
.black-border {
  border:2px solid black;
  border-radius:5px;
  margin:3px;
}
</style>
