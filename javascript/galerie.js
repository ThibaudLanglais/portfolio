let contents = [
  {texte: "Dessin vectoriel du personnage principal de la série \"The beggining after the End\"." , url: "url('./images/BOE.jpg')"},
  {texte:"Data Visualisation sur l'entreprise de création de jeux vidéos \"Ubisoft\"." , url:  "url('./images/DataVis.jpg')"},
  {texte:"Rédaction d'un article fictif sur l'intelligence artificielle, et création d'une fausse publicité." , url: "url('./images/article.jpg')"},
  {texte: 'Montage racontant une histoire avec une chute, en trois images.', url: "url('./images/sequenceImage.jpg')" },
  {texte: 'Création d\'un personnage dans le thème du jeu Cup-Head, et incrustation dans un décor du jeu.', url: "url('./images/perso.jpg')"},
  {texte: 'Réalisation d\'un portrait montage avec mon prénom et un adjectif.', url: "url('./images/portrait.jpg')"}];

document.addEventListener("DOMContentLoaded", initialiser);
function initialiser(){
  document.getElementById('plus').addEventListener('click', pageIndexChange);
  document.getElementById('moins').addEventListener('click', pageIndexChange);
  let items = document.querySelectorAll('.listItem');
  for(let unItem of items){
    unItem.addEventListener('mouseenter', toggleClassRotating);
    unItem.addEventListener('click', afficherOeuvre);
  }
  let containers = document.querySelectorAll('.contentContainer');
  for(let unContainer of containers){
    unContainer.addEventListener('click', afficherOeuvre);
  }
  initialiserPage();
}

function initialiserPage(){
  let texts = document.querySelectorAll('.listItem p');
  let contentContainers = document.querySelectorAll('.contentContainer');
  texts[0].textContent=contents[0]['texte'];
  texts[1].textContent=contents[1]['texte'];
  texts[2].textContent=contents[2]['texte'];
  contentContainers[0].style.backgroundImage = contents[0]['url'];
  contentContainers[1].style.backgroundImage = contents[1]['url'];
  contentContainers[2].style.backgroundImage = contents[2]['url'];

}
function pageIndexChange(evt) {
  let index = document.getElementById('pageIndex');
  value = index.textContent;
  let contentContainers = document.querySelectorAll('.contentContainer');
  let texts = document.querySelectorAll('.listItem p');


  if(this.id=='plus' && value<2){
    value++;
    index.textContent = value;
  }else if(this.id=='moins' && value>1){
    value--;
    index.textContent = value;
  }
  switch(value){
    case 1:texts[0].textContent=contents[0]['texte'];
           texts[1].textContent=contents[1]['texte'];
           texts[2].textContent=contents[2]['texte'];
           contentContainers[0].style.backgroundImage = contents[0]['url'];
           contentContainers[1].style.backgroundImage = contents[1]['url'];
           contentContainers[2].style.backgroundImage = contents[2]['url'];break;
    case 2:texts[0].textContent=contents[3]['texte'];
           texts[1].textContent=contents[4]['texte'];
           texts[2].textContent=contents[5]['texte'];
           contentContainers[0].style.backgroundImage = contents[3]['url'];
           contentContainers[1].style.backgroundImage = contents[4]['url'];
           contentContainers[2].style.backgroundImage = contents[5]['url'];break;
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

function afficherOeuvre(evt){
  let url = this.style.backgroundImage;
  url = url.split("\"")[1];
  console.log(url);
  window.open(url, '_blank');
}