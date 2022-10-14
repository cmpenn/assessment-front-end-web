let random = document.querySelector('#random')

let restArr = ['Betos', 'The Pie', 'Costavida', 'JCWs']

function randomRest(evt){
    evt.preventDefault()

   return array[Math.floor(Math.random() * array.length)]

   
}

random.addEventListener('click', randomRest)