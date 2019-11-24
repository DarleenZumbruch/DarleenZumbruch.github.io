function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
}

function draw() {
    fill(255);
    ellipse(random(windowWidth), random(windowHeight), 30, 30);
}