import React from 'react'

const Menu = () => {
  return (
    <section id="menu">
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <h1 className='text-4xl font-bold text-center text-cyan-500 mb-4 md:mb-24'>EL MUSIC</h1>
        <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
          <div className='group'>
            <a href="#">ABOUT US</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 border-black opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className='group'>
            <a href="#">BUSINESS</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 border-black opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className='group'>
            <a href="#">NEWS</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 border-black opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className='group'>
            <a href="#">CONTACT</a>
            <div className="mx-2 mt-2 duration-500 border-b-2 border-black opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu