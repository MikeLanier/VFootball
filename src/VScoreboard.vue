<template>
    <div style="position:static;">
        <table>
            <tr>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
                <td class="rectangle-box"></td>
            </tr>
            <tr>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
            </tr>
            <tr>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
                <td class="square-box"></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "v-scoreboard",
}
</script>

<style>
.square-box {
    position: static;
    height: 32px;
    width: 32px;
    border: 1px solid black;
    border-radius: 5px;
}
.rectangle-box {
    position: static;
    height: 16px;
    width: 32px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>
