const titleHead = document.querySelector('title')
const titlesList = ["My Kim Bui ✌️", "y Kim Bui ✌️ M", "Kim Bui ✌️ My", "im Bui ✌️ My K", "m Bui ✌️ My Ki", "Bui ✌️ My Kim", "ui ✌️ My Kim B", "i ✌️ My Kim Bu"]

var i = 0
const changeTitle = function() {
  i++
  if (i >= titlesList.length) {
    i = 0
  }
  titleHead.innerHTML = titlesList[i]
}

window.setInterval(changeTitle, 180);

