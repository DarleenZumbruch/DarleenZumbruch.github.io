var profileName = 'Stefan Sagmeister';
var textWelcome = 'Welcome \n' + profileName;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    textSize(80);
    textAlign(CENTER, CENTER);
}

function draw() {
    text(textWelcome, 0, 0, window.innerWidth, window.innerHeight - 200);
    noLoop();
}