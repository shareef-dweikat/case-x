import * as React from "react";
import styled from "styled-components";

const TeaserTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const TeaserTextTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  color: #000000;
`;

const Underline = styled.div`
  background: #000000;
  height: 3px;
  width: 490px;
  margin: 12.5px 0;
`;

const TeaserTextDescription = styled.div`
  font-size: 14px;
  font-weight: 200;
  color: #000000;
  letter-spacing: 0.3px;
`;

export default () => {
  return (
    <TeaserTextContainer>
      <TeaserTextTitle>Convenient, fast and powerful</TeaserTextTitle>
      <Underline />
      <TeaserTextDescription>
        CaseX keeps your design sleek and your profile discrete. Solid state
        drive totally outperform traditional hard drives, allowing for an
        external connection that rivals that of any other drive currently on the
        market. Integrated with a USB Type C interface, you can rely on write
        speed up to 10 GBps
      </TeaserTextDescription>
    </TeaserTextContainer>
  );
};
