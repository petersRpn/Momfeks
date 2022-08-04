import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CartScreen from './components/screens/CartScreen/cartScreen'
import ProductScreen from './components/screens/productScreens/ProductScreen'

export default function App() {
  return (
    <div className='grid-container'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/product/' element={<ProductScreen/>}></Route>
          <Route path='/product/:id' element={<ProductScreen/>}></Route>
          <Route path='/cart' element={<CartScreen/>}></Route>
          <Route path='/cart/:id' element={<CartScreen/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  </div>
  )
}
