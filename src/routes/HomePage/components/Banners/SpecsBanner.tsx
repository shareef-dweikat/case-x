import * as React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../../theme";

const DarkBannerContainer = styled.div`
  height: 100px;
  border-top-style:solid;
  border-bottom-style:solid;
  border-width:1px;
  border-color:gray;
  background: ${colors.background_light};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    flex: 1 1 1;
    flex-direction: column;
    align-items: center;
    padding: 25px 25px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75px;
  margin-top:1%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 25%;
  }

  @media (max-width: 800px) {
    :nth-of-type(2n) {
      justify-content: flex-end;
    }
  }
`;

const Value = styled.div`
  color: ${(props: { color?: string }) => props.color};
  font-size: 28px;
  width: 100%;
  color:gold;
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
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.phone}) {
    font-size: 20px;
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

const DarkBanner = (props: Props) => {
  return (
    <DarkBannerContainer>
      {props.BannerItems.map((item, idx) => (
        <Item key={`item-${idx}`}>
          <Value key={`value-${idx}`} color={props.primaryColor}>
            {item.value}
          </Value>
          <MiniDesc key={`desc-${idx}`}> {item.desc}</MiniDesc>
        </Item>
      ))}
    </DarkBannerContainer>
  );
};

export default DarkBanner;
