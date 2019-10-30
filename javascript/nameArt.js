var profileName = 'Stefan Sagmeister';
var textWelcome = 'Welcome \n' + profileName;

var typeface;
var textToPoints;

function preload(){
    typeface = loadFont('font/Barlow-SemiBold.otf');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    textToPoints = typeface.textToPoints(textWelcome, window.innerWidth/5, window.innerHeight/2, 80,{
        sampleFactor: 0.25,
        simplifyThreshold: 0
    });
}

function draw() {

    //points as outline
    for(var i =0; i< textToPoints.length; i++){
        fill(0);
        ellipse(textToPoints[i].x, textToPoints[i].y, 2,2);
    }
}