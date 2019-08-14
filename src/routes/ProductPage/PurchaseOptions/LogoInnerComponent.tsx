import * as React from "react";
import styled from "styled-components";
import { Option } from "./choices";
import { colors } from "src/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.dark};
  text-align: center;
`;

// const Logo = styled.img`
//   height: 30px;
//   width: 50px;
// `;

// const ExtraPrice = styled.div`
//   z-index: 10;
//   border-radius: 50%;
//   background: ${colors.highlighted};
//   color: white;
// `;

interface Props {
  option: Option;
}

const LogoInnerComponent = (props: Props) => {
  const { option } = props;
  return (
    <Container>
      <Title>{option.optionName}</Title>
      {/* <Logo src={casexLogo} /> */}
      {/* {option.price ? <ExtraPrice>+{option.price}</ExtraPrice> : ""} */}
    </Container>
  );
};

export default LogoInnerComponent;
