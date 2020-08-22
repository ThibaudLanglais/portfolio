document.addEventListener('DOMContentLoaded', initialiser);

let myInterval;

function initialiser(){
    document.addEventListener('mousemove', parallaxing);
  }
  function parallaxing() {
      var x = 0.05 * (event.clientX - window.innerWidth/2);
      var y = 0.02 * (event.clientY - window.innerHeight/2);
      document.querySelector(".oeil1").style.transform = "translate(" + x + "%," + y + "%)";
      document.querySelector(".oeil2").style.transform = "translate(" + x + "%," + y + "%)";
      document.querySelector('.aproposContainer').style.transform = "translate(" + 0.2 * x + "%," + 0.2 * y + "%)";
  }