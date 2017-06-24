<template>
    <div id='field' :style="{ width: width, height: height }" class="black-border white-background"></div>
</template>

<script>
export default {
    name: "v-field",
    data: {
        scale: 3
    },
    computed: {
        width() {
            return '1080px'
        },
        height() {
            return '480px'
        }
    }
}
</script>

<style>
.field {
  width:720px;
  height:320px;
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
