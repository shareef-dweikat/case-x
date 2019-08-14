import * as React from "react";
import styled from "styled-components";
import { colors } from "src/theme";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 25px;
`;

// const Label = styled.div`
//   font-weight: 400;
//   font-size: 32px;
//   color: ${colors.dark};
//   margin-right: 10px;
// `;

const Value = styled.div`
  font-weight: 400;
  font-size: 32px;
  color: ${colors.dark};
  margin-bottom: 7.5px;
`;

interface Props {
  price: number;
}

const PriceComponent = (props: Props) => {
  return (
    <Container>
      <Value>${props.price.toFixed(2)}</Value>
    </Container>
  );
};

export default PriceComponent;
