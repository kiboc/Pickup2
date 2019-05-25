// let inputName = document.getElementById('inputName')
// let inputAge = document.getElementById('inputAge')
// let inputEmail = document.getElementById('inputEmail')
// let tarjeta = document.getElementById('tarjeta')
// let holder = document.getElementById('holder')


// let finalNombre = document.getElementById('finalNombre')
// let finalEdad = document.getElementById('finalEdad')
// let finalEmail = document.getElementById('finalEmail')

const cardEmail = document.getElementById('cardEmail')
const interes = document.getElementById('interes')
const btn = document.getElementById ('btn')

const click = () => {
    event.preventDefault()
    // let inputNameValue = inputName.value
    // let inputAgeValue = inputAge.value
    // let inputEmailValue = inputEmail.value
    //     console.log(inputNameValue)
    //     console.log(inputAgeValue)
    //     console.log(inputEmailValue)
    //     inputName.style.display = "none"
    //     inputAge.style.display = "none"
    //     inputEmail.style.display = "none"
    //     btn.style.display = "none"

        
    //  finalNombre.innerHTML = inputNameValue
    //  finalEdad.innerHTML = inputAgeValue 
    //  finalEmail.innerHTML = inputEmailValue
    
    cardEmail.style.display = 'none'
    interes.style.display = 'block'
    
} 

btn.addEventListener("click", click)


// let inputEmail = document.getElementById ('inputname')
// let inputName = document.getElementById ('inputName')
// let inputCity = document.getElementById ('inputCity')
// let inputDoubt = document.getElementById ('inputDoubt')
