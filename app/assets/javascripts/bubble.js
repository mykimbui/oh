document.addEventListener("DOMContentLoaded", function() {
  const bubbleit = document.querySelector('.wreckit')

  bubbleit.addEventListener('mouseover', function() {
    bubbleit.classList.add('shake-bottom')
  })

  bubbleit.addEventListener('mouseout', function() {
    bubbleit.classList.remove('shake-bottom')
  })
})
