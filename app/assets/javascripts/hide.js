const about = document.querySelector(".about");
const intro = document.querySelector(".introduction");
const contactButton = document.querySelector(".contact-button");
const contactText = document.querySelector(".contact-text");
const creditButton = document.querySelector(".credit");
const creditText = document.querySelector(".credit-text");
const arrowInfo = document.querySelector(".arrow-info");
const arrowContact = document.querySelector(".arrow-contact");
const arrowCredit = document.querySelector(".arrow-credit");

function hide(text, arrow) {
  if (text.style.display === "none") {
    text.style.display = "block";
    arrow.classList.add("rightrotate");
  }
  else {
   text.style.display = "none";
   arrow.classList.remove("rightrotate");
  }
}

about.addEventListener("click", function(){
  hide(intro, arrowInfo);
  })

contactButton.addEventListener("click", function(){
  hide(contactText, arrowContact);
  })

creditButton.addEventListener("click", function(){
  hide(creditText, arrowCredit);
  })
