import * as React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../theme";
import { scrollTo } from "../utils";

import closeIcon from "../resources/close-icon.png";
import closeIconWhite from "../resources/close-icon-white.png";
// import hamburgerGif from "../resources/hamburger_gif.gif";
import videoVerticalLight from "../resources/HamburgerVidVertical.mp4";
import videoHorizontalLight from "../resources/HamburgerVidHorizontal.mp4";
import videoVerticalDark from "../resources/HamburgerVidVerticalDark.mp4";
import videoHorizontalDark from "../resources/HamburgerVidHorizontalDark.mp4";
import './hamburger.css'

const HamburgerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ContentDiv = styled.div`
  height: 100%;
  width: 66%;
  ${(props: { theme: "dark" | "light" }) =>
    props.theme === "light"
      ? `background: ${colors.background_light}; color: ${
          colors.background_dark
        }`
      : `background: ${colors.background_dark}; color: ${
          colors.background_light
        }`};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: unset;
  }
`;

const InnerContent = styled.div`
  height: 70%;
float:left;
padding-left:100px;
  // display: flex;
  // justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: calc(100% - 50px);
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const NavLink = styled.div`
  margin-top: 20px;
  text-decoration: none;
  font-size: 24px;
  text-transform: uppercase;
  &:hover {
    color: ${colors.primary};
  }

  &:nth-of-type(1) {
    margin-top: 0;
  }
`;

const CloseButton = styled.div`
  height: 20px;
  width: 20px;
  background-image: ${(props: { theme: "dark" | "light" }) =>
    props.theme === "light" ? `url(${closeIcon})` : `url(${closeIconWhite})`};
  background-size: cover;
  background-position: center;
`;

const HamburgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  width: 100%;
  padding: 10px 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  margin-top: 4px;
  margin-left: -20px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Avenir";
`;

// const Footer = styled.div`
//   font-family: "Avenir";
//   font-size: 14px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 20vh;
//   border-top: 1px solid #d8d8d8;

//   @media (max-width: ${breakpoints.tablet}) {
//     display: none;
//   }
// `;

const VideoContainer = styled.video`
  width: 34%;
  height: 100%;
  overflow: hidden;
  object-fit: fill;

  display: ${(props: { vertical: boolean }) =>
    !props.vertical ? "none" : "block"};

  @media (max-width: ${breakpoints.tablet}) {
    display: ${(props: { vertical: boolean }) =>
      props.vertical ? "none" : "block"};
    width: 100%;
  }
`;

interface Props {
  show: boolean;
  theme: "dark" | "light";
  homePage: boolean;
  history: {
    push: (route: string) => void;
  };
  close: () => void;
}

class HamburgerMunu extends React.Component<Props, {}> {
  private async scrollAndClose(section: string) {
    if (!this.props.homePage) {
      await this.props.history.push("/home");
    }
    this.props.close();
    scrollTo(section);
  }

  public render() {
    const { close, theme, show } = this.props;
    return (
      <HamburgerContainer show={show}>
        <ContentDiv theme={theme}>
          <HamburgerHeader>
            <CloseButton theme={theme} onClick={close} />
            <TitleContainer>
              <Title>Case X</Title>
              {/* <LogoImage src={CasexLogo} /> */}
            </TitleContainer>
            <div />
          </HamburgerHeader>
          <InnerContent>
            <NavLinkContainer>
              <NavLink onClick={this.scrollAndClose.bind(this, "casex")}>
                HOME
              </NavLink>
              <NavLink onClick={this.scrollAndClose.bind(this, "shop")}>
                 SHOP
              </NavLink>
              <NavLink onClick={this.scrollAndClose.bind(this, "specs")}>
                SPECIFICATIONS
              </NavLink>
              <NavLink onClick={this.scrollAndClose.bind(this, "contact")}>
                CONTACT
              </NavLink>
              <NavLink
                onClick={this.scrollAndClose.bind(this, "help")}
              >
                HELP
              </NavLink>
              <NavLink
                onClick={this.scrollAndClose.bind(this, "connect")}
              >
                CONNECT
              </NavLink>
            </NavLinkContainer>
            <div style={{marginLeft:32,marginBottom:8}}>Thank you for your support</div>
          <div style={{marginBottom:8,color:"rgba(0,0,0,0.4)"}}>Copyright © 2019 Case X Industries Ltd</div>
          <div>
          <span className='p' style={{width:"50%",float:"right"}}>
            Terms of Sale
            </span>
            <span style={{width:"50%",float:"right"}}>
            Privacy Policy
            </span>
           
          </div>

          </InnerContent>
         
        </ContentDiv>
        <VideoContainer vertical={true} autoPlay={true} loop={true}>
          <source
            src={theme === "light" ? videoVerticalLight : videoVerticalDark}
          />
        </VideoContainer>
        <VideoContainer vertical={false} autoPlay={true} loop={true}>
          <source
            src={theme === "light" ? videoHorizontalLight : videoHorizontalDark}
          />
        </VideoContainer>
      </HamburgerContainer>
    );
  }
}

export default HamburgerMunu;
