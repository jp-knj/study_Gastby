import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header_inner'>
          <div className='header_logo'><Link>YNC.</Link></div>
          <div className='header_menu'>Menu</div>
        </div>
      </header>
    </>
  )
}

export default Header;
