const images = [ "https://picsum.photos/900/600/?image=0", "https://picsum.photos/900/600/?image=27", "https://picsum.photos/900/600/?image=90"]
const box = document.querySelector('.box')

let i = 0;

var x_bleed_right,
    x_bleed_left,
    y_bleed_bottom,
    y_bleed_top;
const scale = 0.5;

function placeImage(x,y) {
  const nextImage = images[i]
  const img = document.createElement('img')
  img.setAttribute('src', nextImage)

  // get image width and height before it is appended
  var img_width, img_height;
  const img_load = new Image();

  img_load.addEventListener('load', function(e) {
      img_width = img_load.width * scale;
      img_height = img_load.height * scale;

      // calculate how many pixels is bleeding
      x_bleed_right =   (x - img_width / 2 )  + img_width   - box.offsetWidth;
      x_bleed_left =    (x - img_width / 2 );
      y_bleed_bottom =  (y - img_height / 2 ) + img_height  - box.offsetHeight;
      y_bleed_top =     (y - img_height / 2 );

      // console.log(x_bleed_right, x_bleed_left)

      img.style.position = 'absolute'

      if (x_bleed_right > 0) {
        img.style.left = box.offsetWidth - (img_width / 2) + 'px'
      } else if (x_bleed_left < 0) {
        img.style.left = (img_width / 2) + 'px'
      } else {
        img.style.left = x + 'px'
      }

      if (y_bleed_bottom > 0) {
        img.style.top = box.offsetHeight - (img_height / 2) + 'px'
      } else if (y_bleed_top < 0) {
        img.style.top = (img_height / 2) + 'px'
      } else {
        img.style.top = y + 'px'
      }

      img.style.transform = 'translate(-50%, -50%) scale('+scale+')'
      img.style.pointerEvents = 'none';

      box.appendChild(img)
  });
  img_load.src = nextImage;


  i = i + 1
  if ( i >= images.length) {
    i = 0
  }
  blurPreviousImage(box.children)
}

function blurPreviousImage(images) {
  if (images.length) {
    let image = images[images.length - 1]
    image.className += " blur";
  }
}

box.addEventListener("click", function(event) {
  event.preventDefault()
  const posLeft = event.pageX - box.offsetLeft
  const posTop = event.pageY - box.offsetTop
  placeImage(posLeft, posTop)
})
