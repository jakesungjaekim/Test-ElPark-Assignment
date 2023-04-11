import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ChartPage from './pages/Chart/ChartPage';
import DetailPage from './pages/Detail/DetailPage';



const Router = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChartPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router