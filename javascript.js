var img;

function preload() {
    img = loadImage('images/stefan-sagmeister.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    textFont('Barlow');
    textSize (28);
}

function draw() {
    var x = 0;
    var y = 0;

    while (y < height) {

        push();
        translate(x, y);

        //text position
        text("Stefan Sagmeister ", 0, 0);
        x += textWidth("Stefan Sagmeister ");

        pop();

        //linebreak
        if (x + textWidth("Stefan Sagmeister ") >= width) {
            x = 0;
            y += 30;
        }
    }

    noLoop();
}