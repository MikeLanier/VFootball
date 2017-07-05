<template>
    <div class="field-panel black-border lightgreen-background">
      <div id="field"
           :style="{'width': width, 
                    'height': height, 
                    'margin':margin, 
                    'background-color':background_color, 
                    'border': border}">
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
      linetomake: null,
	  ball: null,
	  ball_height: 0,
	  ball_width: 0
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

	var y = h / 2;

	var xx = new Array(5);
	var yy = new Array(5);

	this.ball_height = 8 * this.scale;
	this.ball_width = 5 * this.scale;
	x -= this.ball_width;
	this.ball = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	this.ball.style.position="absolute";
	this.ball.style.left = x.toString() + "px";
	this.ball.style.top = y.toString() + "px";
	this.ball.style.width = this.ball_width.toString() + "px";
	this.ball.style.height = this.ball_height.toString() + "px";
	this.ball.style.zIndex = "1";
	// this.ball.style.backgroundColor = "orange";
	// this.ball.style.border = "1px solid black";
	this.ball.style.transform = 'rotate(180deg)';
	field.appendChild(this.ball);

	xx[0] = 0;
	yy[0] = this.ball_height / 2;
	xx[1] = this.ball_width;
	yy[1] = this.ball_height;
	xx[2] = this.ball_width;
	yy[2] = 0;
	xx[3] = 0;
	yy[3] = this.ball_height / 2;

	console.log('[0]: ' + xx[0].toString() + ', ' + yy[0].toString());
	console.log('[1]: ' + xx[1].toString() + ', ' + yy[1].toString());
	console.log('[2]: ' + xx[2].toString() + ', ' + yy[2].toString());
	console.log('[3]: ' + xx[3].toString() + ', ' + yy[3].toString());

	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d',	"M" + xx[0].toString() + " " + yy[0].toString() + " " +
							"L" + xx[1].toString() + " " + yy[1].toString() + " " +
							"L" + xx[2].toString() + " " + yy[2].toString() + " " +
							"L" + xx[3].toString() + " " + yy[3].toString() + " " +
							"Z" );
	path.setAttribute('stroke', "black");
	path.setAttribute('stroke-width', "1px");
	path.setAttribute('fill', "brown");
	this.ball.appendChild(path);


  }, // mounted
  watch: {
    'gamedata.togo': function() {
        console.log('field: gamedata.togo: ' + this.gamedata.togo)
    },
    'gamedata.yardline': function() {
      console.log('field: gamedata.yardline: ' + this.gamedata.yardline)
      this.set_lineofscrimmage();
      this.set_linetomake();
    },
    'gamedata.offense': function() {
      console.log('field: gamedata.offense: ' + this.gamedata.offense)
      this.set_lineofscrimmage();
      this.set_linetomake();
    },
    'gamedata.defense': function() {
        console.log('field: gamedata.defense: ' + this.gamedata.defense)
    }
  },
  methods: {
    set_lineofscrimmage() {
      var x = this.imargin + 30 * this.scale;
      if(this.gamedata.offense == 0) {
        x = x + (100 - this.gamedata.yardline) * this.scale * 3;
		var x2 = x - this.ball_width;
		this.ball.style.transform = 'rotate(180deg)';
		this.ball.style.left = x2.toString() + 'px';
      }
      else {
        x = x + (this.gamedata.yardline) * this.scale * 3;
		this.ball.style.transform = 'rotate(0deg)';
		this.ball.style.left = x.toString() + 'px';
      }
      this.lineofscrimmage.style.left = x.toString() + 'px';
    },
    set_linetomake() {
      var linetomake = this.gamedata.yardline - this.gamedata.togo;
      var x = this.imargin + 30 * this.scale;
      if(this.gamedata.offense == 0) {
        x = x + (100 - linetomake) * this.scale * 3;
      }
      else {
        x = x + (linetomake) * this.scale * 3;
      }
      this.linetomake.style.left = x.toString() + 'px';
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
