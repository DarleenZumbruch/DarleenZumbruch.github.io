var img = [];
var imageIndex = 0;

function preload(){
    for (i = 0; i < 13; i++) {
        img[i] = loadImage("../images/post_" + i + ".jpg");
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    imageMode(CENTER);
    frameRate(2);
}

function draw() {
    image(img[imageIndex], random(300,window.innerWidth-300), random(300,window.innerHeight-300), 600, 600);

    imageIndex ++;

    if (imageIndex >= img.length) {
        imageIndex = 0;
    }
}

function mousePressed() {
    noLoop()
}

function mouseReleased() {
    loop()
}


