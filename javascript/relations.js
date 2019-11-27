var particle;
var img;

function preload(){
    img = loadImage("../images/avatar.png");
}

function setup (){
    createCanvas(windowWidth, windowHeight);
    background(0);

    privacyColors = [color('rgb(242, 61, 61)'), color('rgb(75,179,104)'), color('rgb(242, 61, 61)')];

    particleSystem();
}

function particleSystem(){
    particle = [];

    for(var i = 0; i < 100; i++) {
        var location = createVector(random(50,windowWidth-50), random(50, windowHeight-250));
        var radius = random(5, 15);

        particle.push({
            location: location,
            radius: radius,
            Pcol: privacyColors[floor(random(privacyColors.length))]
        });
    }
}

function draw (){
    background(0,);
    fill(255);
    stroke(255);
    strokeWeight(2);

    //Connectors
    stroke(255);
    for (var i = 0; i < 100; i++){
        for (var j = 0; j < 100; j++){
            if (pow (particle[i].location.x - particle[j].location.x,2) + pow(particle[i].location.y-particle[j].location.y,2) < pow(200,2) ){
                fill(255);
                stroke(50) ;
                line(particle[i].location.x,particle[i].location.y,particle[j].location.x,particle[j].location.y);
            }
        }
    }

    //Show Particle
    for(var i = 0; i < 100; i++){
        fill(255,255,255);
        ellipse(particle[i].location.x , particle[i].location.y, particle[i].radius*5, particle[i].radius*5);
        image(img,particle[i].location.x - particle[i].radius*1.5, particle[i].location.y - particle[i].radius*1.5, particle[i].radius*3, particle[i].radius*3);
        strokeWeight(3);
        stroke(particle[i].Pcol);

        particle[i].location.x = (particle[i].location.x + width ) % width;
        particle[i].location.y = (particle[i].location.y + height )% height;
    }
}

function mousePressed(){
    particleSystem();
}

  