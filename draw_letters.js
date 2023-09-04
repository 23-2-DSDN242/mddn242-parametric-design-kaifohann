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
  //push();
  //noStroke();
  stroke("#b8ffc3");
  strokeWeight(0.5)
  let boxCenterX = 50;
  let boxCenterY = 100;
  
  // determine parameters for second circle
  let pos2x = boxCenterX + letterData["offsetx"];
  let pos2y = boxCenterY + letterData["offsety"]; 
  let pos3x = boxCenterX + letterData["arcX"];
  let pos3y = boxCenterY + letterData["arcY"];
  let arcW = letterData["arcW"];
  let arcH = letterData["arcH"];
  let arcStart = letterData["arcStart"];
  let arcStop = letterData["arcStop"]
  let ellipStartSize = 20;

  
   // draw two circles
  fill(MainColour); //dark green

  push();
  rectMode(CENTER);

 
  rect(boxCenterX,boxCenterY, 100, 100, 30);
  fill(blockedColour);

  ellipse(pos2x, pos2y, ellipStartSize, ellipStartSize);

  strokeWeight(1);
  stroke(color(57, 92, 64));
  noFill();
  rect(boxCenterX-5, boxCenterY-5, 100, 100, 30);
  
  pop();

  noStroke();
 
  strokeWeight(1);
  stroke(color(57, 92, 64));
  noFill();
  ellipse(pos2x-5, pos2y-5, ellipStartSize, ellipStartSize);

  //import pic that turns letter into object
  noStroke();
  fill(blockedColour);

  arc(pos3x, pos3y, arcW, arcH, radians(arcStart), radians(arcStop));

  for (i=0; i <= 10; i++) {
    noFill();
    ellipStartSize+=15;
    arcW+=15;
    arcH+=15;
    ellipse(pos2x, pos2y, ellipStartSize, ellipStartSize);
    
    arc(pos3x, pos3y, arcW, arcH, arcStart, arcStop);

  }
  
  //pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcW"] = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["arcH"] = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);
  new_letter["arcStart"] = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcStop"] = map(percent, 0, 100, oldObj["arcStop"], newObj["arcStop"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
