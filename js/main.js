function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

document.getElementById("toTutorial").onclick = function () {
    location.href = "pages/tutorial.html";
}