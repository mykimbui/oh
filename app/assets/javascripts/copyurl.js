document.addEventListener("DOMContentLoaded", function() {
  function Copy() {
    var url = document.getElementById("url")
    url.innerHTML = window.location.href
    // console.log(url.innerHTML)
    url.select()
    document.execCommand("copy")
  }
})
