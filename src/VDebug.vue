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
            // console.log("click: " + this.message);
            // console.log("items: " + items.length);
            // console.log("items[0]: " + items[0]);
            // console.log("items[1]: " + items[1]);
            this.message = "";
            document.getElementById('junk').focus();

            if(items[0] === 'd') {
                this.gamedata.down = parseInt(items[1]);
            } 
            else
            if(items[0] == 's') {
                var who = 0;
                if(items[1] == 'v') {
                    who = 1;
                }

                var val = parseInt(items[2]);

                this.gamedata.score[who][this.gamedata.quarter] = val;
                console.log("gamedata.score[0]: " + this.gamedata.score[0][0] + ", " + this.gamedata.score[0][1] + ", " + this.gamedata.score[0][2] + ", " + this.gamedata.score[0][3] + ", " + this.gamedata.score[0][4])
                console.log("gamedata.score[1]: " + this.gamedata.score[1][0] + ", " + this.gamedata.score[1][1] + ", " + this.gamedata.score[1][2] + ", " + this.gamedata.score[1][3] + ", " + this.gamedata.score[0][4])

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
                if(items[1] == 'h') {
                    this.gamedata.offense = this.gamedata.home;
                    this.gamedata.defense = this.gamedata.visitor;
                }
                else {
                    this.gamedata.offense = this.gamedata.visitor;
                    this.gamedata.defense = this.gamedata.home;                   
                }
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
