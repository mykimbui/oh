document.addEventListener("DOMContentLoaded", function(){

const imagesFirst = document.querySelectorAll(".project-image-first")
const projectImageContainers = document.querySelectorAll(".projectbg")
// const imagesList = document.querySelector(".data-images").dataset.images.split(",")

var i = 0

function placeImage(x,y, imagesList) {
  // console.log(imagesList[i], i)
  if (imagesList[i]) {
    const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
    const img = document.createElement("img")
    img.setAttribute('src', nextImage)
    img.style.position = 'absolute'
    img.style.left = x + 'px'
    img.style.top = y + 'px'
    img.style.transform = 'translate(-50%, -50%) scale(0.7)'
    img.style.pointerEvents = 'none'
    img.style.objectFit = 'contain'
    document.body.appendChild(img)
  }

  i++
  if (i >= imagesList.length) {
    i = 0
  }
}

// function replaceImage(imagesList, imageF) {
//   if (imagesList[i]) {
//     const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
//     imageF.src = nextImage
//   }
//   i++
//   if (i >= imagesList.length) {
//     i = 0
//   }
// }

projectImageContainers.forEach(function(projectImageContainer) {
  const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
  projectImageContainer.addEventListener('click', function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY, imagesList)
    // replaceImage(imagesList, projectImageContainer)
  })
})

projectImageContainers.forEach(function(projectImageContainer) {
  const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
  projectImageContainer.addEventListener('touchend', function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY, imagesList)
  })
})

});


