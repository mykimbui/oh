document.addEventListener("DOMContentLoaded", function() {

  const title = document.querySelectorAll(".title-project")
  const projectImg = document.querySelectorAll(".projectimg")
  const arrowTop = document.getElementById('arrow-top')
  const top = document.getElementById('top')

  const scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    })
  }

  const scrollToProject = (element) => {
   let positionElement = element.getBoundingClientRect()
   window.scroll({
     behavior: 'smooth',
     left: 0,
     top: positionElement.top
   })
 }

  for (let i=0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
      scrollToProject(projectImg[i])
    })
  }

  arrowTop.addEventListener('click', function() {
    scrollTo(top)
  })


})


