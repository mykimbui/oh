document.addEventListener("DOMContentLoaded", function() {
  const bubbleit = document.querySelector('.wreckit')
  const arrowTop = document.querySelector('arrow-top')

  bubbleit.addEventListener('mouseover', function() {
    bubbleit.classList.add('shake-bottom')
    arrowTop.classList.add('bounce-top')
  })

  bubbleit.addEventListener('mouseout', function() {
    bubbleit.classList.remove('shake-bottom')
    arrowTop.classList.remove('bounce-top')
  })
})
