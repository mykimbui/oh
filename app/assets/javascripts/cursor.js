document.addEventListener("DOMContentLoaded", function() {

  const bodyTag = document.querySelector("body");
  const cursor = document.querySelector("div.cursor");

  let isMouseDown = false;

  const growCursor = function () {
    cursor.classList.add("is-down");
  }

  const shrinkCursor = function () {
    cursor.classList.remove("is-down");
  }

  const moveCursor = function (x, y) {
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  }

  document.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    growCursor();
  })

  document.addEventListener("mouseup", function () {
    isMouseDown = false;
    shrinkCursor();
  })

  document.addEventListener("mousemove", function (event) {
    moveCursor(event.pageX, event.pageY);
  })

});
