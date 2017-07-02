<template>
  <div style="margin:5px">
    <input @keyup="keyup" id="junk" v-model="message" name="fname">
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
        keyup() {
            if(this.message.indexOf('.') >= 0) {
                this.click();
            }
        },
        click() {
            var items = this.message.split(',');
            // console.log("debug: click: " + this.message);
            // console.log("debug: items: " + items.length);
            // console.log("debug: items[0]: " + items[0]);
            // console.log("debug: items[1]: " + items[1]);
            this.message = "";
            document.getElementById('junk').focus();

            if(items[0] === 'd') {
                this.gamedata.down = parseInt(items[1]);
            } 
            else
            if(items[0] == 's') {
                console.log('debug: debug: score: ')
                var who = 0;
                if(items[1] == 'v') {
                    who = 1;
                }

                var val = parseInt(items[2]);
                console.log('debug: who, val: ' + who.toString() + ', ' + val.toString())

                this.gamedata.score[who][this.gamedata.quarter] = val;
                console.log("debug: gamedata.score[0]: " + this.gamedata.score[0][0] + ", " + this.gamedata.score[0][1] + ", " + this.gamedata.score[0][2] + ", " + this.gamedata.score[0][3] + ", " + this.gamedata.score[0][4])
                console.log("debug: gamedata.score[1]: " + this.gamedata.score[1][0] + ", " + this.gamedata.score[1][1] + ", " + this.gamedata.score[1][2] + ", " + this.gamedata.score[1][3] + ", " + this.gamedata.score[0][4])

                this.gamedata.name[0] = "HOME" + val.toString()
                this.gamedata.name[1] = "VISITOR" + val.toString()

            }
            else
            if(items[0] == 'q') {
                this.gamedata.quarter = parseInt(items[1]);
            }
            else
            if(items[0] == 'y') {
                this.gamedata.yardline = parseInt(items[1]);
            }
            else
            if(items[0] == 'g') {
                this.gamedata.togo = parseInt(items[1]);
            }
            else
            if(items[0] == 't') {
                this.gamedata.time = parseInt(items[1]);
            }
            else
            if(items[0] == 'o') {
                console.log('debug.offense: ' + items[1]);
                if(items[1] == 'h' || items[1] == 'h.') {
                    console.log('debug: offense: home')
                    this.gamedata.offense = 0;
                    this.gamedata.defense = 1;
                }
                else {
                    console.log('debug: offense: visitor')
                    this.gamedata.offense = 1;
                    this.gamedata.defense = 0;                   
                }
                this.gamedata.trigger++;
            }
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
