import React from 'react'
import Menu from './components/Menu'
import Search from './components/Search'

const ChartPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-cyan-50'>
      <div className="w-9/12 p-6 m-3 space-y-10 bg-white shadow-2xl rounded-3xl md:p-40 ">
        <Menu />
        <Search />
      </div>
    </div>
  )
}

export default ChartPage