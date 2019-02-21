const about = document.querySelector(".about");
const intro = document.querySelector(".introduction");
const contactButton = document.querySelector(".contactmeme")
const contactText = document.querySelector(".contactme")
const arrowInfo = document.querySelector(".arrow-info");
const arrowContact = document.querySelector(".arrow-contact");

about.addEventListener("click", function(){
  if (intro.style.display === "none") {
    intro.style.display = "block";
    arrowInfo.classList.add("rightrotate");
  }
  else {
   intro.style.display = "none";
   arrowInfo.classList.remove("rightrotate");
  }
});


contactButton.addEventListener("click", function(){
  if (contactText.style.display === "none") {
    contactText.style.display = "block";
    arrowContact.classList.add("rightrotate");
  }
  else {
   contactText.style.display = "none";
   arrowContact.classList.remove("rightrotate");
  }
});
