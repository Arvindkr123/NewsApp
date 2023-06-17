import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './components/News.jsx'
import Product from './components/Product.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<News/>}></Route>
              <Route path='/product' element={<Product/>}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
