<template>
  <div style="margin:5px">
    <input v-model="message" name="fname" @mouseover="mouseover" @mouseout="mouseout">
    <div @click="click" style="width:24px;heigh:24px;border:1px solid black;border-radius:5px;background-color:white;display:inline;">Go</div>
  </div>
</template>

<script>
export default {
    name: "v-debug",
    data() {
        return {
            backgroundColor: 'white',
            message: 'junk'
        };
    },
    watch: {
      message() {
        console.log(this.message)
      }
    },
    methods: {
        mouseover() {
            console.log("mouseover");
        },
        mouseout() {
            console.log("mouseout")
        },
        click() {
            console.log("click: " + this.message)
        }
    }
}
</script>

<style>
</style>
