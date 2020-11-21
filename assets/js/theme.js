var box = document.getElementById("floating-box");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    box.className = "floating-box show"
  } else {
    box.className = "floating-box hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}