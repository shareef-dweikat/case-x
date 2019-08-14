import * as React from "react";
import styled from "styled-components";
import { ChosenOptions, colourDecision, logoDecision } from "./choices";
import ImageAsync from "react-image-async";
import { breakpoints } from "src/theme";

const ImageContainer = styled.div`
  width: 60%;
  height: 100vh;

  @media (max-width: ${breakpoints.phone}) {
    display: flex;
    justify-content: center;
    height: 40vh;
    width: 100%;
  }
`;

// interface ProductImageProps {
//   image: string;
//   // sticky: boolean;
// }

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props: { image: string }) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 0;
  
  -webkit-transition: background ease-in-out 1s;
  -moz-transition: background ease-in-out 1s;
  transition: background ease-in-out 1s;
  
  /* @media (min-width: ${breakpoints.phone}) {
    position: fixed;
    top: 5vw;
    left: 6.6vw;
    width: 48%;
  } */
  @media (min-width: ${breakpoints.phone}) {
    margin-left: -120px;
  }

  @media (max-width: ${breakpoints.phone}) {
    background-position: center;
    margin-top: 50px;
  }
`;

interface Props {
  chosen: ChosenOptions;
  scrollY: number;
}

interface State {
  currentImage: string;
}

class ProductImageComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentImage: require(`../../../resources/productRenders/black_black.jpg`)
    };
  }

  public render() {
    const { chosen } = this.props;
    const colourIdx = chosen.colour;
    const chosenColourOption = colourDecision.options.find(
      option => option.index === colourIdx
    );

    const logoIdx = chosen.logo;
    const chosenLogoOption = logoDecision.options.find(
      option => option.index === logoIdx
    );

    // set up defaults
    const colourLabel: string = chosenColourOption
      ? chosenColourOption.label
      : "black";
    const logoLabel: string = chosenLogoOption
      ? chosenLogoOption.label
      : "black";

    const image = require(`../../../resources/productRenders/${colourLabel}_${logoLabel}.jpg`);

    return (
      <ImageContainer>
        <ImageAsync src={image}>
          {(props: { loaded: boolean }) => {
            if (props.loaded) {
              if (this.state.currentImage !== image) {
                this.setState({ currentImage: image });
              }
              return <ProductImage image={image} />;
            } else {
              return <ProductImage image={this.state.currentImage} />;
            }
          }}
        </ImageAsync>
      </ImageContainer>
    );
  }
}

export default ProductImageComponent;
