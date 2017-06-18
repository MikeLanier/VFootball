<template>
    <div 
        style="position:absolute;
                left:10px;
                top:10px;
                border:1px solid black;
                border-radius:5px;
                background-color:white"
    >
        {{ width }}
        {{ height }}
    </div>
</template>

<script>
export default {
    name: "v-scoreboard",
    props: [ 'width', 'height'],
    mounted() {
        console.log(this.width)
        console.log(this.height)
    }
}
</script>

<style>
</style>
