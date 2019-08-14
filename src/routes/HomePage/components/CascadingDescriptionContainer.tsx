import * as React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../theme";

export const FullWidthDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const OpaqueContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: ${(props: { reverse?: boolean }) =>
    props.reverse ? "row-reverse" : "row"};
  justify-content: space-between;
  padding: 50px 10%;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    flex: 1 1 1;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleOuterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props: { orientation: string }) =>
    props.orientation === "ltr" ? "row" : "row-reverse"};
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const DescTitleContainer = styled.div`
  width: 100px;
  height: 200px;
  ${(props: { display: boolean }) => (props.display ? "" : "display: none")}
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const DescTitle = styled.div`
  ${(props: { orientation: string }) =>
    props.orientation === "ltr"
      ? "  transform: rotate(-90deg); left: -50%;"
      : "  transform: rotate(90deg); left: 50%;"};
  height: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
  color: ${colors.grey};
  position: relative;
  top: 50%;
  text-align: center;
`;

export const DescSubtitleContainer = styled.div`
  display: flex;
  flex-direction: ${(props: { orientation: string }) =>
    props.orientation === "ltr" ? "row" : "row-reverse"};
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const DescSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props: { reverse?: boolean; orientation: string }) =>
    props.reverse ? "align-items: flex-end" : "align-items: flex-start"};
  justify-content: flex-start;
  ${(props: { reverse?: boolean; orientation: string }) =>
    props.orientation === "ltr" ? "padding-right: 25px" : "padding-left: 25px"};
  font-size: 1.3em;
  min-width: 200px;

  & * {
    font-size: 1.6rem;
    font-family: "FreightProBook";
  }

  & > b {
    font-weight: 900;
    font-size: 1.5em;
  }

  & > span:first-of-type {
    font-style: italic;
  }

  & i {
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 0;
  }
`;

const DescOuterContainer = styled.div`
  display: flex;
  /* flex-direction:  */
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  ${(props: { orientation: string }) =>
    props.orientation === "ltr" ? "padding-left: 25px" : "padding-right: 25px"};
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    width: 80%;
  }
`;

const DescInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.grey};
  width: 100%;
  font-size: 1em;
  font-family: "FreightProBook";

  /* & > span { */
  letter-spacing: -1px;
  /* } */

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1em;
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1em;
  }
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

interface Props {
  id?: string;
  sideTitle?: string;
  subtitle: string | JSX.Element;
  description: string | JSX.Element;
  orientation: string;
}

const CascadingDescriptionContiner = (props: Props) => (
  <FullWidthDescriptionContainer>
    <OpaqueContentContainer
      id={`${props.orientation}`}
      reverse={props.orientation === "rtl"}
    >
      <TitleOuterContainer orientation={props.orientation}>
        <DescTitleContainer display={!!props.sideTitle}>
          <DescTitle id={`${props.id || ""}`} orientation={props.orientation}>
            {props.sideTitle}
          </DescTitle>
        </DescTitleContainer>
        <DescSubtitleContainer orientation={props.orientation}>
          <DescSubtitle orientation={props.orientation}>
            {props.subtitle}
          </DescSubtitle>
        </DescSubtitleContainer>
      </TitleOuterContainer>
      <DescOuterContainer orientation={props.orientation}>
        <DescInnerContainer>{props.description}</DescInnerContainer>
      </DescOuterContainer>
    </OpaqueContentContainer>
  </FullWidthDescriptionContainer>
);

export default CascadingDescriptionContiner;
