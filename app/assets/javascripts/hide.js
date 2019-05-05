document.addEventListener("DOMContentLoaded", function() {

  const about = document.querySelector(".about")
  const intro = document.querySelector(".introduction")
  const contactButton = document.querySelector(".contact-button")
  const contactText = document.querySelector(".contact-text")
  const creditButton = document.querySelector(".credit")
  const creditText = document.querySelector(".credit-text")
  const arrowInfo = document.querySelector(".arrow-info")
  const arrowContact = document.querySelector(".arrow-contact")
  const arrowCredit = document.querySelector(".arrow-credit")
  const infoBtn = document.querySelectorAll(".infomobile")
  const infoTxt = document.querySelectorAll(".infomobileshow")

  function hide(text, arrow) {
    if (text.style.display === "none") {
      text.style.display = "block"
      arrow.classList.add("rightrotate")
    }
    else {
     text.style.display = "none"
     arrow.classList.remove("rightrotate")
   }
 }

 about.addEventListener("click", function(){
  hide(intro, arrowInfo)
})

 contactButton.addEventListener("click", function(){
  hide(contactText, arrowContact)
})

 creditButton.addEventListener("click", function(){
  hide(creditText, arrowCredit)
})

 for (let i = 0, len = infoBtn.length; i < len; i++) {
  infoBtn[i].addEventListener("click", function() {
    if (infoTxt[i].style.display == 'none') {
      infoTxt[i].style.display = "block"
      // infoBtn[i].classList.add("flip-horizontal-bottom")
      infoBtn[i].innerHTML = "Close"
    }
    else {
     infoTxt[i].style.display = "none"
     infoBtn[i].innerHTML = "Info"
     // infoBtn[i].classList.remove("flip-horizontal-bottom")
   }
 })
}

// function scrollme(item, arrow) {
//   if (window.pageYOffset > 400) {
//     item.style.display = "none"
//     // window.scrollTo(0, 100)
//     arrow.classList.remove("rightrotate")
//   }
// }

// window.addEventListener("scroll", function() {
//   scrollme(intro, arrowInfo)
//   scrollme(contactText, arrowContact)
//   scrollme(creditText, arrowCredit)
// })

})
