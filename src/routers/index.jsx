import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageLayout from '../layouts/HomePageLayout'
import Home from '../pages/Home'


const Routers = () => {
  return (
    <Routes>
        <Route element={<HomePageLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
    </Routes>
  )
}

export default Routers
