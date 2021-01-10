import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <div className='header_wrap'>
          <div className='header_logo'>
            <NavLink to='/' exact>YNC.</NavLink>
          </div>
          <div className='header_menu'>Menu</div>
      </div>
    </div>
  );
};
export default withRouter(Header);
