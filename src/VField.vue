<template>
    <div class="field-panel black-border lightgreen-background">
      <div :style="{'width': width, 
                    'height': height, 
                    'margin':margin, 
                    'background-color':background_color, 
                    'border': border}">
        <div style="border-left:medium white solid; position:absolute; left:100px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:190px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:280px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:370px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:460px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:550px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:640px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:730px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:820px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:910px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:1000px;" :style="{'height': height}"></div> 
      </div>
    </div>
</template>

<script>
export default {
  name: "v-field",
  data() {
    return {
      width: '360px',
      height: '150px',
      scale: 3,
      iwidth: 360,
      iheight: 160,
      margin: '10px',
      background_color: 'green',
      border: "1px solid white"
    }
  },
  mounted() {
    var w = this.iwidth * this.scale;
    var h = this.iheight * this.scale;
    this.width = w.toString() + 'px';
    this.height = h.toString() + 'px';
    this.border = this.scale.toString() + "px solid white";
  }
}
</script>

<style>
.field-panel {
  position:absolute;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}
.black-border {
  border:2px solid black;
  border-radius:5px;
  margin:3px;
}
.white-background {
  background-color: white;
}
.lightgreen-background {
  background-color: lightgreen;
}
</style>
