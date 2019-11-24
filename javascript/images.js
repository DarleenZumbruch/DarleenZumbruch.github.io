var img = [];

function preload(){
    for (var i = 0; i <15; i++) {
        img[i] = loadImage("../images/post_" + i + ".jpg");
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    imageMode(CENTER);
    frameRate(2);

}

function draw() {
    for (var i = 0; i < 15; i++) {
        image(img[i], random(window.innerWidth), random(window.innerHeight), 500, 500);
    }
}