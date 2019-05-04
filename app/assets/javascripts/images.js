document.addEventListener("DOMContentLoaded", function() {
  const imagesFirsts = document.querySelectorAll(".project-image-first")
  const projectImageContainers = document.querySelectorAll(".projectbg")
  const imagesList = document.querySelector(".data-images").dataset.images.split(",")

  let counter = 0
  let i = 0
  for (b=0; b < imagesFirsts.length; b++) {
    const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
    //console.log(imagesFirsts[b], i)
    imagesFirsts[b].addEventListener('click', function() {
      console.log("ee")
      imagesFirsts[b].src = nextImage[b][++counter]
      if(counter == imagesList.length){
        counter = 0;
      }
    })
  }
})
//   let i = 0
//   const scale = 0.9

//   function placeImage(x,y, imagesList, projectImageContainer) {
//     // console.log(imagesList[i], i)
//     if (imagesList[i]) {
//       const nextImage = imagesList[i].replace(/ *"*\[*\]*/g,'')
//       const img = document.createElement("img")
//       img.setAttribute('src', nextImage)

//       const imgLoad = new Image()

//       imgLoad.addEventListener('load', function() {
//         const imgWidth = imgLoad.width * scale
//         const imgHeight = imgLoad.height * scale

//         // projectImageContainers.forEach(function(projectImageContainer) {
//           const xBleedRight =   (x - imgWidth / 2 )  + imgWidth   - projectImageContainer.offsetWidth
//           const xBleedLeft =    (x - imgWidth / 2 )
//           const yBleedBottom =  (y - imgHeight / 2 ) + imgHeight  - projectImageContainer.offsetHeight
//           const yBleedTop =     (y - imgHeight / 2 )

//           img.style.position = 'absolute'

//           if (xBleedRight > 0) {
//             img.style.left = projectImageContainer.offsetWidth - (imgWidth / 2) + 'px'
//           } else if (xBleedLeft < 0) {
//             img.style.left = (imgWidth / 2) + 'px'
//           } else {
//             img.style.left = x + 'px'
//           }

//           if (yBleedBottom > 0) {
//             img.style.top = projectImageContainer.offsetHeight - (imgHeight / 2) + 'px'
//           } else if (yBleedTop < 0) {
//             img.style.top = (imgHeight / 2) + 'px'
//           } else {
//             img.style.top = y + 'px'
//           }
//           img.style.transform = 'translate(-50%, -50%) scale('+scale+')'
//           // img.style.pointerEvents = 'none'
//           console.log(img)
//           projectImageContainer.appendChild(img)
//         // })
//       })

//       imgLoad.src = nextImage
//     }

//     i++
//     if (i >= imagesList.length) {
//       i = 0
//     }
//   }


//   projectImageContainers.forEach(function(projectImageContainer) {
//     const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
//     projectImageContainer.addEventListener('click', function(event) {
//       event.preventDefault()
//       const posLeft = event.pageX - projectImageContainer.offsetLeft
//       const posTop = event.pageY - projectImageContainer.offsetTop
//       placeImage(posLeft, posTop, imagesList, projectImageContainer)
//     })
//   })

//   projectImageContainers.forEach(function(projectImageContainer) {
//     const imagesList = projectImageContainer.querySelector(".data-images").dataset.images.split(",")
//     projectImageContainer.addEventListener('touchend', function(event) {
//       event.preventDefault()
//       const posLeft = event.pageX - projectImageContainer.offsetLeft
//       const posTop = event.pageY - projectImageContainer.offsetTop
//       placeImage(posLeft, posTop, imagesList, projectImageContainer)
//     })
//   })

// // })

// })
