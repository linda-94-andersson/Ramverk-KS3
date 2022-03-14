import { useState } from 'react'
import Cart from './Cart'
import Galleri from './Galleri'
import Navbar from './navbar'

function App() {

  return (
    <div className='App'>
    <Navbar />
    <img src="" alt="product-promotion" />
    <h1>Välkommen till TUNGSTORE</h1>
    <p>Vi har fullt på bilen i grejor</p>
    <p>Mycket prisvärt</p>

    <span>Klicka här för att se vår klipp</span>
    <button>Se våra klipp</button>

    <Galleri />
    <Cart />
    </div>
  )
}

export default App
