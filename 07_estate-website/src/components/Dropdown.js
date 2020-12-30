import React from 'react';
import styled from "styled-components";
import { Button } from './Button';

const Dropdown = () => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            <DropdownLink to={item.link} key={index}>{ item.title}</DropdownLink>
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary='true' round='true' big='true' to='/contact'>Contact Us</Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown
