import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Carreer from '../Pages/Carreer'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<About/>}></Route>
      <Route path='/contactus' element={<Contact/>}></Route>
      <Route path='/carreers' element={<Carreer/>}></Route>
    </Routes>
  )
}

export default Allroutes
