document.addEventListener("DOMContentLoaded", function() {

  const carousels = document.querySelectorAll('.main-carousel')


  carousels.forEach(function(carousel){
    const flkty = new Flickity( carousel, {
      cellAlign: 'center',
      contain: true,
      adaptiveHeight: false,
      autoPlay: false,
      lazyLoad: true,
      prevNextButtons: true,
      pageDots: false,
      imagesLoaded: true,
      resize: true,
      fade: true,
      adaptiveHeight: true
    })
  })


})
