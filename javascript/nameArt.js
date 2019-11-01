var profileName = 'Stefan Sagmeister';
var textWelcome = 'Hello ' + profileName + '!';

var typeface;
var textToPoints;

var fontSize = 20;
var streams = [];
var fadeInterval = 1;


function preload(){
    typeface = loadFont('font/Barlow-SemiBold.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(fontSize)
;
    document.getElementById("TextWelcomePlaceholder").innerHTML = textWelcome;
    x = width/2 - TextWelcomePlaceholder.clientWidth/2;
    y = height/2 - TextWelcomePlaceholder.clientHeight/2;

    textToPoints = typeface.textToPoints(textWelcome, x, y, 80,{
        sampleFactor: 0.25
    });

    var xstream = 0;
    for (var i = 0; i <= width/fontSize; i++){
        var stream = new Stream();
        stream.generateLetters(xstream, random(-800, 0));
        streams.push(stream);
        xstream += fontSize;
    }
}

function draw() {
    background(255, 200);

    //points as outline
    for(var i = 0; i< textToPoints.length; i++){
        fill(0);
        ellipse(textToPoints[i].x, textToPoints[i].y, 1,1);
    }

    streams.forEach(function(stream) {
        stream.render();
    });
}

function Letter(x,y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switch = round(random(2,25));
    this.first = first;
    this.opacity = opacity;

    this.RandomLetter = function() {
        if (frameCount % this.switch === 0) {
            this.value = String.fromCharCode(
                0x00 + round(random(65,90))
            );
        }
    };

    this.rain = function () {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    };
}

function Stream() {
    this.letters = [];
    this.totalLetters = round(random(10,35));
    this.speed = random(5, 20);

    this.generateLetters = function(x,y) {
        var opacity = 255;
        var first = round(random(0, 4)) === 1;
        for(var i = 0; i <= this.totalLetters; i++) {
            letter = new Letter(x, y, this.speed, first, opacity);
            letter.RandomLetter();
            this.letters.push(letter);
            opacity -= (255 / this.totalLetters) / fadeInterval;
            y -= fontSize;
            first = false;
        }
    };

    this.render = function() {
        this.letters.forEach(
            function(letter) {
                if (letter.first) {
                    fill(150, 150, 150, letter.opacity);
                } else {
                    fill(0, 0, 0, letter.opacity);
                }
                text(letter.value, letter.x, letter.y);
                letter.rain();
                letter.RandomLetter();
            }
        );
    }
}