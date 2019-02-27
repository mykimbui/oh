const imagesFist = document.querySelectorAll(".project-image-first")
const projectImageContainers = document.querySelectorAll(".projectbg")
// const imagesList = document.querySelector(".data-images").dataset.images.split(",")

var i = 0

function placeImage(x,y, imagesList) {
  console.log(imagesList[i], i)
  if (imagesList[i]) {
    // console.log('qq')
    const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
    const img = document.createElement("img")
    img.setAttribute('src', nextImage)
    img.style.position = 'absolute'
    img.style.left = x + 'px'
    img.style.top = y + 'px'
    img.style.transform = 'translate(-50%, -50%) scale(0.5)'

    document.body.appendChild(img)

    // Bg.forEach(function(bg) {
    //   bg.appendChild(img)
    // })

  }

  i++
  if (i >= imagesList.length) {
    i = 0
  }
}

projectImageContainers.forEach(function(projectImageContainer) {
  const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
  projectImageContainer.addEventListener('click', function(event) {
    placeImage(event.pageX, event.pageY, imagesList)
  })
})

// imagesFist.forEach(function(imageFist) {
  // document.addEventListener('click', function(event) {
  //   event.preventDefault()
  //   placeImage(event.pageX, event.pageY)
  // })
// })


// document.addEventListener('touchend', function(event) {
//   event.preventDefault()
//   placeImage(event.pageX, event.pageY)
// })



