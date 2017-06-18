<template>
  <div id="app" 
        style="position:fixed;
                left:5px;
                top:5px; 
                right:5px; 
                bottom:5px; 
                border:1px solid black; 
                border-radius:5px; 
                background-color:green">
    <v-scoreboard height="20%" width="70%">
    </v-scoreboard>
  </div>
</template>

<script>
import VScoreboard from "./VScoreboard.vue"
export default {
  name: 'v-football',
  components: { VScoreboard },

  data () {
    return {
    }
  }
}
</script>

<style>
</style>
