import React from 'react'
import { FaSlideshare } from 'react-icons/fa';
import styled, { css } from "styled-components/macro";
import { Button } from './Button';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const HeroSlide = styled.div`

`

const HeroSldier = styled.div`

`

const HeroImage = styled.img`

`

const HeroContent = styled.div`
`

const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButtons = styled.div``;
const PrevArrow = styled.div``;
const NextArrow = styled.div``;

const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              <HeroSldier>
                <HeroImage />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button to={slide.path} primary="true">{slide.label}<Arrow/></Button>
                </HeroContent>
              </HeroSldier>
            </HeroSlide>
          )
        })}
        <SliderButtons><PrevArrow /><NextArrow /></SliderButtons>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
