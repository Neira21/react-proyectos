//importar react router
import {  Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Index from './pages/Index'
import Create from './pages/Create';
import View from './pages/View';
import { Store } from './store/Store';

function App() {
  return (
    <>
      <Store>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Index />} />
            <Route path="/create" element={ <Create /> } />
            <Route path="/list/:bookId" element={ <View /> } />
          </Routes>
        </BrowserRouter>
      </Store>
    </>
  )
}

export default App
