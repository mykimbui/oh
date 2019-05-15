document.addEventListener("DOMContentLoaded", function() {
  const bubbleit = document.querySelector('.wreckit')
  const arrowTop = document.getElementById('arrow-top')

  bubbleit.addEventListener('mouseover', function() {
    bubbleit.classList.add('shake-bottom')
  })

  bubbleit.addEventListener('mouseout', function() {
    bubbleit.classList.remove('shake-bottom')
  })

  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY + 5) >= document.body.offsetHeight) {
      arrowTop.classList.remove("hide")
      arrowTop.classList.add('bounce-top')
    }
    else
      arrowTop.classList.add("hide")
  }

  arrowTop.addEventListener('click', function() {
    scrollTo(top)
  })
})
