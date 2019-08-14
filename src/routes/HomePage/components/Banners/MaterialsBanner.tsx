import * as React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../../theme";

const MaterialsBannerContainer = styled.div`
  min-height: 175px;
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
  justify-content: center;
  min-height: 75px;
  min-width: 150px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 25%;
  }
`;

const Value = styled.div`
  color: ${(props: { color?: string }) => props.color};
  font-size: 1.6em;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;

  > img {
    height: 40px;
  }

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

interface BannerItem {
  value: JSX.Element;
  desc: string;
}

interface Props {
  BannerItems: BannerItem[];
  primaryColor: string;
}

const MaterialsBanner = (props: Props) => {
  return (
    <MaterialsBannerContainer>
      {props.BannerItems.map((item, idx) => (
        <Item key={`item-${idx}`}>
          <Value key={`value-${idx}`} color={props.primaryColor}>
            {item.value}
          </Value>
          <MiniDesc key={`desc-${idx}`}> {item.desc}</MiniDesc>
        </Item>
      ))}
    </MaterialsBannerContainer>
  );
};

export default MaterialsBanner;
