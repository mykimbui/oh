const drawingButton = document.querySelector('.drawing')
const drawingImage = document.querySelector('.drawing-img')


drawingButton.addEventListener('click', function() {
  if (drawingImage.style.display === "none") {
    drawingImage.style.display = "block";
  }
  else {
   drawingImage.style.display = "none";
  }
})
