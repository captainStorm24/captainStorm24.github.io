let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 0) {
    // If currentScrollPos is 0, show the navbar
    navbar.style.top = "0";
  } else if (prevScrollpos > currentScrollPos) {
    // User is scrolling up, so show the navbar
    navbar.style.top = "0";
  } else {
    // User is scrolling down, so hide the navbar
    navbar.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
