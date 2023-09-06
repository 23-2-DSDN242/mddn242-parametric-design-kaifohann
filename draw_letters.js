/* these are optional special variables which will change the system */
//var systemBackgroundColor = "#b8ffc3";
var systemBackgroundColor = "#FFFFFF";
var systemLineColor = "#000090";
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
  //let pos3x = letterData["arcX"];
  //let pos3y =  letterData["arcY"];

  let testx = boxCenterX + letterData["testx"];
  let testy = boxCenterY + letterData["testy"]; 


  let arcW = letterData["arcW"];
  let arcH = letterData["arcH"];
  let arcStart = letterData["arcStart"];
  let arcStop = letterData["arcStop"]
  let ellipStartSize = 20;

  
   // draw two circles
  //fill(MainColour); //dark green
  
  angleMode(DEGREES);
  push();
  blendMode(MULTIPLY);
  rectMode(CENTER);

  //set up base shapes
  fill(255,255,0, 230); //yellow
  rect(boxCenterX,boxCenterY, 100, 100, 30);

  fill(0,255,255, 230); //cyan
  rect(boxCenterX-5,boxCenterY+10, 100, 100, 30);

  fill(255,0,255,230); //magenta
  rect(boxCenterX+5,boxCenterY+5, 100, 100, 30);

  //black outline
  strokeWeight(1);
  stroke(color(57, 92, 64));
  noFill();
  rect(boxCenterX-5, boxCenterY-5, 100, 100, 30);

  //fill(blockedColour);

  pop(); //pop rectmode and blendmode

  

  //strokeWeight(1);
  //stroke(color('black'));
  //noFill();
  //ellipse(pos2x-5, pos2y-5, ellipStartSize, ellipStartSize);

  noStroke();
  fill('white');
  ellipse(pos2x, pos2y, ellipStartSize, ellipStartSize);


  //fill(blockedColour);
  fill('red');
  
  arc(testx, testy, arcW, arcH, arcStart, arcStop);

  //for (i=0; i <= 10; i++) {
   // noFill();
    //ellipStartSize+=15;
   // arcW+=15;
    //arcH+=15;

    //ellipse(pos2x, pos2y, ellipStartSize, ellipStartSize);
    
   // arc(pos3x, pos3y, arcW, arcH, arcStart, arcStop);

  //}
  
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
  //new_letter["arcStart"] = map(percent, 90, 100, 373, newObj["arcStart"]);
  //new_letter["arcStop"] = map(percent, 90, 100, 0, newObj["arcStop"]);
  
  if (percent < 80) {
    new_letter["arcStart"] = map(percent, 0, 79, oldObj["arcStart"],373);
    new_letter["arcStop"] = map(percent, 0, 79, oldObj["arcStop"], 0);

  } else if (percent >= 80 && percent <= 89){
    new_letter["arcStart"] = 366;//373
    new_letter["arcStop"] = 0;
  
  } else if (percent >= 90 && percent <= 100) {
    new_letter["arcStart"] = map(percent, 90, 100, 366, newObj["arcStart"]);
    new_letter["arcStop"] = map(percent, 90, 100, 0, newObj["arcStop"]);
  }
  
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
