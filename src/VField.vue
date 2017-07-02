<template>
    <div class="field-panel black-border lightgreen-background">
      <div id="field"
           :style="{'width': width, 
                    'height': height, 
                    'margin':margin, 
                    'background-color':background_color, 
                    'border': border}">
        <!-- <div style="border-left:medium white solid; position:absolute; left:100px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:190px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:280px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:370px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:460px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:550px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:640px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:730px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:820px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:910px;" :style="{'height': height}"></div> 
        <div style="border-left:medium white solid; position:absolute; left:1000px;" :style="{'height': height}"></div> -->
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
      margin: "10px",
      imargin: 10,
      background_color: 'green',
      border: "1px solid white"
    }
  },
  mounted() {
    console.log('MOUNTED');

    // build the field
    // compute the scaled height, width and border
    var w = this.iwidth * this.scale;
    var h = this.iheight * this.scale;
    this.width = w.toString() + 'px';
    this.height = h.toString() + 'px';
    this.border = this.scale.toString() + "px solid white";

    var ticksize = 10;
    var ticktop = [ 0, 0, 0, 0 ];
    ticktop[0] = this.imargin;
    ticktop[1] = h / 3;
    ticktop[2] = ticktop[1] * 2;
    ticktop[3] = this.imargin + h - ticksize + 1;

    // compute x coordinate for visitor goal line.  that's 30 feet (10 yards)
    // times the scale plus the margin
    var x = this.imargin + 30 * this.scale;

    // get the field
    var field = document.getElementById('field');

    // draw the yard and goal lines, every 10 yards
    for(var i=0; i<=10; i++) {
      var yardline = document.createElement('div');
      yardline.style.borderLeft='medium solid';
      yardline.style.position='absolute';
      yardline.style.left = x.toString() + 'px';
      yardline.style.height = this.height;
      yardline.style.border = '1px solid white';
      field.appendChild(yardline);

      x = x + 30 * this.scale;
    }

    // draw the tick marks
    x = this.imargin + 30 * this.scale;
    for(var i=0; i<=100; i++) {
      for(var j=0; j<4; j++) {
        var yardline = document.createElement('div');
        yardline.style.borderLeft='medium solid';
        yardline.style.position='absolute';
        yardline.style.left = x.toString() + 'px';
        yardline.style.top = ticktop[j].toString() + 'px';
        yardline.style.height = ticksize.toString() + "px";
        yardline.style.border = '1px solid white';
        field.appendChild(yardline);
      }

      x = x + 3 * this.scale;
    }

  } // mounted
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
