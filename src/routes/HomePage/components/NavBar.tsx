import * as React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../../theme";

import { distanceFromTop, scrollTo } from "../../../utils";

const Container = styled.div`
  width: 100%;
`;

interface NavProps {
  fix: boolean;
  changeColor: boolean;
  changeBackgroundColor: boolean;
}

const NavBarComponent = styled.div<NavProps>`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
  margin: 0 10%;
  ${props => (props.fix ? `position: fixed; top: 0;` : ``)};
  color: ${colors.background_dark};
  background: rgba(0, 0, 0, 0);
  @media (max-width: 1000px) {
    flex-direction: row-reverse;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavSpacer = styled.div`
  width: 100%;
  height: 50px;
  background: rgb(0, 0, 0, 0);
  ${(props: { fix: boolean }) =>
    props.fix ? "display: block" : "display: none"};
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

const BreakDiv = styled.div`
  background: ${colors.primary};
  height: 20px;
  width: 1px;
  margin: 10px;
  -webkit-transition: all ease 4s;
  -moz-transition: all ease 4s;
  transition: all ease 4s;
`;

export const NavLink = styled.div`
  margin: 10px;
  margin-top: 14px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Avenir";
  font-size: 0.7em;
  &:hover {
    color: ${colors.primary};
    cursor: pointer;
  }
  -webkit-transition: transform ease 4s;
  -moz-transition: transform ease 4s;
  transition: transform ease 4s;
`;

interface Props {
  scrollPosition: number;
}

interface State {
  distanceFromTop: number;
}

class NavBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      distanceFromTop: 0
    };
  }

  private scrollTo(section: string) {
    scrollTo(section);
  }

  public componentDidMount() {
    this.setState({ distanceFromTop: distanceFromTop("navbar") });
  }

  public render() {
    const isFixed =
      this.props.scrollPosition !== 0 &&
      this.props.scrollPosition > this.state.distanceFromTop;
    const changeBackgroundColor =
      this.props.scrollPosition !== 0 &&
      this.props.scrollPosition > this.state.distanceFromTop - 50;
    const changeColor =
      this.props.scrollPosition !== 0 &&
      this.props.scrollPosition > this.state.distanceFromTop + 50 &&
      this.props.scrollPosition < this.state.distanceFromTop + 200;
    return (
      <Container>
        <NavBarComponent
          id="navbar"
          fix={isFixed}
          changeColor={changeColor}
          changeBackgroundColor={changeBackgroundColor}
        >
          <NavLinkContainer>
            <NavLink onClick={this.scrollTo.bind(this, "casex")}>
              Case X
            </NavLink>
            <BreakDiv />
            <NavLink onClick={this.scrollTo.bind(this, "our-design")}>
              The Process
            </NavLink>
            <NavLink onClick={this.scrollTo.bind(this, "for-engineers")}>
              The Audience
            </NavLink>
            <NavLink onClick={this.scrollTo.bind(this, "team")}>
              The Team
            </NavLink>
            <NavLink onClick={this.scrollTo.bind(this, "contact")}>
              Contact Us
            </NavLink>
          </NavLinkContainer>
        </NavBarComponent>
        <NavSpacer fix={isFixed} />
      </Container>
    );
  }
}

export default NavBar;
