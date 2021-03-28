function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);  
  

}

function draw() {
  
 
  if (mouseIsPressed)  {
    
    if (key == '1') {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    var t = random(0, 50);
    line(mouseX, mouseY, mouseX + t, mouseY + t); } // line 1
    
    if (key == '5') {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    var t = random(0, 50);
    line(mouseX - t, mouseY - t, mouseX, mouseY); } //line 2
    
    if (key == '2') {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    var h = random(1,50);
    ellipse(mouseX, mouseY, h, h); } // ellipse
    
    if (key == '3') {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    var a = random(0, 100);
    var b = random(0, 100);
    var r = random(5, 50);
    var y = random(1, 35);
    triangle(mouseX, mouseY, mouseX+r, mouseY+y , mouseX+a, mouseY+b); } // triangle 
    
    if (key == '4') {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    var r = random(5, 50);
    var y = random(1, 35);
    rect(mouseX, mouseY, r, r); } // rectangle
       
    if (key == 'e') {
    fill(255);
    noStroke();
    var h = random(1,50);
    ellipse(mouseX, mouseY, h, h); } // eraser white
  }

}
function keyTyped() {
    if (key === 'r') {
    background(random(255), random(255), random(255)); } // random color
   

}