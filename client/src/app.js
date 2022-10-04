import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CartScreen from './components/screens/CartScreen/cartScreen'
import OrderHistoryScreen from './components/screens/OrderHistoryScreen/OrderHistoryScreen'
import OrderScreen from './components/screens/OrderScreen/OrderScreen'
import PaymentMethodScreen from './components/screens/PaymentMethodScreen/PaymentMethodScreen'
import PlaceOrderScreen from './components/screens/PlaceOrderScreen/PlaceOrderScreen'
import ProductScreen from './components/screens/productScreens/ProductScreen'
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen'
import ShippingAddressScreen from './components/screens/ShippingAddressScreen/ShippingAddressScreen'
import SigninScreen from './components/screens/SigninScreen/SigninScreen'

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
          <Route path='/signin' element={<SigninScreen/>}></Route>
          <Route path='/register' element={<RegisterScreen/>}></Route>
          <Route path='/shipping' element={<ShippingAddressScreen/>}></Route>
          <Route path='/payment' element={<PaymentMethodScreen/>}></Route>
          <Route path='/placeorder' element={<PlaceOrderScreen/>}></Route>
          <Route path='/orderhistory' element={<OrderHistoryScreen/>}></Route>
          <Route path="/order/:id" element={<OrderScreen />}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
  </div>
  )
}
