function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);  
  

}


function draw() {
  x = random(0,750); // circle random
  y = random(0,1000);
  
  
  let size = random(0, 10);
    fill(random(255), random(255), random(255));
  rect(x, y, 5 , 20);  //rectangle random
 
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    var r = random(1,20);
    ellipse(mouseX, mouseY, r, r);
}
}
