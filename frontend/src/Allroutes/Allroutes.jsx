import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<About/>}></Route>
      <Route path='/contactus' element={<Contact/>}></Route>
    </Routes>
  )
}

export default Allroutes
