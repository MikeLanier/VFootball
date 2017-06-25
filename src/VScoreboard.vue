<template>
    <table>
        <tr>
            <th class="name-header"></th>
            <th class="item-header black-border white-background">S</th>
            <th class="item-header black-border white-background">1</th>
            <th class="item-header black-border white-background">2</th>
            <th class="item-header black-border white-background">3</th>
            <th class="item-header black-border white-background">4</th>
            <th class="item-header-down black-border white-background">Down</th>
            <th class="item-header-ball-on black-border white-background">Ball On</th>
            <th class="item-header-time black-border white-background">Time</th>
            <th class="item-header black-border white-background">TO</th>
        </tr>
        <tr>
            <th class="name black-border white-background">Alabama</th>
            <th class="item black-border white-background">00</th>
            <th class="item black-border white-background">00</th>
            <th class="item black-border white-background">00</th>
            <th class="item black-border white-background">00</th>
            <th class="item black-border white-background">00</th>
            <th rowspan="2" class="item black-border white-background">1st and 10</th>
            <th rowspan="2" class="item black-border white-background">ball on the Alabama 40</th>
            <th rowspan="2" class="item black-border white-background">88.88</th>
            <th class="item black-border white-background">3</th>
        </tr>
        <tr>
            <th class="name black-border white-background">Auburn</th>
            <th class="item black-border white-background">0</th>
            <th class="item black-border white-background">0</th>
            <th class="item black-border white-background">0</th>
            <th class="item black-border white-background">0</th>
            <th class="item black-border white-background">0</th>
            <th class="item black-border white-background">3</th>
        </tr>
    </table>
</template>

<script>
export default {
    name: "v-scoreboard",
}
</script>

<style>
.black-border {
  border:1px solid black;
  border-radius:5px;
  margin:3px;
}
.no-wrap {
  white-space: nowrap;
}
.white-background {
  background-color: white;
}
.item-header {
    height: 16px;
    width: 32px;
}
.item-header-ball-on {
    height: 16px;
    width: 800px;
}
.item-header-down {
    height: 16px;
    width: 100px;
}
.item-header-time {
    height: 16px;
    width: 75px;
}
.item {
    height: 32px;
    width: 32px;
}
.name {
    height: 32px;
    width: 300px;
}
.name-header {
    height: 16px;
    width: 300px;
}
</style>
