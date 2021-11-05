//saving the buttond and image inside the varaible
const themButton = document.getElementById("themButton");
const themImage = document.getElementById("themImageButton");
//saving the current backgroundcolor and location of image
var themButtonBackground;
var imageButtonLocation;
//when Clicking on the div:
//  0- Check if already value is the same
//  1-move the image to the right
//  2- change background color to dark
//  3- change the image src
themButton.onclick = function () {
  themButtonBackground = themButton.style.backgroundColor;
  imageButtonLocation = themImage.style.marginLeft;
  if (themButtonBackground == "#152238" || imageButtonLocation == "65%") {
    // A- change image  source, location, background of div
    themImage.opacity = 0.5;
    themImage.style.marginLeft = "1%";
    themButton.style.backgroundColor = "#152238";
    themImage.src = "sun.png";
    // B- Change background of the body to white, change card to white, chnage CSS3 to black and description
    document.body.style.backgroundColor = "white";
    document.getElementById("MainContainer").style.backgroundColor = "white";
    document.getElementById("pageIntroductionBrief").style.color = "black";
    document.getElementById("modrenPropSent").style.color = "black";
  } else {
    // A- change image  source, location, background of div
    themImage.opacity = 0.5;
    themImage.style.marginLeft = "65%";
    themButton.style.backgroundColor = "#152238";
    themImage.src = "half-moon.png";
    // B- Change background of the body to dark, change card to white, chnage CSS3 to black and description
    document.body.style.backgroundColor = "#152238";
    themButton.style.backgroundColor = "white   ";
    document.getElementById("MainContainer").style.backgroundColor = "#152238";
    document.getElementById("pageIntroductionBrief").style.color = "white";
    document.getElementById("modrenPropSent").style.color = "white";
  }
};
