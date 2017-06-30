<template>
  <div style="margin:5px">
    <input id="junk" v-model="message" name="fname">
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
            var items = this.message.split(',');
            console.log("click: " + this.message);
            console.log("items: " + items.length);
            console.log("items[0]: " + items[0]);
            console.log("items[1]: " + items[1]);
            this.gamedata.down = this.gamedata.down + 1;
            this.message = "";
            document.getElementById('junk').focus();
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
