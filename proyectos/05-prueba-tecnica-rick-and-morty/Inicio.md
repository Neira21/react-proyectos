npm install @vitejs/plugin-react -E
npm install react react-dom -E

# Crear Archivo vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()]
})



Documentación de la api (Revisar)
https://rickandmortyapi.com/documentation

Requerimientos

- Una filtración según el tipo de personaje
- Una filtración según el estado del personaje
- Botones de navegación para ir a la página anterior y siguiente de la lista de personajes
- Mostrar la información de cada personaje
- Mostrar la información de cada personaje en un modal
- Mostrar un loader mientras se hace la petición
- Mostrar un mensaje de error si la petición falla


Puntos
- Utilizar custom hooks
- componentes 


Primera iteración:
- Evitar que se haga la misma búsqueda dos veces seguidas
- La búsqueda se debe hacer automáticamente al escribir
- Evita que se haga la búsqueda continuamente al escribir( debounce )