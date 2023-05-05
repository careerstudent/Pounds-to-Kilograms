// get weight

// activate button

// conversion

// show result



document.querySelector('#button').addEventListener('click', conversion)

function conversion () {
    let pounds = document.querySelector('#input').value
    let kilograms = ( pounds * 0.45359237 )
    document.querySelector('#result').innerText = kilograms
}