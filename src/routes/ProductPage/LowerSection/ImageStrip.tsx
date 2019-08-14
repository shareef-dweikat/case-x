import * as React from "react";
import styled from "styled-components";

import image1 from "src/resources/productPage/imagestrip/white_side.png";
import image2 from "src/resources/productPage/imagestrip/front_black.png";
import image3 from "src/resources/productPage/imagestrip/colourfulLogo.jpg";
import image4 from "src/resources/productPage/imagestrip/side.png";
import image5 from "src/resources/productPage/imagestrip/colors.jpg";

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap;
  flex: 1 1 1; */
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Image = styled.img`
  margin: 0 auto 25px auto;
  height: 180px;
  width: auto;
  min-width: 150px;

  /* :nth-of-type(3) {
    width: 150px;
  } */

  /* :first-of-type {
    margin-left: 0;
  }

  @media (min-width: 826px) {
    :last-of-type {
      margin-right: 0;
    }
  }
  @media (min-width: 700px) and (max-width: 826px) {
    :nth-of-type(4) {
      margin-right: 0;
    }
  }
  @media (min-width: 550px) and (max-width: 700px) {
    :nth-of-type(3) {
      margin-right: 0;
    }
  }
  @media (max-width: 550px) {
    :nth-of-type(2) {
      margin-right: 0;
    }
    :nth-of-type(3) {
      margin-left: 0;
    }
    :nth-of-type(4) {
      margin-right: 0;
    }
  } */
`;

export default () => {
  return (
    <ImageContainer>
      <Image src={image1} />
      <Image src={image2} />
      <Image src={image3} />
      <Image src={image4} />
      <Image src={image5} />
    </ImageContainer>
  );
};
