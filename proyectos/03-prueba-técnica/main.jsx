import React from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './src/App.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
  <App />
)
