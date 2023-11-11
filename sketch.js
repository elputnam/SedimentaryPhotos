//photos taking photos layering photos in 24 hours

let EL;
let dad;
let sign;
let base;
let elderly;
let pregnant;
let colour = 180;

function preload(){
  EL = loadImage('assets/ELDad_Fotos_EL.png');
  dad = loadImage('assets/ELDad_Fotos_Dad.png');
  base = loadImage('assets/ELDad_Fotos_base.png');
  sign = loadImage('assets/ELDad_Fotos_sign.png');
  elderly = loadImage('assets/ELDad_Fotos_Elderly.png');
  pregnant = loadImage('assets/ELDad_Fotos_pregnant.png')
}

function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(7);
}

function draw() {
  background(200);
  push();
  //tint(255, random(70,100));
  image(base, 0, 0, width, height);
  pop();

  //sign
  push();
  tint(255, random(50, 70));
  image(sign, 0, 0, width, height);
  pop();
  blend(sign, 0, 0, sign.width, sign.height, 0, 0, width, height, LIGHTEST);

  //photo layers
  blend(pregnant, 0, 0, pregnant.width, pregnant.height, 0, 0, width, height, DARKEST);
  blend(elderly, 0, 0, elderly.width, elderly.height, 0, 0, width, height, DARKEST);

  //blocks
  for (let i = 0; i < 10; i++){
    noStroke();
    fill(colour, random(100), random(100), random(100));
    rect(random(width), 0, random(100), height);
  }

  //dad
  push();
  //tint(255, random(50, 100));
  dad.filter(GRAY);
  image(dad, 0, 0, width, height);
  pop();

  //EL
  push();
  EL.filter(GRAY);
  tint(colour, 30, 100);
  image(EL, 0, 0, width, height);
 // blend(EL, 0, 0, EL.width, EL.height, 0, 0, EL.width/2, EL.height/2, DARKEST);
  pop();

  if (frameCount%int(random(20))==0){
    colour = random(360);
    dad.filter(INVERT);
    base.filter(INVERT);
  }
}


