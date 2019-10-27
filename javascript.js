var img;


function preload() {
    img = loadImage('images/stefan-sagmeister.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    image(img, 0, 0, window.innerWidth, window.innerHeight)
}