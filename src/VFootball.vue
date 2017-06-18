<template>
  <div id="app" class="football black-border">
    <v-scoreboard class="scoreboard black-border yellow-background"></v-scoreboard>
    <v-field class="field black-border blue-background"></v-field>
    <v-text class="text black-border orange-background"></v-text>
    <v-options class="options black-border red-background"></v-options>
    <v-stats class="stats black-border white-background"></v-stats>
  </div>
</template>

<script>
//    <v-stats class="stats black-border orange-background"></v-stats>
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
  height:15%;
}
.field {
  left:0px;
  width:70%;
  height:55%;
}
.text {
  left:0px;
  width:70%;
  height:15%;
}
.options {
  left:0px;
  width:70%;
  height:12%;
}
.stats {
  top:3px;
  right:3px;
  height:100%;
  width:30%;
}
.black-border {
  border:1px solid black;
  border-radius:5px;
  margin:3px;
}
.white-background {
  background-color: white;
}
.blue-background {
  background-color: blue;
}
.green-background {
  background-color: green;
}
.red-background {
  background-color: red;
}
.yellow-background {
  background-color: yellow;
}
.orange-background {
  background-color: orange;
}

</style>
