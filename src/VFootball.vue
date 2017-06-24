<template>
  <div id="app" class="football black-border">
        <div class="black-border">
          <v-scoreboard></v-scoreboard>
        </div>
    <table>
      <tr>
        <td class="black-border">
          <v-field></v-field>
        </td>
        <td class="black-border">
          <v-stats></v-stats>
        </td>
      </tr>
      <tr>
        <td class="black-border">
          <v-options></v-options>
        </td>
        <td class="black-border">
          <v-text></v-text>
        </td>
      </tr>
    </table>
    <!-- <v-scoreboard class="scoreboard black-border yellow-background"></v-scoreboard>
    <v-field class="field black-border blue-background"></v-field>
    <v-text class="text black-border orange-background"></v-text>
    <v-options class="options black-border red-background"></v-options>
    <v-stats class="stats black-border white-background"></v-stats> -->
  </div>
</template>

<script>
import VScoreboard from "./VScoreboard.vue"
import VField from "./VField.vue"
import VText from "./VText.vue"
import VOptions from "./VOptions.vue"
import VStats from "./VStats.vue"
export default {
  name: 'v-football',
  components: { VScoreboard, VField, VText, VOptions, VStats },

  data () {
    return {
    }
  }
}
</script>

<style>
.football {
  position:fixed;
  left:0px;
  top:0px; 
  right:0px; 
  bottom:0px;
  background-color:green;
}
.scoreboard {
  left:0px;
  width:70%;
  height:13%;
}
.text {
  left:0px;
  width:70%;
  height:13%;
}
.options {
  left:0px;
  width:70%;
  height:13%;
}
.stats {
  top:3px;
  right:3px;
  height:98%;
  width:29%;
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
.item-header {
    height: 16px;
    width: 32px;
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
.black-border {
    border: 1px solid black;
    border-radius: 5px; 
}

</style>
