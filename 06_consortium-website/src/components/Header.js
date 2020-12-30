import React from "react";
// import { Link } from "react-router-dom";

// Styled Components
import { HeaderNav, HeaderWrapper, HeaderLogo, HeaderMenu } from '../styles/headerStyles';

const Header = () => {
  return (
    <>
      <HeaderNav>
        <HeaderWrapper>
          <HeaderLogo>YNC.</HeaderLogo>
          <HeaderMenu>Menu</HeaderMenu>
        </HeaderWrapper>
      </HeaderNav>
    </>
  )
};

export default Header;
