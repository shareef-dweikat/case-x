import * as React from "react";
import styled from "styled-components";
import { Option } from "./choices";
import { colors } from "src/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.dark};
  text-align: center;
`;

const Colour = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 0.5px solid grey;
  ${(props: { hex?: string }) =>
    props.hex !== undefined ? `background: ${props.hex}` : ""};
`;

interface Props {
  option: Option;
}

const ColorInnerComponent = (props: Props) => {
  const { option } = props;
  return (
    <Container>
      <Colour hex={option.hex} />
      <Title>{option.optionName}</Title>
    </Container>
  );
};

export default ColorInnerComponent;
