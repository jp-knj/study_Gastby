import React from "react";
import { BannerSection, BannerWrapper, Row, Line, BtnRow} from "../../styles/homeStyles";

const Banner = () => {
  return (
    <BannerSection>
      <BannerWrapper>
        <Row>
          <Line><span>Creating unique brands is</span></Line>
          <Line><span>what we do.</span></Line>
        </Row>
        <BtnRow><a href='/'>More about us</a></BtnRow>
      </BannerWrapper>
    </BannerSection>
  );
};

export default Banner;
