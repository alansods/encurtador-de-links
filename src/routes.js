import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import MeusLinks from './pages/MeusLinks'

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meus-links" element={<MeusLinks/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp