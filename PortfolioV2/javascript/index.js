document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(){
  document.querySelector('.menuTrigger').addEventListener('click', toggleClassTriggered);
  document.getElementById('plus').addEventListener('click', pageIndexChange);
  document.getElementById('moins').addEventListener('click', pageIndexChange);
  let items = document.querySelectorAll('.listItem');
  for(let unItem of items){
    unItem.addEventListener('mouseenter', toggleClassRotating);
  }
}

function toggleClassTriggered(evt) {
  let traitsMenu = document.querySelectorAll('.menuTrigger img');
    traitsMenu[0].classList.toggle('triggered1');
    traitsMenu[1].classList.toggle('triggered2');
    document.getElementById('menu').classList.toggle('menuTriggered')
}

function pageIndexChange(evt) {
  let index = document.getElementById('pageIndex');
  let value = index.textContent;
  let contentContainers = document.querySelectorAll('.contentContainer');
  let texts = document.querySelectorAll('.listItem p');
  let texte1 = "Dessin vectoriel du personnage principal de la série \"The beggining of the End\"";
  let texte2 = "Data Visualisation sur l'entreprise de création de jeux vidéos \"Ubisoft\"";
  let texte3 = "Rédaction d'un article fictif sur l'intelligence artificielle, et création d'une fausse publicité";
  let texte4 = 'Ce pikachu semble éprouver une affection particulière envers cette jeune femme. Très mignon.';
  let texte5 = 'Création d\'un logo pour le centre socio médical de Bais Hambers';
  let texte6 = 'Ce pikachu semble éprouver une affection particulière envers cette jeune femme. Très mignon.';


  if(this.id=='plus' && value<2){
    value++;
    index.textContent = value;
  }else if(this.id=='moins' && value>1){
    value--;
    index.textContent = value;
  }
  switch(value){
    case 1:texts[0].textContent=texte1;texts[1].textContent=texte2;texts[2].textContent=texte3;contentContainers[0].style.backgroundImage = "url('./images/BOE.png')";contentContainers[1].style.backgroundImage = "url('./images/DataVis.png')";contentContainers[2].style.backgroundImage = "url('./images/article.jpg')";break;
    case 2:texts[0].textContent=texte4;texts[1].textContent=texte5;texts[2].textContent=texte6;contentContainers[0].style.backgroundImage = "url('./images/pika.jpg')";contentContainers[1].style.backgroundImage = "url('./images/baisHambers.png')";contentContainers[2].style.backgroundImage = "url('./images/pika.jpg')";break;
  }
}

function toggleClassRotating(evt) {
  let listItems = document.querySelectorAll('.listItem');
  switch(this){
    case listItems[0]:this.classList.toggle('rotating1');setTimeout("deleteRotate1()", 1500);break;
    case listItems[1]:this.classList.add('rotating2');setTimeout("deleteRotate2()", 1500);break;
    case listItems[2]:this.classList.add('rotating3');setTimeout("deleteRotate3()", 1500);break;
  }

}
function deleteRotate1() {
  let listItems = document.querySelectorAll('.listItem');
  listItems[0].classList.toggle('rotating1');
}

function deleteRotate2() {
  let listItems = document.querySelectorAll('.listItem');
  listItems[1].classList.toggle('rotating2');
}
function deleteRotate3() {
  let listItems = document.querySelectorAll('.listItem');
  listItems[2].classList.toggle('rotating3');
}
