// import * as React from "react";
// import styled from "styled-components";
// import { ChosenOptions, colourDecision } from "./choices";
// import ImageAsync from "react-image-async";

// import whiteImage from "../../resources/productRenders/white_black.png";
// import blackImage from "../../resources/productRenders/black_black.png";
// import blueImage from "../../resources/productRenders/blue_black.png";

// const ProductImage = styled.div`
//   width: 100%;
//   border: 1px solid black;
//   background-image: url(${(props: { image: string }) => props.image});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: 0 0;

//   /* -webkit-transition-delay: 1s;
//   transition-delay: 1s; */

//   -webkit-transition: background ease-in-out 1s;
//   -moz-transition: background ease-in-out 1s;
//   transition: background ease-in-out 1s;
// `;

// const ImageContainer = styled.div`
//   width: 50%;
//   height: 500px;
// `;

// interface Props {
//   chosen: ChosenOptions;
// }

// interface State {
//   currentImage: string;
// }

// class ProductImageComponent1 extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//   }

//   public render() {
//     const { chosen } = this.props;
//     const colourIdx = chosen.colour;
//     const chosenColorOption = colourDecision.options.find(
//       option => option.index === colourIdx
//     );

//     // let image: string;
//     // if (chosenColorOption) {
//     //   const colourLabel = chosenColorOption.label;
//     //   image = require(`../../resources/productRenders/${colourLabel}_black.png`);
//     // } else {
//     //   image = require(`../../resources/productRenders/black_black.png`);
//     // }

//     // let newImage: string;

//     // if (chosenColorOption) {
//     //   const colourLabel = chosenColorOption.label;
//     //   if (colourLabel === "white") {
//     //     image = whiteImage;
//     //   } else if (colourLabel === "black") {
//     //     image = blackImage;
//     //   } else if (colourLabel === "blue") {
//     //     image = blueImage;
//     //   }
//     // }
//     // return <ProductImage image={image} />;
//     return (
//       <ImageAsync src={[whiteImage, blackImage, blueImage]}>
//         {(props: { loaded: boolean }) => {
//           if (props.loaded) {
//             return (
//               <ImageContainer>
//                 <ProductImage image={whiteImage} />
//                 <ProductImage image={blackImage} />
//                 <ProductImage image={blueImage} />
//               </ImageContainer>
//             );
//           }
//           return;
//         }}
//       </ImageAsync>
//     );
//   }
// }

// export default ProductImageComponent1;
