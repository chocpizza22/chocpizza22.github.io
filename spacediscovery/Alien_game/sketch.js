let dino_image;
let cactus_image;
let cactus; 
let dino;
let calvin_die = [] ;
let soundclassifier;
function preload() {
  const options = { probabilityThreshold: 0.7 };
 classifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);
  dino_image = loadImage("dino.png");
  cactus_image = loadImage("cactus.png");
}
function modelReady() {
  // classify sound
  classifier.classify(gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  // log the result
  console.log(result[0].label);
}
function setup() {
  createCanvas(600, 400);
  dino = new Dino();
  cactus = new Cactus();
}

function draw() {
  background(220);
  if (random(1) < 0.01 ){
   calvin_die.push(new Cactus())
  }
  dino.show();
  dino.move();
  
  for(let item of calvin_die){
    item.move();
  item.show();
  if (dino.hits(item)){
    console.log("SUCKA. WANT TO TRY AGAIN?")
    noLoop();}
  }
}
function keyPressed() {
  if(key == ' ') {
   dino.jump(); 
  }
}