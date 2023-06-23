function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();

  /*
  for(let i = particles.length; i >= 0; i--) {
    particles[i].move();
    particles[i].draw();
    if(!particles[i].lifetime())
      particles.splice(i, 1);
  }
  */
  particles.forEach((particle, index) => {
    particle.move();
    particle.draw();
    if(!particle.check_lifetime()) {
      delparticles.push(index);
    }
  });
  delparticles.sort(function(a, b){return b-a});
  delparticles.forEach(index => {
    delete particles[index];
    particles.splice(index, 1);
  });
  delparticles = [];
}

function mousePressed() {
  confetti();
}

function confetti() {
  for(let i = 0; i < 10; i++) {
    particles.push(new Particle());
  }
}

delparticles = [];
particles = [];

class Particle {
  constructor() {
    this.x = mouseX + random(-20, 20);
    this.y = mouseY + random(-20, 20);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.radius = random(10, 20);
    this.lifetime = random(1, 3);
    this.r = random(150, 250);
    this.g = random(50, 100);
    this.b = random(100, 200);
  }

  color() {
    this.r = 0;
    this.g = 255;
    this.b = 0;
  }

  draw() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.radius);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.xSpeed *= .9;
    this.ySpeed += abs(this.ySpeed * .1);
    this.lifetime -= deltaTime / 1000;
  }

  check_lifetime() {
    if(this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight) {
      this.ySpeed = 0;
      return false;
    }
    if(this.lifetime < 0) {
      //console.log(this.lifetime);
      return false;
    }
    return true;
  }
}
