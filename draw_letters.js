/* these are optional special variables which will change the system */
var systemBackgroundColor = "#b8ffc3";
var systemLineColor = "#000090";
var systemBoxColor = "#999999";

/* internal constants */
const MainColour  = "#63db75";
const blockedColour  = "#b8ffc3";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  push();
 // noStroke();
  let boxCenterX = 50;
  let boxCenterY = 100;
  
  // determine parameters for second circle
  let pos2x = boxCenterX + letterData["offsetx"];
  let pos2y = boxCenterY + letterData["offsety"]; 
  let pos3x = boxCenterX + letterData["arcX"];
  let pos3y = boxCenterY + letterData["arcY"];

  rectMode(CENTER);
   // draw two circles
  fill(MainColour);
  rect(boxCenterX,boxCenterY, 100, 100, 30);
  fill(blockedColour);
  ellipse(pos2x, pos2y, 20, 20);
  arc(pos3x, pos3y, letterData["arcW"],letterData["arcH"], radians(letterData["arcStart"]), radians(letterData["arcStop"]) )
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
