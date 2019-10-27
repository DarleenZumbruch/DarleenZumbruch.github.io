var img;
var profileName = 'Stefan Sagmeister';

function preload() {
    img = loadImage('images/stefan-sagmeister.jpg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    textFont('Barlow');
}

function draw() {
    var x = 0;
    var y = 0;
    var lettercounter = 0;

    while (y < height) {

        img.loadPixels();

        //translate display width to image width
        var imgX = round(map(x, 0, width, 0, img.width));
        var imgY = round(map(y, 0, height, 0, img.height));

        // get colour and calculate greytone
        var colour = color(img.get(imgX,imgY));
        var greytone = round(red(colour) + green(colour) + blue(colour));

        push();
        translate(x, y);
        fill(colour);


        if (false) {
            textSize(20);

        } else {

            //translate greytone to fontsize
            var fontSize = map(greytone, 0, 255, 20, 8);
            fontSize = max(fontSize, 8);
            textSize(fontSize);
        }

        //set letters instead of string to enable different fontsizes per letter
        var letter = profileName.charAt(lettercounter);
        text(letter, 0, 0);
        var letterWidth = textWidth(letter);
        x += letterWidth;

        pop();

        //linebreak
        if (x + letterWidth >= width) {
            x = 0;
            y += 14;
        }

        //start again to count from null at the end of the string
        lettercounter++;
        if (lettercounter >= profileName.length) {
            lettercounter = 0;
        }
    }

    noLoop();
}