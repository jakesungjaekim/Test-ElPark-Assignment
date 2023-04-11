import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chart from './pages/Chart'
import Detail from './pages/Detail'



const Router = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chart />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router