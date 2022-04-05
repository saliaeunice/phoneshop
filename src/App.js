import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom"
import Product from './components/Product'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    
    <Route path='/' element={ <Home/>}/>
    <Route path='/product' element={ <Product/>}/>
   
    </Routes>
    </>
  )
}

export default App