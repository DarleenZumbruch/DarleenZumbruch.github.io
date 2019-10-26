let image = new Image();
image.onload = function () {
    document.getElementById("height").innerHTML = ("Image Height: " + this.naturalHeight);
    document.getElementById("width").innerHTML = ("Image Width: " + this.naturalWidth);
};

image.src = "images/portrait.jpg";

document.getElementById("").innerHTML = "New text!";