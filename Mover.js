class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m;
    this.c = color(random(100,200), random(150,180), random(200,230));

  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.m);
  }

  attract(aPos) {
    let f = p5.Vector.sub(aPos, this.pos);

    f.limit(2);
    this.applyForce(f);
  }

  repel(aPos) {
    let f = p5.Vector.sub(this.pos, aPos);

    f.limit(2);
    this.applyForce(f);
  }

  drawOn(c) {
    c.fill(this.c);
    c.noStroke();
    c.circle(this.pos.x, this.pos.y, this.vel.mag()*5);
  }
}
