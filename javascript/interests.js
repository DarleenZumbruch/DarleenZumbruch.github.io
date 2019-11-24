var music = ["Rolling Stones","The Talking Heads","Lou Reed", "Iggy Pop", "Pixies", "Nick Cave"];
var books = ["Consider the Lobster","The Corrections", "The Last Place on Earth", "On Beauty"];
var designers = ["Tibor Kalman", "James Victore"];
var words = ["Design", "Happy", "Logo", "Passion", "Brilliant", "Love"];

var all = music.concat(books, designers, words);

var points;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    colorMode(HSB);

    init();
}

function init(){

    points = [];
    for(var i = 0; i < all.length; i++){
        var vectorPosition = createVector(random(width), random(height));
        var sizeWidth = 250;
        var sizeHeight = sizeWidth * 0.4;
        var word = all[i];
        var background = color(150, 90, 70);

        let graphics = createGraphics(sizeWidth, sizeHeight);
        graphics.fill(255,255,255);
        graphics.noStroke();
        graphics.textSize(20);
        graphics.textAlign(CENTER, CENTER);
        graphics.text(all[i], graphics.width / 2, graphics.height / 2);

        if (music.includes(word) === true) {
            var background = color(180, 90, 70);
        } else if (books.includes(word) === true) {
            var background = color(210, 90, 70);
            var sizeWidth = 200;
            var sizeHeight = sizeWidth * 0.4;
        }  else if (designers.includes(word) === true) {
            var background = color(240, 90, 70);
            var sizeWidth = 150;
            var sizeHeight = sizeWidth * 0.4;
        } else {
            var background = color(270, 90, 70);
        }

        points.push({
            pos: vectorPosition,
            background: background,
            sizeWidth: sizeWidth,
            sizeHeight: sizeHeight,
            text: graphics
        });
    }
}

function draw() {

    for(var i = 0; i < points.length; i++){
        fill(points[i].background);
        rect(points[i].pos.x, points[i].pos.y, points[i].sizeWidth, points[i].sizeHeight, 20);
        image(points[i].text, points[i].pos.x, points[i].pos.y, points[i].sizeWidth, points[i].sizeHeight);
    }

    noLoop();
}