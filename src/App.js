import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import { AppProvider } from './AppContext'

export default function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/product' element={<Product />}/>
            </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}
