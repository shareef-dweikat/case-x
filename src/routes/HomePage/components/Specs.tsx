import * as React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../../theme";

import { DescContainer, DescSubtitle } from "./Descriptions";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  background: ${colors.background_light};
`;

const SpecsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SpecRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  flex-direction: ${(props: { backwards?: boolean }) =>
    props.backwards ? "row-reverse" : "row"};

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    flex: 1 1 1;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const SpecImage = styled.img`
  width: 50%;
  height: 50%;
  min-height: 350px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
    min-height: unset;
  }

  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
`;

const SpecSubtitle = styled(DescSubtitle)`
  max-width: 300px;
  text-align: center;
  & span {
    font-weight: bold;
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const SpecsDescriptionContainer = styled.div`
  width: 50%;
  max-height: 37vw;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: 50px 25px;
    max-height: unset;
    min-height: inherit;
  }
`;

interface Item {
  imageSrc: string;
  title: JSX.Element;
  desc: JSX.Element;
}

interface Props {
  items: Item[];
  reverse?: boolean;
}

const Specs = (props: Props) => {
  return (
    <Container id="specs">
      {/* <DescTitle>SPECS</DescTitle> */}
      <SpecsContainer>
        {props.items.map((item, idx) => {
          idx++;
          return (
            <>
              <SpecRow
                key={idx}
                backwards={props.reverse ? (idx - 1) % 2 === 0 : idx % 2 === 0}
              >
                <SpecImage src={item.imageSrc} />
                <SpecsDescriptionContainer>
                  <SpecSubtitle>{item.title}</SpecSubtitle>
                  <DescContainer>{item.desc}</DescContainer>
                </SpecsDescriptionContainer>
              </SpecRow>
            </>
          );
        })}
      </SpecsContainer>
      {/* <DescContainer>
        <p>
          <i>Coders and designers, creators and artists, we welcome you</i>
        </p>
      </DescContainer> */}
    </Container>
  );
};

export default Specs;
