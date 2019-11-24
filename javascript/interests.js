var music = ["Rolling Stones","The Talking Heads","Lou Reed", "Iggy Pop", "Pixies", "Nick Cave"];
var books = ["Consider the Lobster","The Corrections","Edward de Bono’s Thinking Course", "The Last Place on Earth", "On Beauty"];
var designers = ["Tibor Kalman", "James Victore"];
var words = ["Design", "Happy", "Logo", "Passion", "Brilliant", "Love"];

var wordIndex = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    fill(255);
    text(music[wordIndex], random(windowWidth), random(windowHeight))

    wordIndex ++;
}