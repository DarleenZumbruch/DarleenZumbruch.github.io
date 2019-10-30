var profileName = 'Stefan Sagmeister';
var textWelcome = 'Welcome \n' + profileName;

function preload(){
    barlow = loadFont('../font/Barlow-SemiBold.otf');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    textSize(80);
    textAlign(CENTER, CENTER);
}

function draw() {
    text(textWelcome, 0, 0, window.innerWidth, window.innerHeight - 200);
    if (mouseIsPressed) {
        noFill();
        stroke(0, 255, 0);
        rect(mouseX, mouseY, 200, 200);
    }
}