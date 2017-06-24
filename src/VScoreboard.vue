<template>
        <table>
            <tr>
                <th class="name-header"></th>
                <th class="item-header black-border white-background">S</th>
                <th class="item-header black-border white-background">1</th>
                <th class="item-header black-border white-background">2</th>
                <th class="item-header black-border white-background">3</th>
                <th class="item-header black-border white-background">4</th>
                <th class="item-header black-border white-background">Quarter</th>
                <th class="item-header black-border white-background">Down</th>
                <th class="item-header black-border white-background">Ball On</th>
                <th class="item-header black-border white-background">Time</th>
                <th class="item-header black-border white-background">TO</th>
            </tr>
            <tr>
                <td class="name black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
            </tr>
            <tr>
                <td class="name black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
                <td class="item black-border white-background"></td>
            </tr>
        </table>
</template>

<script>
export default {
    name: "v-scoreboard",
}
</script>

<style>
.scoreboard {
  left:0px;
  width:70%;
}
.black-border {
  border:1px solid black;
  border-radius:5px;
  margin:3px;
  white-space: nowrap;
}
.white-background {
  background-color: white;
}
.item-header {
    height: 16px;
    width: 32px;
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
