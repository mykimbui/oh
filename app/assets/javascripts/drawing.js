// document.addEventListener("DOMContentLoaded", function(){
document.addEventListener("turbolinks:load", function() {
  console.log('hhi')
  const drawingButton = document.querySelector('.drawing')
  const drawingImage = document.querySelector('.drawing-img')

  drawingButton.addEventListener('click', function() {
    // event.preventDefault()
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
// })
