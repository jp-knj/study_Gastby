import styled from "styled-components"

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;
`
export const HeaderInner = styled.div`
  width: 1560px;
  height: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px){
  width: 100%;
  min-width: 100%;
  }

`
export const HeaderLogo = styled.a`
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
  color: #000000;
  text-decoration: none;
  font-weight: 700;
`
export const HeaderMenu = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
