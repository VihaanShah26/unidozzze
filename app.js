// storing the url's to all the images to be rotated through 
var img_list = ["images/render1.jpeg", "images/render2.jpeg", "images/render3.jpeg", "images/render4.jpeg", "images/render5.jpeg"]

// getting the render container 
var renderContainer = document.querySelector('.render-container')

// Set initial image index
var currentImageIndex = 0;

// Function to change the image
function changeImage() {
  // Increment the image index
  currentImageIndex++;

  // Reset index if it exceeds the number of images
  if (currentImageIndex === img_list.length) {
    currentImageIndex = 0;
  }

  // Set the new image source
  var newImageSrc = img_list[currentImageIndex];
  renderContainer.querySelector('img').src = newImageSrc;
}

// Call the changeImage function every 2 seconds
setInterval(changeImage, 2000);