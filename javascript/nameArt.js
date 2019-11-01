var profileName = 'Stefan Sagmeister';
var textWelcome = 'Hello ' + profileName + '!';

var typeface;
var textToPoints;

function preload(){
    typeface = loadFont('font/Barlow-SemiBold.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(100)
;
    document.getElementById("TextWelcomePlaceholder").innerHTML = textWelcome;
    x = width/2 - TextWelcomePlaceholder.clientWidth/2;
    y = height/2 - TextWelcomePlaceholder.clientHeight/2;

    textToPoints = typeface.textToPoints(textWelcome, x, y, 80,{
        sampleFactor: 0.25
    });

    letter = new Letter(windowWidth/2, 0, random(5,10));
    letter.RandomLetter();
}

function draw() {
    background(255);

    //points as outline
    for(var i =0; i< textToPoints.length; i++){
        fill(0);
        ellipse(textToPoints[i].x, textToPoints[i].y, 1,1);
    }

    letter.render();
}

function Letter(x,y, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switch = round(random(20,50));

    this.RandomLetter = function() {
        if (frameCount % this.switch === 0) {
            this.value = String.fromCharCode(
                0x00 + round(random(65,90))
            );
        }
    };

    this.render = function () {
        fill(0);
        text(this.value, this.x, this.y);
        this.rain();
        this.RandomLetter();
    };

    this.rain = function () {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    };
}