import React from 'react'
import Header from '../Components/Header'
import Teachstack from '../Components/Tech/Teachstack'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
     <Header/>
     <Teachstack/>
     <About/>
     <Contact/>
    </div>
  )
}

export default Home
