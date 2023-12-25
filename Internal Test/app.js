// Change Image function
function changeImage() {
    var currentImage = document.getElementById("changeImage").src;
    var newImage = currentImage.includes("img1.jpg") ? "img2.jpg" : "img1.jpg";
    document.getElementById("changeImage").src = newImage;
}