const minMouseDist = 150;
const minDist = 10;

let colors, points, center, maxRadius;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    center = createVector(width/2, height/2);
    maxRadius = min(center.x, center.y) * 0.9;

    colors = [color("#581845"), color("#900C3F"), color("#C70039"), color("#FF5733"), color("#FFC30F")];

    init();
}

function init(){
    let emojiArr = [];
    for (let i = 128512; i < 128592; i++) {
        emojiArr.push(String.fromCodePoint(i));
    }
    for (let i = 127744; i < 128318; i++) {
        emojiArr.push(String.fromCodePoint(i));
    }

    points = [];
    let total = map(min(width, height), 200, 1080, 20, 200);
    for(let i = 0; i < total; i++){
        let v = createVector(random(width), random(height));
        let size = pow(random(), 5) * 30 + 30;

        let emoji = emojiArr.splice(floor(random(emojiArr.length)), 1);

        let graphics = createGraphics(size, size);
        graphics.fill(255);
        graphics.noStroke();
        graphics.textSize(graphics.width * 0.5);
        graphics.textAlign(CENTER, CENTER);
        graphics.text(emoji, graphics.width / 2, graphics.height / 2);

        points.push({
            dest: v,
            pos: v.copy(),
            color: colors[floor(random(colors.length))],
            size: size,
            emoji: graphics
        });
    }
}

function draw() {
    background("#1a0633");

    let mouse = createVector(mouseX, mouseY);

    //update
    for(let i = 0; i < points.length; i++){
        let d1 = points[i].dest;
        let s1 = points[i].size;

        //distance from mouse
        if(d1.dist(mouse) < minMouseDist){
            let a = atan2(d1.y - mouse.y, d1.x - mouse.x);
            d1.x = mouse.x + cos(a) * minMouseDist;
            d1.y = mouse.y + sin(a) * minMouseDist;
        }

        //distance from others
        for(let j = 0; j < points.length; j++){
            if(i == j) continue;
            let d2 = points[j].dest;
            let r = (s1 + points[j].size) * 0.5;
            if(d1.dist(d2) < minDist + r){
                let a = atan2(d2.y - d1.y, d2.x - d1.x);
                d2.x = d1.x + cos(a) * (minDist + r + 2);
                d2.y = d1.y + sin(a) * (minDist + r + 2);
            }
        }

        //circular constrain
        if(d1.dist(center) > maxRadius){
            let a = atan2(d1.y - center.y, d1.x - center.x);
            d1.x = center.x + cos(a) * (maxRadius - s1);
            d1.y = center.y + sin(a) * (maxRadius - s1);
        }

        //smooth
        points[i].pos.x += (d1.x - points[i].pos.x) * 0.09;
        points[i].pos.y += (d1.y - points[i].pos.y) * 0.09;
    }

    //draw
    for(let i = 0; i < points.length; i++){
        fill(points[i].color);
        ellipse(points[i].pos.x, points[i].pos.y, points[i].size, points[i].size);
        image(points[i].emoji, points[i].pos.x - points[i].size/2, points[i].pos.y - points[i].size/2, points[i].size, points[i].size);
    }
}

function mousePressed(){
    init();
}





