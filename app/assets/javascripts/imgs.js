document.addEventListener("DOMContentLoaded", function() {
  const imagesFirsts = document.querySelectorAll(".project-image-first")
  const projectImageContainers = document.querySelectorAll(".projectbg")

  let i = 0
  const scale = 0.7
  const imgArray = []

  function blurPreviousImage(images) {
    if (images.length) {
      let image = images[images.length - 2]
      image.className += " blur"
    }
  }

  function placeImage(x,y, imagesList, projectImageContainer) {
    if (imagesList[i]) {
      const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
      let img
      if (/mp4/.test(nextImage)) {
        img = document.createElement("video")
      }
      else {
        img = document.createElement("img")
      }

      img.setAttribute('src', nextImage)
      if (/mp4/.test(nextImage)) {
        img.setAttribute("autoplay", "autoplay");
        img.setAttribute("loop", "loop");
      }


      const imgWidth = img.width * scale
      const imgHeight = img.height * scale

      const xBleedRight =   (x - imgWidth / 2 )  + imgWidth   - projectImageContainer.offsetWidth
      const xBleedLeft =    (x - imgWidth / 2 )
      const yBleedBottom =  (y - imgHeight / 2 ) + imgHeight  - projectImageContainer.offsetHeight
      const yBleedTop =     (y - imgHeight / 2 )

      img.style.position = 'absolute'

      if (xBleedRight > 0) {
        img.style.left = projectImageContainer.offsetWidth - (imgWidth / 2) + 'px'
      } else if (xBleedLeft < 0) {
        img.style.left = (imgWidth / 2) + 'px'
      } else {
        img.style.left = x + 'px'
      }

      if (yBleedBottom > 0) {
        img.style.top = projectImageContainer.offsetHeight - (imgHeight / 2) + 'px'
      } else if (yBleedTop < 0) {
        img.style.top = (imgHeight / 2) + 'px'
      } else {
        img.style.top = y + 'px'
      }
      img.style.transform = 'translate(-50%, -50%) scale('+scale+')'
      projectImageContainer.appendChild(img)

      img.src = nextImage
    }

    i++
    if (i >= imagesList.length) {
      i = 0
    }
    blurPreviousImage(projectImageContainer.querySelectorAll("img:not(.mobile-only), video:not(.mobile-only)"))
  }

  if (window.innerWidth > 375) {
    projectImageContainers.forEach(function(projectImageContainer) {
      if (projectImageContainer.querySelector(".data-images")) {
        const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
        projectImageContainer.addEventListener('click', function(event) {
          event.preventDefault()
          const posLeft = event.pageX - projectImageContainer.offsetLeft
          const posTop = event.pageY - projectImageContainer.offsetTop
          placeImage(posLeft, posTop, imagesList, projectImageContainer)

        })
      }
    })
  }

})
