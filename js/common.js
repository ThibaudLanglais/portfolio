let menuToggle = document.getElementById('menu-toggle')
let menuItems = document.querySelectorAll('#menu li a')
let menuTransi = false

menuItems.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		if(!menuTransi){
			console.log("ici");
			e.stopImmediatePropagation()
			menuTransi = true
			document.body.classList.toggle('menu-active')
   item.click()
			return
		}else{
			menuTransi = false
		}
	})
})
menuToggle.addEventListener('click', ()=>{
	document.body.classList.toggle('menu-active')
})