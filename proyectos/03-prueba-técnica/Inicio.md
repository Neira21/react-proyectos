# Iniciar proyecto
- Primero con el comando npm create vite@latest
- Colocamos el nombre del proyecto
- Seleccionamos la opción vanilla para crear la configuración vite desde cero
- Luego nos ubicamos en la carpeta del proyecto y ejecutamos el comando para instalar el plugin de react el cual es: npm install @vitejs/plugin-react -E

<h1> asdasd </h1>

# Dependencias
- Instalar las dependencias react y react-dom con el comando: npm install react react-dom -E

# Configuración de Vite
- Creamos el archivo vite.config.js
- En el archivo vite.config.js agregamos el plugin de react del siguiente modo:
```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()]
})
```
# index.html
- Aquí se encuentra el script que nos permite renderizar o cargar la aplicación de react en el navegador 

# main.js
- Es el punto de entrada de la aplicación de react el cual se inicia de la siguiente manera:
```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import './app.css'

const root = createRoot(document.getElementById('app'))
root.render(
    <h1>Hola mundo</h1>
)
```

# Luego antes de empezar con la aplicación, instalar linter para escribir código limpio
- Usar el comando: npm install standar -D
- En el package.json agregar el siguiente script:
```json
"eslintConfig":{
    "extends": "./node_modules/standard/eslintrc.json"
}
```

Empezar con la aplicación

texto color rojo

# Prueba técnica para Juniors y Trainers de React

APIs: 
- Facts random https://catfact.ninja/fact
- imagen random https://catass.com/cat/says/hello

- Facts Random https://cat-fact.herokuapp.com/facts/random
- https://cataas.com/cat/says/{texto}?size=50&color=red&json=true


Recupera un hecho aleatorio de gatos y muestra una imagen de un gato con la primera palabra del hecho en la imagen.


Para realizar tests
- npm install --save-dev jest 
- npm init playwrigth/latest
