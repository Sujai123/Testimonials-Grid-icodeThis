import React from 'react'
import Header from './components/Header'
import './app.css'
import ProductsContainer from './components/Products/ProductsContainer'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Header />
      <ProductsContainer />
    </div>
  )
}

export default App