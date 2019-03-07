 class Gota {
  constructor() {
    this.x1 = random(0, width);
    this.y1 = random(0, height);
    this.l = 30;
    this.vel = 5;
  }
  mostrar() {
    stroke(80,160,200);
    line(this.x1, this.y1, this.x1, this.y1 + this.l);
  }

  caer() {
    this.y1 = this.y1 + this.vel;
  }

  salir() {
    var res;
    if (this.y1 > height) {
      res = true;
    } else {
      res = false
    }
    return res;
  }

  retornar() {
    this.y1 = -this.l;
  }
}




var gotas = [];

function setup() {
  createCanvas(400, 400);
 for(var i = 0; i < 100; i++){
  gotas[i] = new Gota();
 }
}

function draw() {
  background(220);
  
  for(var i = 0; i < 100; i++){
    gotas[i].mostrar();
  gotas[i].caer();
    if(gotas[i].salir()){
  gotas[i].retornar();
  }
  }
}
