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
  props: [ 'gamedata' ],
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
      border: "1px solid white",
      lineofscrimmage: null,
      linetomake: null
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

    var hashsize = 10;
    var hashtop = [ 0, 0, 0, 0 ];
    hashtop[0] = this.imargin;
    hashtop[1] = h / 3;
    hashtop[2] = hashtop[1] * 2;
    hashtop[3] = this.imargin + h - hashsize + 1;

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

    // draw the hash marks
    x = this.imargin + 30 * this.scale;
    for(var i=0; i<=100; i++) {
      for(var j=0; j<4; j++) {
        var hashmark = document.createElement('div');
        hashmark.style.borderLeft='medium solid';
        hashmark.style.position='absolute';
        hashmark.style.left = x.toString() + 'px';
        hashmark.style.top = hashtop[j].toString() + 'px';
        hashmark.style.height = hashsize.toString() + "px";
        hashmark.style.border = '1px solid white';
        field.appendChild(hashmark);
      }

      x = x + 3 * this.scale;
    }

    var fontSize = this.scale * 75;

    var yardnumbers = [ '', 'G', '1', '0', '2', '0', '3', '0', '4', '0', '5', '0', '4', '0', '3', '0', '2', '0', '1', '0', 'G', '' ];
    var iboxsize = 15 * this.scale;
    var boxsize = iboxsize.toString() + 'px';
    x = this.imargin + 30 * this.scale - iboxsize / 2 + 1;

    for(var i=0; i<22; i+=2)
    {
      var yardnumber = document.createElement('div');
      yardnumber.style.position='absolute';
      yardnumber.style.left = x.toString() + 'px';
      yardnumber.style.top = '30px';
      yardnumber.style.height = boxsize;
      yardnumber.style.width = boxsize;
      yardnumber.innerText = yardnumbers[i];
      yardnumber.style.textAlign = 'left';
      yardnumber.style.fontSize = fontSize.toString() + '%';
      yardnumber.style.fontFamily = 'Impact';
      yardnumber.style.color = 'white';
      // yardnumber.style.border = '1px solid white';
      field.appendChild(yardnumber);

      yardnumber = document.createElement('div');
      yardnumber.style.position='absolute';
      yardnumber.style.left = x.toString() + 'px';
      yardnumber.style.top = '30px';
      yardnumber.style.height = boxsize;
      yardnumber.style.width = boxsize;
      yardnumber.innerText = yardnumbers[i+1];
      yardnumber.style.textAlign = 'right';
      yardnumber.style.fontSize = fontSize.toString() + '%';
      yardnumber.style.fontFamily = 'Impact';
      yardnumber.style.color = 'white';
      // yardnumber.style.border = '1px solid white';
      field.appendChild(yardnumber);

      var y = h - 55;

      if(i == 0) {
        yardnumber = document.createElement('div');
        yardnumber.style.position='absolute';
        yardnumber.style.left = x.toString() + 'px';
        yardnumber.style.top = y.toString() + 'px';
        yardnumber.style.height = boxsize;
        yardnumber.style.width = boxsize;
        yardnumber.innerText = yardnumbers[i+1];
        yardnumber.style.textAlign = 'left';
        yardnumber.style.fontSize = fontSize.toString() + '%';
        yardnumber.style.fontFamily = 'Impact';
        yardnumber.style.color = 'white';
        yardnumber.style.transform = 'rotate(180deg)'
        // yardnumber.style.border = '1px solid white';
        field.appendChild(yardnumber);
      }
      else {
        yardnumber = document.createElement('div');
        yardnumber.style.position='absolute';
        yardnumber.style.left = x.toString() + 'px';
        yardnumber.style.top = y.toString() + 'px';
        yardnumber.style.height = boxsize;
        yardnumber.style.width = boxsize;
        yardnumber.innerText = yardnumbers[i];
        yardnumber.style.textAlign = 'left';
        yardnumber.style.fontSize = fontSize.toString() + '%';
        yardnumber.style.fontFamily = 'Impact';
        yardnumber.style.color = 'white';
        yardnumber.style.transform = 'rotate(180deg)'
        // yardnumber.style.border = '1px solid white';
        field.appendChild(yardnumber);

        yardnumber = document.createElement('div');
        yardnumber.style.position='absolute';
        yardnumber.style.left = x.toString() + 'px';
        yardnumber.style.top = y.toString() + 'px';
        yardnumber.style.height = boxsize;
        yardnumber.style.width = boxsize;
        yardnumber.innerText = yardnumbers[i+1];
        yardnumber.style.textAlign = 'right';
        yardnumber.style.fontSize = fontSize.toString() + '%';
        yardnumber.style.fontFamily = 'Impact';
        yardnumber.style.color = 'white';
        yardnumber.style.transform = 'rotate(180deg)'
        // yardnumber.style.border = '1px solid white';
        field.appendChild(yardnumber);
      }

      x = x + 30 * this.scale;
    }

    var x = this.imargin + 30 * this.scale;
    this.lineofscrimmage = document.createElement('div');
    this.lineofscrimmage.style.borderLeft='medium solid';
    this.lineofscrimmage.style.position='absolute';
    this.lineofscrimmage.style.left = x.toString() + 'px';
    this.lineofscrimmage.style.height = this.height;
    this.lineofscrimmage.style.border = '1px solid blue';
    field.appendChild(this.lineofscrimmage);

    this.linetomake = document.createElement('div');
    this.linetomake.style.borderLeft='medium solid';
    this.linetomake.style.position='absolute';
    this.linetomake.style.left = x.toString() + 'px';
    this.linetomake.style.height = this.height;
    this.linetomake.style.border = '1px solid yellow';
    field.appendChild(this.linetomake);

  }, // mounted
  watch: {
    'gamedata.togo': function() {
        console.log('field: gamedata.togo: ' + this.gamedata.togo)
    },
    'gamedata.yardline': function() {
      console.log('field: gamedata.yardline: ' + this.gamedata.yardline)
      var x = this.imargin + 30 * this.scale;
      x = x + (100 - this.gamedata.yardline) * this.scale * 3;
      this.linetomake.style.left = x.toString() + 'px';
    },
    'gamedata.offense': function() {
        console.log('field: gamedata.offense: ' + this.gamedata.offense)
    },
    'gamedata.defense': function() {
        console.log('field: gamedata.defense: ' + this.gamedata.defense)
    }
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
