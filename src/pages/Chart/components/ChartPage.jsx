import React from 'react'
import Menu from './Menu'
import Search from './Search'

const ChartPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white md:bg-cyan-50'>
      <div className="w-9/12 px-2 py-4 space-y-10 bg-white m-7 md:shadow-2xl rounded-3xl md:w-11/12 md:p-40 ">
        <Menu />
        <Search />
      </div>
    </div>
  )
}
export default ChartPage