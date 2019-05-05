document.addEventListener("DOMContentLoaded", function() {

  const drawingButton = document.querySelector('.drawing')
  const drawingImage = document.querySelector('.drawing-img')
  console.log('hkj')

  drawingButton.addEventListener('click', function() {
    console.log(this)
    event.preventDefault()
    if (drawingImage.style.display === "none") {
      drawingImage.style.display = "block";
      setTimeout(function(){
      drawingImage.style.display = "none";
      }, 4000);
    }
    else {
     drawingImage.style.display = "none";
   }
 })
})

