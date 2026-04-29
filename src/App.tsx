//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import  ProductPage  from './pages/ProductPage';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
