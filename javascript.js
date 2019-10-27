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

        img.loadPixels();
        var colour = color(img.get(x,y));
        var greytone = round(red(colour) + green(colour) + blue(colour));

        push();
        translate(x, y);

        if (false) {
            textSize(28);
        } else {
            var fontSize = map(greytone, 0, 255, 28, 10);
            textSize(fontSize);
        }

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