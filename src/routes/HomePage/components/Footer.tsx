import * as React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../../theme";

import casexLogo from "../../../resources/casex_logo_reverse.svg";
import insta from "../../../resources/insta.png";
import twitter from "../../../resources/twitter.png";
import facebook from "../../../resources/facebook.png";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${colors.background_light};
  font-family: "FreightProBook";
  font-style: italic;
  background: ${colors.background_dark};
  width: 100%;
  height: 100px;
  font-size: 0.6em;
  padding: 10px 0;
`;

const TextContainer = styled.div`
  text-align: center;
  width: 60%;
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 20px;
  }
`;

const SideContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: ${(props: { position: string }) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  background: rgba(0, 0, 0, 0);
  padding: 0 25px;
`;

const SocialMediaIcon = styled.img`
  height: 20px;
  background: rgba(0, 0, 0, 0);
  margin: 0 5px;
  margin-top: 50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SideContainer position="left">
        <SocialMediaIcon src={casexLogo} />
      </SideContainer>
      <TextContainer>
        Case X is a product of Case X Industries Ltd, registered at Somerset
        House, Strand, London, WC2R1LA. All trademarks and content are
        protected.
      </TextContainer>
      <SideContainer position="right">
        <a href="https://www.instagram.com/case.x/" target="_blank">
          <SocialMediaIcon src={insta} />
        </a>
        <a href="https://twitter.com/officialcasex" target="_blank">
          <SocialMediaIcon src={twitter} />
        </a>
        <a href="https://www.facebook.com/OfficialCaseX" target="_blank">
          <SocialMediaIcon src={facebook} />
        </a>
      </SideContainer>
    </FooterContainer>
  );
};

export default Footer;
