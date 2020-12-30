import React from 'react'
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

// Styled Components
import { BannerSection, BannerTitle, BannerBtn } from "../../styles/BannerStyles";

function Banner() {
  return (
    <BannerSection>
      <BannerTitle>
        <h2><span>Creating unique brands is</span><p>what we do.</p></h2>
      </BannerTitle>
      <BannerBtn>
        <a href='/'>More about Works <RightArrow/></a>
      </BannerBtn>
    </BannerSection>
  )
}

export default Banner
