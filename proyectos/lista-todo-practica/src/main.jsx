import ReactDOM from 'react-dom/client'
//import App from './App.jsx'

import './index.css'

import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
// para App correr el servidor con:
// npx json-server -p 3500 -w data/db.json

ReactDOM.createRoot(document.getElementById('root')).render(
    //<App4 />
    <App5 />
)
