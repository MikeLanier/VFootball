<template>
    <table>
        <tr>
            <th class="option-button black-border white-background"><v-options-button @onClick="onClick" title="0-Line Plunge"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="4-Option"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="5-Screen"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="14-Punt"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="18-Standard"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="22-Long Pass"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="12-Kickoff"></v-options-button></th>
        </tr>
        <tr>
            <th class="option-button black-border white-background"><v-options-button title="1-Counter"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="26-Kneel"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="6-Sprint Out"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="24-Fake Punt"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="19-Short Gaps"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="23-Blitz"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="29-Onsides Kick"></v-options-button></th>
        </tr>
        <tr>
            <th class="option-button black-border white-background"><v-options-button title="2-End Reverse"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="27-QB Sneak"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="7-Bootleg"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="17-Fieldgoal"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="20-Short Wide"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="30-Squib Kick"></v-options-button></th>
        </tr>
        <tr>
            <th class="option-button black-border white-background"><v-options-button title="3-Draw"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="28-Spike"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="8-Drop Back"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="25-Fake FG"></v-options-button></th>
            <th class="option-button black-border white-background"><v-options-button title="21-Short Pass"></v-options-button></th>
            <th class="option-button3 black-border white-background"><v-options-button title="30-Squib Kick"></v-options-button></th>
        </tr>
    </table>
</template>

<script>

// id="line-plunge"
// id="counter"
// id="end-reverse"
// id="draw"

// id="option"
// id="kneel"
// id="qb-sneak"
// id="spike"

// id="screen"
// id="sprint-out"
// id="bootleg"
// id="drop-back"

// id="punt"
// id="fake-punt"
// id="fieldgoal"
// id="fake-fg"

// id="standard"
// id="shortGaps"
// id="short-wide"
// id="short-pass"

// id="long-pass"
// id="blitz"

// id="kickoff"
// id="onsides-kick"
// id="squib-kick"

import VOptionsButton from "./VOptionsButton.vue"

export default {
    name: "v-options",
    components: { VOptionsButton },
    methods: {
        onClick(event, props) {
            console.log("onClick: " + props)
        }
    }
}
</script>

<style>
.option-button {
    height: 16px;
    width: 125px;
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
