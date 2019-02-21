const titleProject = document.querySelectorAll(".title-project");
const descriptionProject = document.querySelectorAll(".description-project");
const projectBg = document.querySelectorAll(".projectbg");
const arrowProject = document.querySelectorAll(".arrow-project");

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

var i;
window.addEventListener('scroll', function (event) {

  for (i = 0; i < projectBg.length; i++) {

    if (isInViewport(projectBg[i])) {
      arrowProject[i].classList.add("rightrotate");
      descriptionProject[i].classList.remove("hide");
    } else {
      arrowProject[i].classList.remove("rightrotate");
      descriptionProject[i].classList.add("hide");
    }
  }
}, false);

