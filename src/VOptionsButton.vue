<template>
    <div @click="click" @mouseover="mouseover" @mouseout="mouseout" :style="{'background-color': backgroundColor}">
        {{title}}
    </div>
</template>

<script>
export default {
    name: "v-options-button",
    props: [ 'title' ],
    data() {
        return {
            backgroundColor: 'white',           
            hovered: false,
            selected: false,
        }
    },
    watch: {
        selected: function() {
            console.log('watch.selected')
        }
    },
    methods: {
        mouseover() {
            // console.log("mouseover");
            this.hovered = true
            if(!this.selected) {
                this.backgroundColor = 'yellow'
            }
        },
        mouseout() {
            // console.log("mouseout")
            this.hovered = false
            if(!this.selected) {
                this.backgroundColor = 'white'
            }
        },
        click() {
            console.log("click: " + this)
            this.selected = !this.selected
            this.$emit('clickity', this)

            if(this.selected) {
                this.backgroundColor = 'orange'
            } else {
                if(this.hovered) {
                    this.backgroundColor = 'yellow'
                } else {
                    this.backgroundColor = 'white'
                }
            }
        }
    }
}
</script>

<style>
</style>
