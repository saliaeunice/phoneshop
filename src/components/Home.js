import React from 'react'
import Phones from "../pics/Phones.jpg"
import HeadPhones from "../pics/HeadPhones.jpg"
import Drives from "../pics/Drives.jpg"
import PhoneCases from "../pics/PhoneCases.jpg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='products'>
    <div className='firstrow'>
    <div className='card'>
    <h2>Smart Phones</h2>
    <img src={Phones} alt=""/>
    <p>We sell all your choice of smart phones at an affordable prices</p>
    <button><Link to="/product">View Phones</Link></button>
    </div>

    <div className='card'>
    <h2>Smart HeadPhones</h2>
    <img src={HeadPhones} alt=""/>
    <p>We sell all your choice of smart Headphones at an affordable prices</p>
    <button><Link to="/product">View HeadPhones</Link></button>
    </div>
    </div>

    <div className='secondrow'>
    <div className='card'>
    <h2>Phone Covers</h2>
    <img src={PhoneCases} alt=""/>
    <p>We sell all your choice of smart PhoneCases at an affordable prices</p>
    <button><Link to="/product">View Phone Covers</Link></button>
    </div>

    <div className='card'>
    <h2>Flash Drives</h2>
    <img src={Drives} alt=""/>
    <p>We sell all your choice of Pendrives at an affordable prices</p>
    <button><Link to="/product">View Flash Drives</Link></button>
    </div>
    </div>
    </div>
  )
}

export default Home