import React from 'react'
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='nav'>
        <h2>TUNG STORE</h2>
        <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/Galleri">Produkter</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar