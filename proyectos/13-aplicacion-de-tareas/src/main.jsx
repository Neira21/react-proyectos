import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TareaProvider } from './context/TareaContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <TareaProvider>
    <App />
  </TareaProvider>
)
