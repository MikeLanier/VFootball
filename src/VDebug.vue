<template>
  <div style="margin:5px">
    <input v-model="message" name="fname">
    <div @click="click" class="debug-go-button">Go</div>
  </div>
</template>

<script>
export default {
    name: "v-debug",
    props: [ 'gamedata' ],
    data() {
        return {
            message: ''
        };
    },
    methods: {
        click() {
            console.log("click: " + this.message + ", " + this.gamedata.down)
            this.gamedata.down = this.gamedata.down + 1;
            this.message = "    ";
        }
    }
}
</script>

<style>
.debug-go-button {
    border:1px solid black;
    border-radius:5px;
    background-color:white;
    display:inline;
}
</style>
