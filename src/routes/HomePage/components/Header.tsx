import * as React from "react";
import styled from "styled-components";
import { colors } from "../../../theme";
// import CasexLogo from "../../../resources/casex_logo.png";
// import KickStarterBlackLogo from "../../../resources/kickstarter_logo_black.png";
import ShoppingCartWhite from "../../../resources/cart-white.png";
import ShoppingCartBlack from "../../../resources/a1_shopping_cart_logo.png";

import { isDevEnvironment } from "src/utils/router";
import { NavLink } from "react-router-dom";
import './header.css'
// import { scrollTo } from "../../../utils";

const Header = styled.header`
  width: 100%;
  padding-left:20px;
  padding-right:50px;
  position: fixed;
  top: 0;
  display: flex;
  background-color: ${(props: { change: boolean }) =>
    props.change ? colors.background_light : ""};
  height: 50px;
  z-index: 100;
`;

interface HeaderElementProps {
  where: string;
}

const HeaderElement = styled.div<HeaderElementProps>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.where};
  align-items: center;
  font-family: "HelveticaNeue-CondensedBold", "Helvetica", "Arial", sans-serif;
  
`;
const HeaderElementMenu = styled.div<HeaderElementProps>`
  width: 20%;
  display: flex;
  font-size:1.5vw;
  justify-content: ${props => props.where};
  align-items: center;
  font-family: "HelveticaNeue-CondensedBold", "Helvetica", "Arial", sans-serif;
  font-weight:bold
`;
const HeaderLogoImage = styled.img`
  height: 18px;
  margin-left: 105px;
  height:25px
  :hover {
    cursor: pointer;
  }
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;

const HamburgerLine = styled.div`
  background: ${(props: { color: string }) => props.color};
  width: 19px;
  height: 2px;
  margin: 1.5px;
  
`;

interface Props {
  change: boolean;
  homePage: boolean;
  showHamburger: (event: React.MouseEvent<HTMLDivElement>) => void;
  history: {
    push: (route: string) => void;
  };
}

interface State {
  showHamburger: boolean;
}

class HeaderComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showHamburger: false
    };
  }

  // private scrollTo(section: string) {
  //   scrollTo(section);
  // }

  public render() {
    const HamburgerMenuColor= this.props.change?colors.background_dark:colors.background_light
    return (
      <Header change={this.props.change}>
        <HeaderElement where="flex-start">
          {/* <HamburgerMunu show={this.state.showHamburger} /> */}
          <HamburgerContainer onClick={this.props.showHamburger}>
            <HamburgerLine color={HamburgerMenuColor} />
            <HamburgerLine color={HamburgerMenuColor} />
            <HamburgerLine color={HamburgerMenuColor} />
          </HamburgerContainer>
          {/* <HeaderLogoImage
            onClick={() => {
              isDevEnvironment
                ? this.props.history.push("/")
                : this.scrollTo("casex");
            }}
            src={CasexLogo}
          /> */}
                  <div className={this.props.change?
                                  'moving-nav-link':'nav-link'
                                  } 
                       style={{marginLeft:46}}>
                         
                  CASE X
                  </div>
        </HeaderElement>
       
        <HeaderElement where="flex-end">
        <HeaderElementMenu where="center">
          <NavLink to="/home" className={this.props.change?'moving-nav-link':'nav-link'} activeClassName="activeList">HOW</NavLink>
        </HeaderElementMenu>
        <HeaderElementMenu where="center">
          <NavLink to="/what" className={this.props.change?'moving-nav-link':'nav-link'} activeClassName="activeList">WHAT</NavLink>
        </HeaderElementMenu>
        <HeaderElementMenu where="center">
          <NavLink to="/who" className={this.props.change?'moving-nav-link':'nav-link'} activeClassName="activeList">WHO</NavLink>
        </HeaderElementMenu>
        <HeaderElementMenu where="center">
          <NavLink to="/contact" className={this.props.change?'moving-nav-link':'nav-link'} activeClassName="activeList">CONTACT</NavLink>
        </HeaderElementMenu>

          {this.props.homePage ? (
            <HeaderLogoImage
              src={this.props.change?ShoppingCartBlack:ShoppingCartWhite}
              onClick={
                isDevEnvironment
                  ? () => {
                      this.props.history.push("/product");
                      window.scrollTo(0, 0);
                    }
                  : () => null
              }
            />
          ) : (
            ""
          )}
          {/* <HeaderLogoImage src={KickStarterBlackLogo} /> */}
        </HeaderElement>
      </Header>
    );
  }
}

export default HeaderComponent;
