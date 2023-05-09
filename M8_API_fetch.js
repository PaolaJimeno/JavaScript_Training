const url = 'https://restcountries.com/v2/all'
fetch(url)
.then(response=>response.json()) // convierte a json
// .then(data=>{console.log(data)}) // imprime la data de el json
.then(data=>{console.log(data.name)}) 
.catch(error=>{console.error(error)}) // si hubiera algun error, entonces va a imprimir el error


// async
async function verPaises(){
    let respuesta = await fetch(url) // en lugar de url podemos poner el link
    let data = await respuesta.json()
    console.log(data)
}

verPaises() // llamar a funcion verPaises