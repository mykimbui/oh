document.addEventListener("DOMContentLoaded", function() {

  const title = document.querySelectorAll(".title-project")
  const projectImg = document.querySelectorAll(".projectimg")
  const arrowTop = document.getElementById('arrow-top')
  const top = document.getElementById('top')

  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    })
    console
  }

  for (let i=0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
      scrollTo(projectImg[i])
    })
  }

  arrowTop.addEventListener('click', function() {
    scrollTo(top)
  })


})


