let movers = [];
let canvas;

function setup() {
  createCanvas(400, 400);
  canvas = createGraphics(width, height);

  for(let i = 0; i < 5; i++) {
    let mover = new Mover(random(400), random(400), random(5, 50));
    movers.push(mover);
  }
}

function draw() {
  background(240);
  image(canvas, 0, 0);

  for(let i = 0; i < movers.length; i++) {
    let mover = movers[i];
    let mousePos = createVector(mouseX, mouseY);

    mover.update();
    mover.show();
    mover.drawOn(canvas);

    if(mouseIsPressed) {
      mover.attract(mousePos);
    }

    if(keyIsPressed) {
      mover.repel(mousePos);
    }
  }
}
