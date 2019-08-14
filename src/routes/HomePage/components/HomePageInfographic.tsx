// import * as React from "react";
// import styled from "styled-components";
// import { HomepageInfographics } from "./constants";
// // import { breakpoints } from "src/theme";

// const HomeInfoGraphicBackground = styled.div`
//   background-image: url(${(props: { imageSrc: string }) => props.imageSrc});
//   background-size: cover;
//   background-position-y: 0px;
//   background-position-x: 90%;
//   width: 100vw;
//   height: 40vw;

//   @media (max-width: 750px) {
//     height: 50vh;
//   }
//   @media (max-width: 400px) {
//     height: 75vh;
//   }
// `;

// // interface InfographicTextContainerProps {
// //   textColour: string;
// //   orientation: "wide" | "tall";
// //   backgroundColour: string;
// //   backgroundColourBackup: string;
// // }
// // const InfographicTextContainer = styled.div<InfographicTextContainerProps>`
// //   position: relative;
// //   top: 10%;
// //   left: 10%;
// //   display: flex;
// //   flex-direction: column;
// //   width: 80%;
// //   max-width: 500px;

// //   ${props =>
// //     `color: ${props.textColour}; 
// //     @media(max-width: 950px) {
// //       max-width: ${props.orientation === "wide" ? "500px" : "35%"};}
// //     `};

// //   background: ${props => props.backgroundColour};
// //   padding: 10px;
// //   @media (max-width: 750px) {
// //     max-width: ${props => (props.orientation === "wide" ? "400px" : "300px")};
// //     top: 5%;
// //   }

// //   @media (max-width: ${breakpoints.phone}) {
// //     background: ${props => props.backgroundColourBackup};
// //   }
// // `;

// // const InfographicTextTitle = styled.div`
// //   font-family: "HelveticaNeue-CondensedBold", "Helvetica", "Arial", sans-serif;
// //   font-weight: bold;
// //   color: inherit;
// //   margin-bottom: 5px;
// //   font-size: 20px;
// //   text-transform: uppercase;
// // `;

// // const InfographicTextDescription = styled.div`
// //   font-family: "Helvetica", "Arial", sans-serif;
// //   font-weight: 100;
// //   color: inherit;
// //   font-size: 14px;
// // `;

// interface Props {
//   infographicKey: string;
//   id?: string;
// }

// export default (props: Props) => {
//   const infographicObject = HomepageInfographics.find(
//     graphic => graphic.key === props.infographicKey
//   )!;

//   const {
//     // title,
//     // desc,
//     imageSrc,
//     // textColour,
//     // backgroundColour,
//     // backgroundColourBackup,
//     // orientation
//   } = infographicObject;
//   return (
//     <HomeInfoGraphicBackground id={props.id || ""} imageSrc={"imageSrc"}>
  

              
      
//     </HomeInfoGraphicBackground>
//   );
// };
