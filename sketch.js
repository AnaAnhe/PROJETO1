function setup() {
  createCanvas(1000, 850);
  background("rgb(236,150,165)");
}

function draw() {

  fill("rgb(151,54,214)");
  stroke("white")
  if (mouseIsPressed)
    circle(mouseX,mouseY,55,155);
}
