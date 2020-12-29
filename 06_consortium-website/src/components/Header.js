import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header_inner'>
            <div className='header_logo'><Link to='/' exact>YNC.</Link></div>
            <div className='header_menu'><button>Menu</button></div>
        </div>
      </div>
    </>
  )
};

export default Header;
