var music = ["Rolling \nStones","Talking \nHeads","Lou Reed", "Iggy Pop", "Pixies", "Nick Cave"];
var books = ["Consider \nthe Lobster","The \nCorrections", "Last Place \non Earth", "On Beauty"];
var designers = ["Tibor \nKalman", "James \nVictore"];
var words = ["Design", "Happy", "Logo", "Passion", "Brilliant", "Love"];

var all = music.concat(books, designers, words);

const minMouseDist = 200;
const minDist = 100;

let points, maxRadius, center;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    center = createVector(width/2, height/2);
    maxRadius = min(windowHeight - 600, windowHeight - 600);

    init();
}

function init(){
    points = [];
    for(var i = 0; i < all.length; i++){
        var vectorPosition = createVector(random(width), random(height));
        var size = 100;

        var word = all[i];
        var background = color(0,0,0);

        var text = createGraphics(size, size);
        text.fill(255,255,255);
        text.noStroke();
        text.textSize(16);
        text.textAlign(CENTER, CENTER);
        text.text(all[i], text.width / 2, text.height / 2);

        if (music.includes(word) === true) {
            background = color(191, 33, 62);
        } else if (books.includes(word) === true) {
            background = color(242, 159, 5);
        } else if (designers.includes(word) === true) {
            background = color(242, 113, 39);
        } else {
            background = color(242, 61, 61);
        }

        points.push({
            dest: vectorPosition,
            pos: vectorPosition.copy(),
            background: background,
            size: size,
            text: text
        });
    }
}

function draw() {
    background(0);

    let mouse = createVector(mouseX, mouseY);

    for(var i = 0; i < points.length; i++){
        var d1 = points[i].dest;
        var s1 = points[i].size;

        //distance from mouse
        if(d1.dist(mouse) < minMouseDist){
            let a = atan2(d1.y - mouse.y, d1.x - mouse.x);
            d1.x = mouse.x + cos(a) * minMouseDist;
            d1.y = mouse.y + sin(a) * minMouseDist;
        }

        //distance to others
        for(var j = 0; j < points.length; j++){
            if(i === j) continue;
            var d2 = points[j].dest;
            var r = (s1 + points[j].size) * 0.2;
            if(d1.dist(d2) < minDist + r){
                var a = atan2(d2.y - d1.y, d2.x - d1.x);
                d2.x = d1.x + cos(a) * (minDist + r + 2);
                d2.y = d1.y + sin(a) * (minDist + r + 2);
            }
        }

        //circle restriction
        if(d1.dist(center) > maxRadius){
            var a = atan2(d1.y - center.y, d1.x - center.x);
            d1.x = center.x + cos(a) * (maxRadius - s1);
            d1.y = center.y + sin(a) * (maxRadius - s1);
        }

        points[i].pos.x += (d1.x - points[i].pos.x) * 0.09;
        points[i].pos.y += (d1.y - points[i].pos.y) * 0.09;
    }

    //show points
    for(var i = 0; i < points.length; i++){
        fill(points[i].background);
        ellipse(points[i].pos.x, points[i].pos.y, points[i].size, points[i].size);
        image(points[i].text, points[i].pos.x - points[i].size/2, points[i].pos.y - points[i].size/2, points[i].size, points[i].size);
    }
}

function mousePressed(){
    init();
}

function keyPressed() {
    if (keyCode === 77) {
        all = music;
        init();
    } else if (keyCode === 65) {
        all = music.concat(books, designers, words);
        init();
    } else if (keyCode === 66) {
        all = books;
        init();
    } else if (keyCode === 68) {
        all = designers;
        init();
    } else if (keyCode === 87) {
        all = words;
        init();
    }
}
