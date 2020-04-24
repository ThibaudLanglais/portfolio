document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(){
  document.addEventListener('mousemove', parallaxing);
}
function parallaxing() {
  var x = event.clientX;
  var y = event.clientY;
  const ratioX = 5 / window.innerHeight;
  const ratioY = 20 / window.innerWidth;
  var transformX = x * ratioX - 1.8625;
  var transformY = y * ratioY -10;
  document.getElementById("sectionParallax").style.transform = "translate(" + -transformX + "%," + -transformY + "%)";
}
