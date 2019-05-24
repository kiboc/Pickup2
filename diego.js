const btnCrearEvento = document.getElementById('btnCrearEvento')
const inputNombreEvento = document.getElementById('inputNombreEvento')
const inputDescripcionEvento = document.getElementById('inputDescripcionEvento')

const btnRegistrarse = document.getElementById('btnRegistrarse')

let id = 1
let a = 0

const asistentes = (id,a) => {
    let asistentes = document.getElementById(id)
     a++
    asistentes.innerHTML = 'Regristraste (' + a + ')'
}

const crearEvento = () => {

    //Crear partes del div del evento
    let divCard = document.createElement('div')
    let imgCard = document.createElement('img')
    let divCardBody = document.createElement('div')
    let h5Card = document.createElement('h5')
    let pCard = document.createElement('p')
    let aCard = document.createElement('a')
    let pIdCard = document.createElement('span')
    // let pAsistentesCard = document.createElement('p')

    //Obtener valores del formulario de el evento
    let inputNombreEventoValue = inputNombreEvento.value
    let inputDescripcionEventoValue = inputDescripcionEvento.value

    //añadir atributos a las partes del div
    divCard.setAttribute("class", "card sec3-eventCard col-sm-12 col-md-6 col-lg-3")
    imgCard.setAttribute("class", "card-img-top")
    imgCard.setAttribute("src", "...")
    imgCard.setAttribute("alt", "Card image cap")
    divCardBody.setAttribute("class", "card-body")
    pCard.setAttribute("class", "card-text")
    // aCard.setAttribute("href", "#")
    aCard.setAttribute("id", 'link'+id)
    aCard.setAttribute("class", "btn btn-primary")
    aCard.setAttribute("onclick", "asistentes(id,a)")
    // pAsistentesCard.setAttribute("id", id)
    
    //Insertar el contenido a cada parte
    // h5Card.innerHTML = 'Card title'
    h5Card.innerHTML = inputNombreEventoValue
    // pCard.innerHTML = 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    pCard.innerHTML = inputDescripcionEventoValue
    aCard.innerHTML = 'Regristraste (' + a + ')'
    pIdCard.innerHTML = '<br>Id Evento: ' + id
    // pAsistentesCard.innerHTML = 'No. asistentes'

    id++

    //acomodar el contenido
    divCard.appendChild(imgCard)
    divCard.appendChild(divCardBody)
    divCardBody.appendChild(h5Card)
    divCardBody.appendChild(pCard)
    divCardBody.appendChild(aCard)
    divCardBody.appendChild(pIdCard)
    // divCardBody.appendChild(pAsistentesCard)
    
    document.getElementById('sec3-cards').appendChild(divCard)
}



btnCrearEvento.addEventListener('click',crearEvento)