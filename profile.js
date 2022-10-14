let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function favColor(evt){
    evt.preventDefault()

    alert('My favorite color is green:)')
}

color.addEventListener('click', favColor)

function favPlace(evt){
    evt.preventDefault()

    alert('My favorite place is the mountains!')
}

place.addEventListener('click', favPlace)

function favRitual(evt){
    evt.preventDefault()

    alert('My favorite ritual is the water tribe initiation ceremony')
}

ritual.addEventListener('click', favRitual)