<template>
    <table>
        <tr>
            <th class="item black-border white-background">0-Line Plunge</th>
            <th class="item black-border white-background">4-Option</th>
            <th class="item black-border white-background">5-Screen</th>
            <th class="item black-border white-background">14-Punt</th>
            <th class="item black-border white-background">18-Standard</th>
            <th class="item black-border white-background">22-Long Pass</th>
            <th class="item black-border white-background">12-Kickoff</th>
        </tr>
        <tr>
            <th class="item black-border white-background">1-Counter</th>
            <th class="item black-border white-background">26-Kneel</th>
            <th class="item black-border white-background">6-Sprint Out</th>
            <th class="item black-border white-background">24-Fake Punt</th>
            <th class="item black-border white-background">19-Short Gaps</th>
            <th class="item black-border white-background">23-Blitz</th>
            <th class="item black-border white-background">29-Onsides Kick</th>
        </tr>
        <tr>
            <th class="item black-border white-background">2-End Reverse</th>
            <th class="item black-border white-background">27-QB Sneak</th>
            <th class="item black-border white-background">7-Bootleg</th>
            <th class="item black-border white-background">17-Fieldgoal</th>
            <th class="item black-border white-background">20-Short Wide</th>
            <th class="item black-border white-background">30-Squib Kick</th>
        </tr>
        <tr>
            <th class="item black-border white-background">3-Draw</th>
            <th class="item black-border white-background">28-Spike</th>
            <th class="item black-border white-background">8-Drop Back</th>
            <th class="item black-border white-background">25-Fake FG</th>
            <th class="item black-border white-background">21-Short Pass</th>
            <th class="item black-border white-background">30-Squib Kick</th>
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
export default {
    name: "v-options",
}
</script>

<style>
.item {
    height: 16px;
    width: 125px;
}
.options-panel {
  width:720PX;
  height:100px;
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
