import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './src/App'
import { ContextFilterProvider } from './src/context/ContextFilter'

ReactDOM.createRoot(document.getElementById('app')).render(
  <ContextFilterProvider>
    <App />
  </ContextFilterProvider>
)
