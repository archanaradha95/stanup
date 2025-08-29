

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Testimonials from './components/Pages/Testimonials'
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/testimonials' element={<Testimonials/>} />
      <Route path='/ontact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
