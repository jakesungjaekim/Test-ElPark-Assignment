import React, { useState, useRef } from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const navToggle = () => {
    setOpen(!open)
    menuRef.current.classList.toggle('flex')
  }

  return (
    <section id="menu" ref={menuRef}>
      <div className='flex flex-col items-start justify-center w-full lg:flex-row md:justify-between md:items-center'>
        <div className='flex flex-row items-center justify-between w-full'>
          <h1 className='mb-4 text-4xl font-bold text-center text-cyan-500 md:mb-24'>EL MUSIC</h1>
            {/* Hamberger Menu Icon */}
          <div className="lg:hidden md:mb-24">
            <button
              id="menu-btn"
              type="button"
              className={`z-40 block hamburger lg:hidden focus:outline-none ${open ? 'open' : ''}`}
              onClick={navToggle}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>

        <div className={`w-full flex-col items-start justify-center space-y-3  md:items-center lg:flex md:flex-row md:space-y-0 md:space-x-8 md:mb-24 lg:justify-end ${open ? 'flex' : 'hidden'}`}>
          <div className='group'>
            <a href="#">ABOUT US</a>
            <div className="chartMenu"></div>
          </div>
          <div className='group'>
            <a href="#">BUSINESS</a>
            <div className="chartMenu"></div>
          </div>
          <div className='group'>
            <a href="#">NEWS</a>
            <div className="chartMenu"></div>
          </div>
          <div className='group'>
            <a href="#">CONTACT</a>
            <div className="chartMenu"></div>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Menu
