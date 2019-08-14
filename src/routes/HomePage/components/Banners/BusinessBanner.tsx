import * as React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../../theme";
import { BusinessBar } from "../constants";

const BusinessBannerContainer = styled.div`
  height: 200px;
  background: ${colors.dark};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  flex-wrap: wrap;
  flex: 1 1 1;
  padding: 25px 0;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 25%;
  }

  @media (max-width: 880px) {
    :nth-of-type(2n) {
      justify-content: flex-end;
    }
  }
`;

const Value = styled.img`
  font-size: 1.6em;
  text-align: center;
  margin-bottom: 15px;
  height: 40px;
  width: 40px;

  > span {
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.4em;
  }
`;

const MiniDesc = styled.div`
  color: ${colors.grey};
  text-transform: uppercase;
  font-family: "Avenir";
  font-size: 0.6em;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const BusinessBanner = () => {
  return (
    <BusinessBannerContainer>
      {BusinessBar.map((item, idx) => (
        <Item key={`item-${idx}`}>
          <Value key={`value-${idx}`} src={item.value} />
          <MiniDesc key={`desc-${idx}`}> {item.desc}</MiniDesc>
        </Item>
      ))}
    </BusinessBannerContainer>
  );
};

export default BusinessBanner;
