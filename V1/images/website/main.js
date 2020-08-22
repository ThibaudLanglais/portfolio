var db = firebase.firestore();
document.getElementById('submit').addEventListener('click', (evt)=>{
    evt.preventDefault()
    db.collection("recipe").add({
        category: document.getElementById('category').value,
        difficulty:parseInt(document.getElementById('difficulty').value),
        name:document.getElementById('nom').value,
        persons:parseInt(document.getElementById('persons').value),
        photo:document.getElementById('photo').value,
        time:document.getElementById('time').value,
        searchKey:document.getElementById('nom').value.toString().charAt(0).toUpperCase(),
        ingredients: [{ingName: "Abricots", ingNumber: 3}],
        instructions:document.getElementById('instructions').value,
    })
})