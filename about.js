console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted');
}

function compliment(evt){
	evt.preventDefault()

		alert("You're CUTE")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('#cat-pic').addEventListener('mouseover',compliment)