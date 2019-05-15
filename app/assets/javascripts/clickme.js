document.addEventListener("DOMContentLoaded", function() {

  const projectImage = document.querySelectorAll(".clickcursor");

  projectImage.forEach(function (item) {

    item.addEventListener("mouseover", function () {
      // event.preventDefault()

      const posx = Math.random() * item.offsetWidth
      const posy = Math.random() * item.offsetHeight

      // const posx = event.pageX / item.offsetWidth
      // const posy = event.pageY / item.offsetHeight
      // const posx = event.pageX - (item.offsetWidth / 2)
      // const posy = event.pageY - (item.offsetHeight / 2)

      const newClick = document.createElement('div')
      newClick.classList.add('clickme')
      newClick.innerHTML = 'click click!'
      newClick.style.position = 'absolute'
      newClick.style.color = '#2f2f2f'
      newClick.style.mixBlendMode = 'color-burn'
      newClick.style.fontFamily = 'BusinessHistory-Regular'
      newClick.style.fontSize = '30px'
      newClick.style.left = posx.toFixed(1) + 'px'
      newClick.style.top = posy.toFixed(1) + 'px'

      function fadeOutEffect() {

        var fadeEffect = setInterval(function () {
          if (!newClick.style.opacity) {
            newClick.style.opacity = 1
          }
          if (newClick.style.opacity > 0) {
            newClick.style.opacity -= 0.1
          } else {
            clearInterval(fadeEffect)
          }
        }, 100)
      }

      item.appendChild(newClick)
      fadeOutEffect(newClick)

      const allClicks = document.querySelectorAll(".clickme")

      Math.min(Math.max(parseInt(allClicks.length), 10), 30)

      // if (allClicks.length < 5) {
      //   item.appendChild(newClick);
      //   fadeOutEffect(newClick);
      // }
      // else {
      //   item.removeChild(newClick);

      // }

    })
  })
})

// function fadeOutEffect() {

//   var fadeTarget = document.getElementById("target");

//   var fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//       fadeTarget.style.opacity = 1;
//     }
//     if (fadeTarget.style.opacity > 0) {
//       fadeTarget.style.opacity -= 0.1;
//     } else {
//       clearInterval(fadeEffect);
//     }
//   }, 200);
// }

// document.getElementById("target").addEventListener('click', fadeOutEffect);
