var img = [];

function preload(){
    for (var i = 0; i <15; i++) {
        img[i] = loadImage("../images/post_" + i + ".jpg");
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {
    for (var i = 0; i < 15; i++) {
        image(img[i], random(window.innerWidth-500), random(window.innerHeight-500), 500, 500);
    }
}