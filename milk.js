var ctx;
var imgBg;
var imgDrops;
var x = 0;
var y = 0;
var noOfDrops = 50;
var fallingDrops = [];

function draw() {

	for (var i=0; i< noOfDrops; i++)
	{
		ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop

		fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
		if (fallingDrops[i].y > $(document).height()) {  //Repeat the raindrop when it falls out of view
			fallingDrops[i].y = -700 //Account for the image size
			fallingDrops[i].x = Math.random() * $(document).width();    //Make it appear randomly along the width    
		}
	}
}

function setup() {
	var canvas = document.getElementById('canvasRegn');

	if (canvas.getContext) {
		ctx = canvas.getContext('2d');

		setInterval(draw, 36);
		for (var i = 0; i < noOfDrops; i++) {
			var fallingDr = new Object();
			fallingDr["image"] =  new Image();
			fallingDr.image.src = 'images/rain.gif';
			fallingDr["x"] = Math.random() * $(document).width();
			fallingDr["y"] = Math.min(Math.random(), 600) * 10;
			fallingDr["speed"] = 3 + Math.random() * 15;
			fallingDrops.push(fallingDr);
		}
	}
}
setup();