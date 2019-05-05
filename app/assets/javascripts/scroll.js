document.addEventListener("DOMContentLoaded", function() {

  const title = document.querySelectorAll(".title-project")
  const projectImg = document.querySelectorAll(".projectimg")


  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    })
    console
  }

  for (let i=0; i < title.length; i++) {
    const thisTitle = title[i]
    const thisProject = projectImg[i]
    thisTitle.addEventListener('click', function() {
      scrollTo(thisProject)
    })
  }

  // for (let i=0; i < title.length; i++) {
  //   title[i].addEventListener('click', scrollTo.bind(this,projectImg[i]), false)
  //   }

  // document.addEventListener('click', function (event) {
  //   for (i=0; i < title.length; i++) {

  //     if (event.target.matches('.title-project')[i]) {
  //       scrollTo(projectImg[i])
  //     }
  //   }

  // }, false);


})


