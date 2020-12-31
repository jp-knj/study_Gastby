import React from "react";
import { HeaderInner, HeaderWrapper, HeaderLogo, HeaderMenu } from '../styles/headerStyles'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderLogo>
          YNC.
        </HeaderLogo>
        <HeaderMenu>
          X
        </HeaderMenu>
      </HeaderInner>
    </HeaderWrapper>
  );
};
export default Header;
