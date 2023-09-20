import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const div = document.getElementById('app')

const root = ReactDOM.createRoot(div)
root.render(
  <App />
)
