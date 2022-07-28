import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header">
       <div className="leftnav">
        <h1>
            MARUTHI STONEMART
            </h1>
       </div>
       <div className="rightnav">
            <ul className='nav'>
                <li ><NavLink to="/" className="navitem">Home</NavLink></li>
                <li ><NavLink to="/products" className="navitem">Products</NavLink></li>
                <li ><NavLink to="/about" className="navitem">About</NavLink></li>
            </ul>
                <button className="navitembtn"><NavLink to="/contact" className='contactbtn'>Contact Us</NavLink></button>
       </div>
    </div>
  )
}

export default Navbar