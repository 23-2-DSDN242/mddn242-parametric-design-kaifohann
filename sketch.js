const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {

  "offsetx": 0,
  "offsety": -30,
  "arcX": 0,
  "arcY": 115,
  "arcW": 120,
  "arcH": 190,
  "arcStart": 180,
  "arcStop": 0
}

const letterB = {
 
  "offsetx": 0,
  "offsety": 45,
  "arcX": 110,
  "arcY": -130,
  "arcW": 300,
  "arcH": 300,
  "arcStart": 90,
  "arcStop": 180
}

const letterC = {

  "offsetx": 40,
  "offsety": 0,
  "arcX": 90,
  "arcY": 0,
  "arcW": 150,
  "arcH": 150,
  "arcStart": 0,
  "arcStop": 360
}

const backgroundColor  = "#b8ffc3";

const MainColour  = "#63db75";
const blockedColour  = "#b8ffc3";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"]; 
  let pos3x = posx + letterData["arcX"];
  let pos3y = posy + letterData["arcY"];

  rectMode(CENTER);
  // draw two circles
  fill(MainColour);
  rect(posx, posy, 200, 200, 30);
  fill(blockedColour);
  ellipse(pos2x, pos2y, 30, 30);
  arc(pos3x, pos3y, letterData["arcW"],letterData["arcH"], radians(letterData["arcStart"]), radians(letterData["arcStop"]) )
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
