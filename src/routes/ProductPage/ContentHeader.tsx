import * as React from "react";
import styled from "styled-components";
// import { navOptions } from "./content";
import { breakpoints } from "src/theme";

const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 20;

  @media (max-width: ${breakpoints.phone}) {
    display: none;
  }
`;

const ContentHeaderInnerContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: flex-end;
  margin-top: 25px;
`;

const CasexTitle = styled.div`
  font-family: "Avenir";
  font-weight: 900;
  font-size: 32px;
`;

// const NavOptionsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 35%;
// `;

// const NavOption = styled.div`
//   font-family: "Avenir";
//   font-size: 12px;
//   color: ${colors.grey};
// `;

export default (props: {}) => {
  return (
    <ContentHeaderContainer>
      <ContentHeaderInnerContainer>
        <CasexTitle>Case X</CasexTitle>
        {/* <NavOptionsContainer>
          {navOptions.map(option => (
            <NavOption>{option.label}</NavOption>
          ))}
        </NavOptionsContainer> */}
      </ContentHeaderInnerContainer>
    </ContentHeaderContainer>
  );
};
