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

    init();
}

function init(){

    points = [];
    for(var i = 0; i < all.length; i++){
        //var word = all[i];
        var v = createVector(random(width), random(height));
        var sizeWidth = random(250,350);
        var sizeHeight = sizeWidth * 0.4;

        let graphics = createGraphics(sizeWidth, sizeHeight);
        graphics.fill(255,0,255);
        graphics.noStroke();
        graphics.textSize(20);
        graphics.textAlign(CENTER, CENTER);
        graphics.text(all[i], graphics.width / 2, graphics.height / 2);

        points.push({
            pos: v,
            color: 255,
            sizeWidth: sizeWidth,
            sizeHeight: sizeHeight,
            text: graphics
        });
    }
}

function draw() {
    fill(255);

    for(var i = 0; i < points.length; i++){
        rect(points[i].pos.x, points[i].pos.y, points[i].sizeWidth, points[i].sizeHeight, 20);
        image(points[i].text, points[i].pos.x, points[i].pos.y, points[i].sizeWidth, points[i].sizeHeight);
    }

    noLoop();
}