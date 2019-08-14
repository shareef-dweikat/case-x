import * as React from "react";
import styled from "styled-components";
import Teaser from "./Teaser";
import ImageStrip from "./ImageStrip";

const LowerSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <LowerSectionContainer>
      <Teaser />
      <ImageStrip />
    </LowerSectionContainer>
  );
};
