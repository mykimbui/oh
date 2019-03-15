document.addEventListener("turbolinks:load", function() {
  console.log('It works on each visit!')
  // document.addEventListener("DOMContentLoaded", function(){
    const imagesFirst = document.querySelectorAll(".project-image-first")
    const projectImageContainers = document.querySelectorAll(".projectbg")
  // const imagesList = document.querySelector(".data-images").dataset.images.split(",")
  var i = 0
  const scale = 0.5

  function placeImage(x,y, imagesList) {
    console.log(imagesList[i], i)
    if (imagesList[i]) {
      const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
      const img = document.createElement("img")
      img.setAttribute('src', nextImage)

      const imgLoad = new Image()

      imgLoad.addEventListener('load', function() {
        const imgWidth = imgLoad.width * scale
        const imgHeight = imgLoad.height * scale

        projectImageContainers.forEach(function(projectImageContainer) {
          const xBleedRight =   (x - imgWidth / 2 )  + imgWidth   - projectImageContainer.offsetWidth
          const xBleedLeft =    (x - imgWidth / 2 )
          const yBleedBottom =  (y - imgHeight / 2 ) + imgHeight  - projectImageContainer.offsetHeight
          const yBleedTop =     (y - imgHeight / 2 )
          console.log(xBleedRight, xBleedLeft)

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
          img.style.pointerEvents = 'none'

          projectImageContainer.appendChild(img)
        })
      })

      imgLoad.src = nextImage
    }

    i++
    if (i >= imagesList.length) {
      i = 0
    }
  }


  projectImageContainers.forEach(function(projectImageContainer) {
    const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
    projectImageContainer.addEventListener('click', function(event) {
      event.preventDefault()
      const posLeft = event.pageX - projectImageContainer.offsetLeft
      const posTop = event.pageY - projectImageContainer.offsetTop
      placeImage(posLeft, posTop, imagesList)
    })
  })

  projectImageContainers.forEach(function(projectImageContainer) {
    const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
    projectImageContainer.addEventListener('touchend', function(event) {
      event.preventDefault()
      const posLeft = event.pageX - projectImageContainer.offsetLeft
      const posTop = event.pageY - projectImageContainer.offsetTop
      placeImage(posLeft, posTop, imagesList)
    })
  })

// })

})
