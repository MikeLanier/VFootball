<template>
    <div class="stats-panel black-border white-background"></div>
</template>

<script>
export default {
    name: "v-stats",
}
</script>

<style>
.stats-panel {
  position:absolute;
  margin: 5px;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}
.black-border {
  border:2px solid black;
  border-radius:5px;
  margin:3px;
}
.white-background {
  background-color: white;
}
</style>
