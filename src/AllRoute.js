import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const AllRoute = () => {
  return (
    <>
       <Navbar/>
       <Routes>
          <Route path='/' element={ <Home/>}/>
       </Routes>
      
    </>
  )
}

export default AllRoute