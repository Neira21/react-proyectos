
const api = 'https://pokeapi.co/api/v2/pokemon'

//Obtener nombres de la api
async function obtenerNombres() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const nombres = data.results.map(element => element.name);
    return nombres;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Utilizar async/await para esperar la respuesta
async function obtenerYMostrarNombres() {
  try {
    const data = await obtenerNombres();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Llamar a la función principal
obtenerYMostrarNombres();
 

//Obtener valores de cada pokemon
const ObtenerValores = async () => {
  const nombres = await obtenerNombres();
  const valores = nombres.map(async (nombre) => {
    const response = await fetch(`${api}/${nombre}`);
    const data = await response.json();
    return data.stats;
  })
  const data = await Promise.all(valores);
  return data;
}






function ObtenerPromedio2(habilidades) {
  let promedio = []
  for(let i = 0; i< habilidades.length; i++){
    let fila = habilidades[i]
    let suma = fila.reduce((a,b) => a + b, 0)
    promedio[i] = suma/fila.length
  }
  return promedio
}

const obtenerYMostrarValores = async () => {
  try {
    const data = await ObtenerValores();
    const promedio = await ObtenerPromedio2(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

obtenerYMostrarValores()




//array de nombres de pokemones
let nombresPkm = ['Charmander', 'Pikachu', 'Bulbasaur', 'Squirtle' ]


//matriz habilidades
let habilidades = [
  [80,75,90], //charmander
  [60, 50, 70], //pikachu
  [70, 65, 80], //bulbasaur
  [65, 70, 60] //squirtle
]

//función para obtener el promedio de las habilidades
function ObtenerPromedio(habilidades) {
  let promedio = []
  for(let i = 0; i< habilidades.length; i++){
    let fila = habilidades[i]
    let suma = fila.reduce((a,b) => a + b, 0)
    promedio[i] = suma/fila.length
  }
  return promedio
}

function evaluarAptitud (nombresPkm, promedios){
  
  for(let i = 0; i < promedios.length; i++){
    if(promedios[i] > 70){
      console.log('El pokemon ' + nombresPkm[i] + " Supera el promedio con: " + promedios[i] + " puntos")
    }else{
      console.log('El pokemon ' + nombresPkm[i] + " No supera el promedio con: " + promedios[i] + " puntos")        
    }
  }
}

let promedios = ObtenerPromedio(habilidades)
evaluarAptitud(nombresPkm, promedios)



