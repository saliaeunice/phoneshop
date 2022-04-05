import React from 'react'
import {FaHubspot} from "react-icons/fa"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='header'>
    <FaHubspot className='icon'/>
    <h2>Mwinnome Wireless Accessories</h2>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/product">Products</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    </ul>
    </div>
  )
}

export default NavBar