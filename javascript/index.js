document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(){
  document.querySelector('.menuTrigger').addEventListener('click', toggleClassTriggered);
}

function toggleClassTriggered(evt) {
  let traitsMenu = document.querySelectorAll('.menuTrigger img');
    traitsMenu[0].classList.toggle('triggered1');
    traitsMenu[1].classList.toggle('triggered2');
    document.getElementById('menu').classList.toggle('menuTriggered')
}