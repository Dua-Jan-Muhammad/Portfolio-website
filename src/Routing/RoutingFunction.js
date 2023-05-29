import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from '../Screens/Home'

import React from 'react'

function RoutingFunction() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
    </BrowserRouter>
  )
}

export default RoutingFunction