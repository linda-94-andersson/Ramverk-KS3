import React from 'react'

function CartItem() {
  return (
    <div className='Cart-item'>
        <img src="" alt="shop-item" />
        <h1>Produkt</h1>
        <h2>599kr</h2>
        <button>Ta bort produkt</button>
        <button>-</button>
        <span>1</span>
        <button>+</button>
    </div>
  )
}

export default CartItem