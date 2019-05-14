document.addEventListener("DOMContentLoaded", function() {

  const titleProject = document.querySelectorAll(".title-project")
  const descriptionProject = document.querySelectorAll(".description-project")
  const projectBg = document.querySelectorAll(".colorbg")
  const target = document.querySelectorAll(".project-image-first")
  const arrowProject = document.querySelectorAll(".arrow-project")
  const colorBg = document.querySelectorAll(".colorbg")
  const body = document.querySelector('body')
  const website = document.querySelectorAll('.website')
  const undernote = document.querySelectorAll('.undernote')


//   var isInViewport = function (elem) {
//     var distance = elem.getBoundingClientRect()
//     return (
//       distance.top >= 0 &&
//       distance.left >= 0 &&
//       distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       distance.right <= (window.innerWidth || document.documentElement.clientWidth)
//       )
//   }

//   let i
//   window.addEventListener('scroll', function (event) {

//     for (i = 0; i < projectBg.length; i++) {

//       if (isInViewport(projectBg[i])) {
//         arrowProject[i].classList.add("rightrotate")
//         descriptionProject[i].classList.remove("hide")
//         website[i].classList.remove("hide")
//         body.style.backgroundColor = colorBg[i].style.backgroundColor
//       } else {
//         arrowProject[i].classList.remove("rightrotate")
//         descriptionProject[i].classList.add("hide")
//         website[i].classList.add("hide")
//       }
//     }
//   }, false)

// })


function createObserver(item, i){
  var observer;

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }

  observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
          // console.log(entry)
          if (entry.intersectionRatio > 0) {
            arrowProject[i].classList.add("rightrotate")
            descriptionProject[i].classList.remove("hide")
            website[i].classList.remove("hide")
            undernote[i].classList.remove("hide")
            body.style.backgroundColor = colorBg[i].style.backgroundColor
          } else {
            arrowProject[i].classList.remove("rightrotate")
            descriptionProject[i].classList.add("hide")
            website[i].classList.add("hide")
            undernote[i].classList.add("hide")
          }
        })
  }, options)
  observer.observe(item)
}

// function handleIntersect(entries, options) {
//   entries.forEach(function(entry) {
//         // console.log(entry)
//         if (entry.intersectionRatio > 0) {
//           arrowProject[i].classList.add("rightrotate")
//           descriptionProject[i].classList.remove("hide")
//           website[i].classList.remove("hide")
//           body.style.backgroundColor = colorBg[i].style.backgroundColor
//         } else {
//           arrowProject[i].classList.remove("rightrotate")
//           descriptionProject[i].classList.add("hide")
//           website[i].classList.add("hide")
//         }
//       })
// }

for (i = 0; i < projectBg.length; i++) {
  createObserver(projectBg[i], i)
}
})
