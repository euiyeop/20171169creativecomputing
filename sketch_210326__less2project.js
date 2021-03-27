function setup() {
  createCanvas(1500, 1000);
  background(0);  
  

}


function draw() {
  x = random(0,1000); // circle random
  y = random(0,1000);
  var r = random(1,10);
  fill(random(255), random(255), random(255));
  ellipse(x, y, r, r);
  
  let size = random(0, 10);
    fill(random(255), random(255), random(255));
  rect(x, y, 5 , 20);  //rectangle random
 
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    triangle(600, 550, 750, 250, 900, 550 );
}
}
