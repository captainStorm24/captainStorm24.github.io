var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    console.log("current" + currentScrollPos + ' ');
    console.log("prev" + prevScrollpos + ' ');
  } else if (currentScrollPos!= 0) {
    document.getElementById("navbar").style.top = "-50px";
    console.log("current" + currentScrollPos + ' ');
    console.log("prev" + prevScrollpos + ' ');
  }
  prevScrollpos = currentScrollPos;
}