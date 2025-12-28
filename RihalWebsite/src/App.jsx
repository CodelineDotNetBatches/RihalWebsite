import { useState } from 'react'

import './App.css'
import ProductsHero from './Components/Products_Components/hero_components/ProductsHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductsHero />
       
    </>
  )
}

export default App
