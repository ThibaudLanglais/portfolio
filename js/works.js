// {
//  title: '8List',
//  slug: '',
//  image: {url: '', alt: ''},
//  date: '',
//  technos: [],
//  context: [],
// }

document.addEventListener('DOMContentLoaded', ()=>{
 gsap.to(document.getElementById('transition'), {
  duration: 1,
   scaleY: 0,
   transformOrigin: 'top center',
   ease: 'power4.out',
 })
})

let date = document.querySelector('.date')
let img = document.querySelector('.work .top img')
let title = document.querySelector('.infos h1')
let context = document.querySelector('.context')
let logos = document.querySelector('.logos')
let seeProject = document.querySelector('.see')
let list = document.querySelector('.list')
let works = [
 {
  title: '8List',
  slug: '8list',
  photo: '../assets/8list.png',
  date: '2020',
  technos: ['angular', 'github', 'html5', 'css3', 'js', 'database fas'],
  context: 'This project was done during the year 2020, my first year in the technical institute of Laval.<br>This project helped me a lot to learn about frameworks in general, but also on how to use and manage databases with Firebase Firestore.<br> I had a quite a hard time deploying my website on netlify but I finally got through it and now you can use it freely. This website allow you to connect with your Google account and write notes of different colors, edit them, or delete them. The website updates in real time and doesn\'t reload each time you write a note.',
  url: 'https://8list.netlify.app'
 },
 {
  title: 'Saija',
  slug: 'saija',
  photo: '../assets/saija.png',
  date: '2019/2020',
  technos: ['js', 'html5', 'css3', 'php', 'github', 'git'],
  context: "This project was done in group with 4 other persons as the main big project of the end of our first year in the technical institute of Laval. <br> We had at first the task of writing the technical specifications of our project. And then we had to develop it ourselves using php, html, css and javascript. <br> This project was perfect to practice the basics of php such as session management or sql requests. This was also the opportunity to use the Javascript library Leaflet that allowed us to create markers on the map dynamically. The goal of this website was to eventually help people overcome their different addictions, such as video game addiction, smoking, drugs, etc... with the help of articles or appointments with specialists.",
  url: null
 },
]
document.querySelectorAll('.toggle-work').forEach(toggle=>toggle.addEventListener('click', toggleClass))
let currentWork;

let queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
if(urlParams.get('slug')){
 currentWork = works.filter((work)=>{
  return work.slug.toLowerCase() === urlParams.get('slug').toLowerCase()
 })[0]
 if(!currentWork){
  currentWork = works[0]
 }else{
  updateWorkHtml()
  setTimeout(() => {
   toggleClass()
  }, 700);
 }
}else{
 currentWork = works[0]
}


works.forEach((work, i)=>{
 list.innerHTML += `
 <button data-slug="${work.slug}" class="list-item"><img src="${work.photo}" alt="${work.title}"><h2 class="text-white">${work.title}</h2></button>
 `
})
document.querySelectorAll('.list-item').forEach(item=>{
 item.addEventListener('click', ()=>{
  currentWork = works.filter(work=>{
   return work.slug === item.dataset.slug
  })[0]
  updateWorkHtml()
  toggleClass()
 })
})

function toggleClass(){
 document.querySelector('.work').classList.toggle('active')
}
// updateWorkHtml()

function updateWorkHtml(){ 
 date.innerHTML = currentWork.date
 img.src = currentWork.photo
 img.alt = currentWork.title
 title.innerHTML = currentWork.title
 context.innerHTML = currentWork.context
 logos.innerHTML = ""
 currentWork.technos.forEach(logo=>{
  logos.innerHTML += `<i class="fab fa-${logo}"></i>`
 })
 if(currentWork.url){
  seeProject.href = currentWork.url
  seeProject.classList.remove('hidden')
 }else{
  seeProject.classList.add('hidden')
 }
}