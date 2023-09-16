## Enunciado

Crear una aplicación con películas

API a usar:

- https://omdbapi.com/
- API_KEY: 4287ad07 
- API_KEY: ce6a0e6f

Requerimientos

- 👍 Se debe mostrar un input para buscar la película y un botón para buscar
- 👍 Lista las películas encontradas y muestra el título, año y poster de la película
- 👍 Haz que las películas se muestren en un grid responsive

Primera iteración:
- Evitar que se haga la misma búsqueda dos veces seguidas
- La búsqueda se debe hacer automáticamente al escribir
- Evita que se haga la búsqueda continuamente al escribir( debounce )



Apuntes:
Leer todos los campos en un método
- codigo js
```js
const handleSubmit = (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    console.log(fields)
  }

//Leer un campo, se coloca un name en el input para identificarlo
const handleSubmit = (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const search = fields.get('search')
    console.log(search)
  }
```


//import { useRef } from 'react' Uso del hook useRef
/*
  const ref = useRef('')
  console.log(ref.current.value)
*/