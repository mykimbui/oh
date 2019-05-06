document.addEventListener("DOMContentLoaded", function() {
  const imagesFirsts = document.querySelectorAll(".project-image-first")
  const projectImageContainers = document.querySelectorAll(".projectbg")
  // const imagesList = document.querySelector(".data-images").dataset.images.split(",")
  let i = 0
  const scale = 0.9
  const imgArray = []

  function placeImage(x,y, imagesList, projectImageContainer) {
    if (imagesList[i]) {
      const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
      const img = document.createElement("img")
      img.setAttribute('src', nextImage)
      console.log(img)

      const imgLoad = new Image()

      imgLoad.addEventListener('load', function() {
        const imgWidth = imgLoad.width * scale
        const imgHeight = imgLoad.height * scale

        const xBleedRight =   (x - imgWidth / 2 )  + imgWidth   - projectImageContainer.offsetWidth
        const xBleedLeft =    (x - imgWidth / 2 )
        const yBleedBottom =  (y - imgHeight / 2 ) + imgHeight  - projectImageContainer.offsetHeight
        const yBleedTop =     (y - imgHeight / 2 )

        img.style.position = 'absolute'
        // img.style.boxShadow = "1px 1px 1px 0px rgba(0,0,0,0.75)"

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
        // img.style.pointerEvents = 'none'
        projectImageContainer.appendChild(img)
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
      placeImage(posLeft, posTop, imagesList, projectImageContainer)
      // imgArray.push(event)
      // console.log(imgArray)
      // window.addEventListener('resize', function(){
      //   imgArray.removeChild(event)
      // }, true)
    })
  })

  // projectImageContainers.forEach(function(projectImageContainer) {
  //   const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
  //   projectImageContainer.addEventListener('touchend', function(event) {
  //     event.preventDefault()
  //     const posLeft = event.pageX - projectImageContainer.offsetLeft
  //     const posTop = event.pageY - projectImageContainer.offsetTop
  //     placeImage(posLeft, posTop, imagesList, projectImageContainer)
  //   })
  // })

// })

})
