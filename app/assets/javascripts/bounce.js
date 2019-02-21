document.addEventListener("DOMContentLoaded", function(event) {
  const projectImage = document.querySelectorAll(".clickcursor");

  projectImage.forEach(function (item) {

    item.addEventListener("mouseover", function (event) {

      const posx = Math.random() * item.offsetWidth;
      const posy = Math.random() * item.offsetHeight;

      // const posx = event.pageX / item.offsetWidth;
      // const posy = event.pageY / item.offsetHeight;
      // const posx = event.pageX - (item.offsetWidth / 2);
      // const posy = event.pageY - (item.offsetHeight / 2);

      const newClick = document.createElement('div');
      newClick.className = 'clickme';
      newClick.innerHTML = 'click me';
      newClick.style.color = 'black';
      newClick.style.fontSize = '20px';
      newClick.style.fontFamily = 'SpaceGrotesk-Regular';
      newClick.style.position = 'absolute';
      newClick.style.left = posx.toFixed(1) + 'px';
      newClick.style.top = posy.toFixed(1) + 'px';
      newClick.style.WebkitFilter = "contrast(40)";
      newClick.style.filter = "contrast(40)";

      function fadeOutEffect() {

        var fadeEffect = setInterval(function () {
          if (!newClick.style.opacity) {
            newClick.style.opacity = 1;
          }
          if (newClick.style.opacity > 0) {
            newClick.style.opacity -= 0.1;
          } else {
            clearInterval(fadeEffect);
          }
        }, 100);
      }

      item.appendChild(newClick);
      fadeOutEffect(newClick);

      const allClicks = document.querySelectorAll(".clickme");

      Math.min(Math.max(parseInt(allClicks.length), 1), 20);

      // if (allClicks.length < 5) {
      //   item.appendChild(newClick);
      //   fadeOutEffect(newClick);
      // }
      // else {
      //   item.removeChild(newClick);

      // }

    })
  })
});

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


// $( ".dollar" ).keypress(function makeDiv(){
//   $newdiv = $('<div/>').text("💸");

//   var posx = Math.random() * $('.dollar-box').width().toFixed();
//   var posy = Math.random() * $('.dollar-box').height().toFixed();

//   $newdiv.css({
//     'position':'absolute',
//     'font-size': '40px',
//     'left':posx+'px',
//     'top':posy+'px',
//     'display':'none'
//   }).appendTo( '.dollar-box' ).fadeIn(1000).fadeOut(4000, function(){
//    $(this).remove();
//      // makeDiv();
//    });
// })();

