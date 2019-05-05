document.addEventListener("DOMContentLoaded", function() {

const titleHead = document.querySelector('title')
const titlesList = ["My Kim Bui ✌️", "y Kim Bui ✌️ M", "Kim Bui ✌️ My", "im Bui ✌️ My K", "m Bui ✌️ My Ki", "Bui ✌️ My Kim", "ui ✌️ My Kim B", "i ✌️ My Kim Bu"]
const newTitle = 'My Kim Bui ✌️ Welcome to my portfolio'

var i = 0
const changeTitle = function() {
  i++
  if (i >= titlesList.length) {
    i = 0
  }
  titleHead.innerHTML = titlesList[i]
}

window.setInterval(changeTitle, 180);

})
// var i = 0
// const changeTitle = function() {
//   i++
//   if (i >= newTitle.length) {
//     newTitle.charAt(i) = newTitle.length
//     const newWord =
//   }
//   titleHead.innerHTML = titlesList[i]
// }

// window.setInterval(changeTitle, 180);

