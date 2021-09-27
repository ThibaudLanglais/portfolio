const loadingScreen = document.querySelector('#transition')
let fp
// Function to add and remove the page transition screen
function pageTransitionIn() {
  return gsap.to(loadingScreen, { duration: .5, scaleY: 1, transformOrigin: 'top center'})
}
// Function to add and remove the page transition screen
function pageTransitionOut(container) {
  // GSAP methods can be chained and return directly a promise
  return gsap
    .timeline({ delay: 1 })
    .add('start') // Use a label to sync screen and content animation
    .to(loadingScreen, {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: 'top center',
      ease: 'power1.out'
    }, 'start')
    .call(contentAnimation, [container], 'start')
}

// Function to animate the content of each page
function contentAnimation(container) {
  // Query from container
  // GSAP methods can be chained and return directly a promise
  initFullPage()
  return gsap.to(loadingScreen, {
   duration: 1,
   scaleY: 0,
   transformOrigin: 'top center',
   ease: 'power4.out',
   })
}
function initFullPage(){
 if(document.getElementById('fullpage')){
  fp ? fp.destroy('all') : null
  fp = new fullpage('#fullpage', {
   anchors: ['home', 'project', 'about', 'contact'],
   autoScrolling:true,
   scrollHorizontally: true,
   navigation: true,
   easingcss3:"cubic-bezier(0.645, 0.045, 0.355, 1)",
   scrollingSpeed:1e3,
   onLeave: function(origin, destination, direction){
    gsap.to(origin.item.querySelector('.container'), {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      clearProps: "scale,opacity"
    })
    if(origin.index != destination.index){
     pageTransitions({origin, destination, direction})
    }
   },
   afterLoad: function(origin, destination, direction){
    if(destination.index == origin.index){
     pageTransitions({origin, destination, direction})
    }
   },
  });
 }
}
$(function() {
  barba.init({
    // We don't want "synced transition"
    // because both content are not visible at the same time
    // and we don't need next content is available to start the page transition
    // sync: true,
    transitions: [{
      // NB: `data` was not used.
      // But usually, it's safer (and more efficient)
      // to pass the right container as a paramater to the function
      // and get DOM elements directly from it
      async leave(data) {
        // Not needed with async/await or promises
        // const done = this.async();

        await pageTransitionIn()
        // No more needed as we "await" for pageTransition
        // And i we change the transition duration, no need to update the delay…
        // await delay(1000)

        // Not needed with async/await or promises
        // done()

        // Loading screen is hiding everything, time to remove old content!
        data.current.container.remove()
      },

      async enter(data) {
        await pageTransitionOut(data.next.container)
      },
      // Variations for didactical purpose…
      // Better browser support than async/await
      // enter({ next }) {
      //   return pageTransitionOut(next.container);
      // },
      // More concise way
      // enter: ({ next }) => pageTransitionOut(next.container),

      async once(data) {
        await contentAnimation(data.next.container);
      }
    }]
  });

});

function pageTransitions({origin, destination, direction}){
 
 let tl = gsap.timeline({delay: 1})
 if(destination.index == 0){ //Normalement le 0 "Accueil"
  const line1 = destination.item.querySelector('.line-1')
  const line2 = destination.item.querySelector('.line-2')
  const line3 = destination.item.querySelector('.line-3')
  const line4 = destination.item.querySelector('.line-4')
  gsap.from(line1, {
   translateX: "-100%",
   opacity: 0,
   ease: "power2.out",
   duration: 1,
   delay: 0.5,
  })
  gsap.from(line2, {
   translateX: "-100%",
   opacity: 0,
   ease: "power2.out",
   duration: 1,
   delay: 0.75,
  })
  gsap.from(line3, {
   translateX: "-100%",
   opacity: 0,
   ease: "power2.out",
   duration: 1,
   delay: 1,
  })
  gsap.from(line4, {
   translateY: "200%",
   opacity: 0,
   ease: "power2.out",
   duration: 1,
   delay: 1.5,
  })
  gsap.from(line4, {
   letterSpacing: 0,
   ease: "power2.out",
   duration: 1,
   delay: 2.5,
  })
 }else if(destination.index == 1){ //Normalement le 1 "Project"
  const title = destination.item.querySelector('h1')
  const ul = destination.item.querySelector('ul')
  const img = destination.item.querySelector('img')
  tl.from(title, {
   translateY: "-100%",
   opacity: 0,
   ease: "power2.out",
   duration: 0.5
  })
  .from(ul, {
   translateX: "-25%",
   opacity: 0,
   ease: "power2.out",
   duration: 1,
  })
  gsap.from(img, {
   translateX: "10%",
   opacity: 0,
   ease: "power2.out",
   duration: 1,
   delay: 2.6
  })
 }else if(destination.index == 2){ //Normalement le 2 "About me"
  const title = destination.item.querySelector('h1')
  const eyes = destination.item.querySelector('h1 svg')
  const hobbies = destination.item.querySelector('.hobbies')
  const hobbiesTxt = destination.item.querySelector('.hobbies p')
  const timelineAboutMe = destination.item.querySelector('.timeline')
  tl.from(title, {
    translateX: "-10%",
    opacity: 0,
    ease: "power2.out",
    duration: 1
   })
   tl.from(eyes, {
     clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
     ease: "power2.out",
     duration: 0.5
    })
  tl.from(hobbies, {
    translateX: "10%",
    opacity: 0,
    ease: "elastic",
    duration: 1
    })
  tl.from(hobbiesTxt, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    ease: "power3.out",
    duration: 0.7
    })
  gsap.from(timelineAboutMe, {
    scale: 0,
    opacity: 0,
    ease: "elastic",
    duration: 1.5,
    delay: 2.25
    })
 }else if(destination.index == 3){ //Normalement le 3 "Contact"
  const title = destination.item.querySelector('h1')
  const hand = destination.item.querySelector('.hand')
  const form = destination.item.querySelector('form')
  tl.from(title, {
   translateY: "-50%",
   opacity: 0,
   ease: "power2.out",
  })
  tl.from(hand, {
   translateY: "-50%",
   opacity: 0,
   ease: "elastic",
   duration: 1,
  })
  tl.from(form, {
    clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    ease: "power4.out",
    duration: 1,
  })
 }
}