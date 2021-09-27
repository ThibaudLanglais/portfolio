let inputFocused = false
let steps = 0
let formInputs = document.querySelectorAll('#form-contact input, #form-contact textarea')
let formAfterButton = document.getElementById('form-control-after')
let formBeforeButton = document.getElementById('form-control-before')
let formInputsContainer = document.querySelector('.inputs-container')
let formStatus = document.querySelector('.status')
let form = document.querySelector('#form-contact')
let formSubmit = document.querySelector('#form-contact button')

document.querySelectorAll('#fullpage a').forEach((a)=>{
	a.addEventListener('click', (e)=>{
		e.preventDefault()
		window.location.href = a.href
	})
})

document.onmousemove = function(e) {
	document.body.style.setProperty('--x',(e.clientX)+'px');
	document.body.style.setProperty('--y',(e.clientY)+'px');
}

window.addEventListener('keydown', (e)=>{
 if(e.code == "Tab" && inputFocused){
		if(e.shiftKey){
			if(steps != 0){
				e.preventDefault();
				formBeforeButton.click()
			}
		}else{
			if(steps != 3){
				e.preventDefault()
				formAfterButton.click()
			}
		}
		return
	}

	if(e.ctrlKey && e.altKey){
		document.body.classList.toggle('secret')
	}
})

formSubmit.addEventListener('click', (e)=>{
	if(!form.checkValidity()){
		e.preventDefault()
		e.stopPropagation()
		var list = form.querySelectorAll(':invalid');
		var txt = 'Please fill in those fields correctly : '
		list.forEach((el)=>{
			txt += el.name + ', '
		})
		alert(txt)
	}
})

formAfterButton.addEventListener('click', (e)=>{
	if(steps < 3){
		steps++;
		formInputsContainer.style.transform = `translateX( calc(-${steps*100}% - ${(steps)*45}px) )`
		updateZone(`0${steps+1}/04`)
	}
})
formBeforeButton.addEventListener('click', (e)=>{
	if(steps > 0){
		steps--;
		formInputsContainer.style.transform = `translateX( calc(-${steps*100}% - ${steps*45}px) )`
		updateZone(`0${steps+1}/04`)
	}
})
function updateZone(text){
	if(formStatus){
		formStatus.innerHTML = text
	}
}
formInputs.forEach((item, i)=>{
	item.addEventListener('keypress', (e)=>{
		if(e.charCode == 13){
			e.preventDefault()
			formAfterButton.click()
			formInputs[i+1].focus({preventScroll: true})
		}
	})
	item.addEventListener('focus', ()=>{
		inputFocused = true
	})
	item.addEventListener('blur', ()=>{
		inputFocused = false
	})
})