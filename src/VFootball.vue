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
        <td rowspan="2" class="black-border">
          <v-stats></v-stats>
        </td>
      </tr>
      <tr>
        <td class="black-border">
          <v-options></v-options>
        </td>
      </tr>
      <tr>
        <td class="black-border">
          <v-text></v-text>
        </td>
        <!-- <td class="black-border">
          <v-debug></v-debug>
        </td> -->
      </tr>
    </table>
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
  position:fixed;
  left:0px;
  top:0px; 
  right:0px; 
  bottom:0px;
  background-color:green;
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
