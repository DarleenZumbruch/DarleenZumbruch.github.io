var profileName = 'Stefan Sagmeister';
var textWelcome = 'Hello ' + profileName + '!';

var typeface;
var textToPoints;



function preload(){
    typeface = loadFont('font/Barlow-SemiBold.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    textToPoints = typeface.textToPoints(textWelcome, windowWidth/2, windowHeight/2, 80,{
        sampleFactor: 0.25,
        simplifyThreshold: 0
    });
}

function draw() {

    //points as outline
    for(var i =0; i< textToPoints.length; i++){
        fill(0);
        ellipse(textToPoints[i].x, textToPoints[i].y, 1,1);
    }
}