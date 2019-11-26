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

    for (i = 0; i < 13; i++) {
        image(img[i], random(100,window.innerWidth - 100), random(100,window.innerHeight - 100), 600, 600);
    }

}

function draw() {
    image(img[imageIndex], random(100,window.innerWidth - 100), random(100,window.innerHeight - 100), 600, 600);

    imageIndex ++;

    if (imageIndex >= img.length) {
        imageIndex = 0;
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        noLoop();
    } else if (keyCode === RIGHT_ARROW) {
        loop();
    }
}


