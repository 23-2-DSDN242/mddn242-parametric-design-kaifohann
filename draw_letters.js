/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFF";
var systemLineColor = "#000090";
var systemLineColor = "#000090";
var systemBoxColor = "#999999";



function drawLetter(letterData) {
  
  //Set up variables

  //Define center X and Y position of bounding box. X axis is a parameter so I can change it during interpolation
  let boxCenterX = letterData["boxCenterX"];
  let boxCenterY = 100;
  
  //Define variables for rectangle/square - X + Y position, size, rounding of corners
  //X and Y position are offsets from the center of the bounding box 
  let RectXpos = boxCenterX + letterData["offsetx"];
  let RectYpos = boxCenterY + letterData["offsety"]; 
  let rectSize = letterData["rectSize"];
  let rounding = letterData["CornerRounds"];


  //Define variables for arc - X + Y position, width, height, start + end of arc in degrees
  //X and Y position are offsets from the center of the bounding box
  let arcXpos = boxCenterX + letterData["arcX"];
  let arcYpos = boxCenterY + letterData["arcY"];
  let arcW = letterData["arcW"];
  let arcH = letterData["arcH"];
  let arcStart = letterData["arcStart"];
  let arcStop = letterData["arcStop"]

  //Set up very small stroke weight for base shapes
  stroke("#b8ffc3"); //green
  strokeWeight(0.5)

  push();
  
  //scaled down so letters didn't overlap 
  scale(0.95); 

  //set angle mode to degrees
  angleMode(DEGREES);

  push();
  //set blend mode to multiply and rectangle mode to center
  blendMode(MULTIPLY);
  rectMode(CENTER);

  //set up base rectangles, one in the center and two with slight offsets from center of bounding box
  fill(255, 255, 0, 230); //yellow
  rect(boxCenterX,boxCenterY, 100, 100, 30);

  fill(0,255,255, 230); //cyan
  rect(boxCenterX-5,boxCenterY+10, 100, 100, 30);

  fill(255,0,255,230); //magenta
  rect(boxCenterX+5,boxCenterY+5, 100, 100, 30);

  //pop rectmode and blendmode
  pop(); 

  //draw rectangle and arc ontop of base shapes in white to block out sections of base shape
  noStroke();
  fill('white');

  rect(RectXpos, RectYpos, rectSize, rectSize, rounding);
  arc(arcXpos, arcYpos, arcW, arcH, arcStart, arcStop);

  //pop scale so it doesn't affect the bounding box
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  //maps for rectangle parameters that move from 0 - 100% with no interuptions/editing
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["rectSize"] = map(percent, 0, 100, oldObj["rectSize"], newObj["rectSize"]);
  new_letter["CornerRounds"] = map(percent, 0, 100, oldObj["CornerRounds"], newObj["CornerRounds"]);

  //maps for arc parameters that move from 0 - 100% with no interuptions/editing
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  
  //if percent is below 50%:
  if (percent < 50) {
    //move center of bounding box to 150 - this will move the base rectangle, arc and overlayed rectangle X postion during interpolation to the right
    new_letter["boxCenterX"] = map(percent, 0, 49, oldObj["boxCenterX"], 150);

    //shrink and close arc
    new_letter["arcW"] = map(percent, 0, 49, oldObj["arcW"], 0);
    new_letter["arcH"] = map(percent, 0, 49, oldObj["arcH"], 0);
    new_letter["arcStart"] = map(percent, 0, 49, oldObj["arcStart"], 360);
    new_letter["arcStop"] = map(percent, 0, 49, oldObj["arcStop"], 360);

  //else - the percent is equal to or above 50%:
  } else {
    //move center of bounding box from 150 back to center position - this will move the base rectangle, arc and overlayed rectangle X postion back to the left 
    new_letter["boxCenterX"] = map(percent, 50, 100, 150, newObj["boxCenterX"]);

    //move arc to new obj width, height and 'openess'
    new_letter["arcW"] = map(percent, 50, 100, 0, newObj["arcW"]);
    new_letter["arcH"] = map(percent, 50, 100, 0, newObj["arcH"]);
    new_letter["arcStart"] = map(percent, 50, 100, 360, newObj["arcStart"]);
    new_letter["arcStop"] = map(percent, 50, 100, 360, newObj["arcStop"]);
  }
 
  return new_letter;
}

var swapWords = [
  "SPECTRUM",
  "ABSOLUTE",
  "DEFINITE",
  "COLORFUL",
  "MOVEMENT",
  "BOLDNESS",
  "INFINITE",
  "MINIMISE",
  
]
