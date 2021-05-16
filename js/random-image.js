/*Adapted From: https://www.kirupa.com/html5/displaying_a_random_image.htm*/
function displayRandomImage() {
var imagesNum = 3
var image = Math.floor(Math.random()*imagesNum) + 1;

var htmlImage = document.getElementById("random-image");
var imagesDir = 'media\\';
var imagePre = 'etel-adnan-0';
var imagesExt = '.jpg';
htmlImage.src =  imagesDir + imagePre + image + imagesExt;
}

displayRandomImage();
