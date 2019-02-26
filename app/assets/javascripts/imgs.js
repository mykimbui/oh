const imagesFist = document.querySelectorAll(".project-image-first")
const Bg = document.querySelectorAll(".projectbg")
const imagesList = document.querySelector(".data-images").dataset.images.split(",")

const images = [
"https://picsum.photos/900/600/?image=0", "https://picsum.photos/900/600/?image=98", "https://picsum.photos/900/600/?image=30"
]

var i = 0

function placeImage(x,y) {
  // const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
  const nextImage = images[i]
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

  i++
  if (i >= images.length) {
    i = 0
  }

}

imagesFist.forEach(function(imageFist) {
  imageFist.addEventListener('click', function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
  })
})


document.addEventListener('touchend', function(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})



