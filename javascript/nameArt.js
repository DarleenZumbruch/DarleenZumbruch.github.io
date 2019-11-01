var profileName = 'Stefan Sagmeister';
var textWelcome = 'Hello ' + profileName + '!';

var typeface;
var textToPoints;

var fontSize = 20;
var streams = [];


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

    var x = 0;
    var y = 0;
    for (var i = 0; i <= width/fontSize; i++){
        var stream = new Stream();
        stream.generateLetter(x, y);
        streams.push(stream);
        x += fontSize
    }
}

function draw() {
    background(255);

    //points as outline
    for(var i = 0; i< textToPoints.length; i++){
        fill(0);
        ellipse(textToPoints[i].x, textToPoints[i].y, 1,1);
    }

    streams.forEach(function(stream) {
        stream.render();
    });
}

function Letter(x,y, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switch = round(random(5,20));

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
    this.letter = [];
    this.totalLetter = round(random(5,30));
    this.speed = random(1, 5);

    this.generateLetter = function(x,y) {
        for(var i = 0; i <= this.totalLetter; i++) {
            letter = new Letter(x, y, this.speed);
            letter.RandomLetter();
            this.letter.push(letter);
            y -= fontSize;
        }
    };

    this.render = function() {
        this.letter.forEach(function(letter) {
            fill(0);
            text(letter.value, letter.x, letter.y);
            letter.rain();
            letter.RandomLetter();
        });
    }
}