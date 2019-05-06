document.addEventListener("DOMContentLoaded", function() {

  const bodyTag = document.querySelector("body")
  const cursor = document.querySelector("div.cursor")
  const clickableAreas = document.querySelectorAll(".clickarea")

  let isMouseDown = false

  const growCursor = function () {
    cursor.classList.add("is-down")
  }

  const shrinkCursor = function () {
    cursor.classList.remove("is-down")
  }

  const moveCursor = function (x, y) {
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
  }

  const enterArea = function() {
    cursor.style.filter = "blur(0px)"
    cursor.style.width = "20px"
    cursor.style.height = "20px"
  }

  const leaveArea = function() {
    cursor.style.filter = "blur(8px)"
    cursor.style.width = "30px"
    cursor.style.height = "30px"
  }

  document.addEventListener("mousedown", function (event) {
    isMouseDown = true
    growCursor()
  })

  document.addEventListener("mouseup", function () {
    isMouseDown = false
    shrinkCursor()
  })

  document.addEventListener("mousemove", function (event) {
    moveCursor(event.pageX, event.pageY)
  })


  clickableAreas.forEach(function(clickableArea) {
    clickableArea.addEventListener("mouseenter", function() {
      enterArea()
    })
    clickableArea.addEventListener("mouseleave", function() {
      leaveArea()
    })
  })

})
