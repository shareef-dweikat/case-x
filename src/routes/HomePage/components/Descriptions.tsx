// import * as React from "react";
// import styled from "styled-components";
// import { breakpoints, colors } from "../../../theme";
// import SpecsBanner from "./Banners/SpecsBanner";
// import CascadingDescriptionContainer from "./CascadingDescriptionContainer";
// import { StatsBar, DescriptionContent } from "./constants";

// // import SleekSwiftImage from "../resources/placeholder_images/render10.png";
// // import MagnaminousImage from "../resources/placeholder_images/render26.png";
// // import YourSpaceImage from "../resources/placeholder_images/render17.png";
// // import WhatsOursImage from "../resources/placeholder_images/render unum1.png";

// // import CasexLogo from "../../../resources/casex_logo.png";

// export const ColumnContentContainer = styled.section`
//   display: flex;
//   background: ${colors.background_light};
//   width: 100%;
//   justify-content: center;
//   @media (max-width: ${breakpoints.tablet}) {
//     flex-wrap: wrap;
//     flex: 1 1 1;
//     flex-direction: column;
//     align-items: center;
//     padding: 25px 0;
//   }
// `;

// export const ColumnInnerContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 300px;
//   min-width: 400px;
//   max-width: 800px;

//   & > div {
//     text-align: center;
//   }

//   @media (max-width: ${breakpoints.tablet}) {
//     text-align: center;
//     height: auto;
//     padding: 25px 0;
//   }
// `;

// const CascadingDescriptionOuterContainer = styled.div`
//   width: 100%;
//   background: ${colors.background_light};
//   @media (max-width: ${breakpoints.tablet}) {
//     padding: 50px 0;
//   }
// `;

// export const DescImage = styled.img`
//   height: 200px;
//   width: 300px;
//   margin: 25px auto;
// `;

// export const DescSubtitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: ${(props: { reverse?: boolean }) =>
//     props.reverse ? "flex-end" : "flex-start"};
//   justify-content: flex-start;
//   font-size: 1.4em;
//   min-width: 200px;

//   & * {
//     font-size: 1.6rem;
//     font-family: "FreightProBook";
//   }

//   & > b {
//     font-weight: 900;
//     font-size: 1.5em;
//   }

//   & > span:nth-of-type(2) {
//     font-style: italic;
//   }

//   & i {
//     font-size: 1.6rem;
//   }

//   @media (max-width: ${breakpoints.tablet}) {
//     align-items: center;
//     margin-bottom: 50px;
//   }
// `;

// const ColumnSubtitle = styled(DescSubtitle)`
//   padding-top:50px;
//   margin-bottom: 50px;
//   align-items: center;
// `;

// export const TopSpacer = styled.div`
//   width: 150px;
// `;

// export const DescContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   color: ${colors.grey};
//   width: 80%;
//   font-size: 1em;
//   font-family: "FreightProBook";
//   max-width: 300px;

//   /* & > span { */
//   letter-spacing: -1px;
//   /* } */

//   @media (min-width: ${breakpoints.desktop}) {
//     font-size: 1.2em;
//   }
//   @media (max-width: ${breakpoints.desktop}) {
//     font-size: 1em;
//   }
//   @media (max-width: ${breakpoints.tablet}) {
//     text-align: center;
//   }
// `;

// // const Logo = styled.img`
// //   height: 100px;
// //   width:60px
// // `;

// const Descriptions = () => (
//   <>
//     <ColumnContentContainer id="casex">
   
  
//       <ColumnInnerContentContainer>
//         {/* <DescTitle id="casex">0 - {`{ INTRO }`}</DescTitle> */}
//         {/* <ColumnSubtitle>
          
//              <b>Case X</b>
          
//         </ColumnSubtitle> */}
//         <DescContainer>
//           We have integrated a high speed solid state drive within an
//           ultra slim protective case to bring you the efficient and effective
//           capacity of your MacBook Pro.
//         </DescContainer>
//       </ColumnInnerContentContainer>

//       <ColumnSubtitle>
//       {/* This Case
//          <Logo src={CasexLogo} /> */}
//       </ColumnSubtitle>

//       <ColumnInnerContentContainer>
//         {/* <DescTitle id="casex">0 - {`{ CASE X }`}</DescTitle> */}
        
//         <DescContainer>
//           The one stop solution to external storage, laptop protection
//           and a polished design that doesn’t break the bank.
//         </DescContainer>
//       </ColumnInnerContentContainer>
//     </ColumnContentContainer>

//     {/* <div style={{fontSize:"10vw",textAlign:"center",margin:"20px 0 20px 0"}}>
//         PLEASE<br/>
//         REMOVE<br/>
//         GAP
//     </div> */}

    
//     <div style={{  backgroundColor:"#eff0f2",
//                   width:"100%",
//                    padding:"0px 50px 0px 50px",
//                      }}
//             >
//          <SpecsBanner
//               BannerItems={StatsBar}
//               primaryColor={colors.background_light}
//           />
//     </div>
//     <CascadingDescriptionOuterContainer>
//       {DescriptionContent.map((content, idx) => (
//         <CascadingDescriptionContainer
//           id={content.id}
//           key={`casc-desc-${idx}`}
//           sideTitle={content.sideTitle}
//           subtitle={content.subtitle}
//           description={content.description}
//           orientation={content.orientation}
//         />
//       ))}
//     </CascadingDescriptionOuterContainer>
   
//   </>
// );

// export default Descriptions;

import * as React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../theme";
import SpecsBanner from "./Banners/SpecsBanner";
import CascadingDescriptionContainer from "./CascadingDescriptionContainer";
import { StatsBar, DescriptionContent } from "./constants";

// import SleekSwiftImage from "../resources/placeholder_images/render10.png";
// import MagnaminousImage from "../resources/placeholder_images/render26.png";
// import YourSpaceImage from "../resources/placeholder_images/render17.png";
// import WhatsOursImage from "../resources/placeholder_images/render unum1.png";

import CasexLogo from "../../../resources/casex_logo.png";

export const ColumnContentContainer = styled.section`
  display: flex;
  background: ${colors.background_light};
  width: 100%;
  justify-content: center;
  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    flex: 1 1 1;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
  }
`;

export const ColumnInnerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  min-width: 400px;
  max-width: 800px;

  & > div {
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    height: auto;
    padding: 25px 0;
  }
`;

const CascadingDescriptionOuterContainer = styled.div`
  width: 100%;
  background: ${colors.background_light};
  @media (max-width: ${breakpoints.tablet}) {
    padding: 50px 0;
  }
`;

export const DescImage = styled.img`
  height: 200px;
  width: 300px;
  margin: 25px auto;
`;

export const DescSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: { reverse?: boolean }) =>
    props.reverse ? "flex-end" : "flex-start"};
  justify-content: flex-start;
  font-size: 1.4em;
  min-width: 200px;

  & * {
    font-size: 1.6rem;
    font-family: "FreightProBook";
  }

  & > b {
    font-weight: 900;
    font-size: 1.5em;
  }

  & > span:nth-of-type(2) {
    font-style: italic;
  }

  & i {
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    margin-bottom: 50px;
  }
`;

const ColumnSubtitle = styled(DescSubtitle)`
  margin-bottom: 50px;
  align-items: center;
`;

export const TopSpacer = styled.div`
  width: 150px;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.grey};
  width: 80%;
  font-size: 1em;
  font-family: "FreightProBook";
  max-width: 300px;

  /* & > span { */
  letter-spacing: -1px;
  /* } */

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.2em;
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1em;
  }
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Descriptions = () => (
  <>
    <ColumnContentContainer id="casex">
      <ColumnInnerContentContainer>
        {/* <DescTitle id="casex">0 - {`{ INTRO }`}</DescTitle> */}
        <ColumnSubtitle>
          <i>
            this is <b>Case X.</b>
          </i>
        </ColumnSubtitle>
        <DescContainer>
          ------- We have integrated a high speed solid state drive within an
          ultra slim protective case to bring you the efficient and effective
          capacity of your MacBook Pro.
        </DescContainer>
      </ColumnInnerContentContainer>
      <ColumnInnerContentContainer>
        {/* <DescTitle id="casex">0 - {`{ CASE X }`}</DescTitle> */}
        <ColumnSubtitle>
          <Logo src={CasexLogo} />
        </ColumnSubtitle>
        <DescContainer>
          ------- The one stop solution to external storage, laptop protection
          and a polished design that doesnâ€™t break the bank.
        </DescContainer>
      </ColumnInnerContentContainer>
    </ColumnContentContainer>
    <SpecsBanner
      BannerItems={StatsBar}
      primaryColor={colors.background_light}
    />
    <CascadingDescriptionOuterContainer>
      {DescriptionContent.map((content, idx) => (
        <CascadingDescriptionContainer
          id={content.id}
          key={`casc-desc-${idx}`}
          sideTitle={content.sideTitle}
          subtitle={content.subtitle}
          description={content.description}
          orientation={content.orientation}
        />
      ))}
    </CascadingDescriptionOuterContainer>
    {/* <OpaqueContentContainer>
      <DescTitle id="casex">0 - {`{ CASE X }`}</DescTitle>
      <DescSubtitle>Convenient, fast and powerful.</DescSubtitle>
      <Spacer />
      <DescContainer>
        ------- CaseX keeps your design sleek and your profile discrete. Solid
        state drives totally outperforms traditional hard drives, allowing for
        an external connection that rivals that of any other drive currently on
        the market. Integrated with a USB Type C interface, you can rely on
        write speeds up to 10 Gbps
      </DescContainer>
    </OpaqueContentContainer>
    <OpaqueContentContainer reverse={true}>
      <DescTitle id="right">1 - {`{ Explore }`}</DescTitle>
      <DescSubtitle>
        <span>Sleek, elegant,</span>
        <span>specialised.</span>
      </DescSubtitle>
      <Spacer />
      <DescContainer>
        ------- Designed specifically for MacBook Pro, CaseX provides the
        affordable solution to protecting your laptop and relieving low hard
        drive space. Whilst adding no more than 8mm depth to your MacBook Pro.
      </DescContainer>
    </OpaqueContentContainer>
    <OpaqueContentContainer>
      <DescSubtitle>
        Customisation to your needs, <i>not a bit less</i>
      </DescSubtitle>
      <Spacer />
      <DescContainer>
        ------- we know us. and because we know us, we know you. Macbook Pro
        sets the benchmark for crisp design and portability. When looking for
        that extra punch, you donâ€™t want a drive floating around on a cable
        representing the life and death barrier between groundbreaking work and
        lost dreams. Instead, use CaseX. Easy and secure. With zero
        inconvenience.
        <p>For you, by us.</p>
      </DescContainer>
    </OpaqueContentContainer> */}
    {/* <OpaqueContentContainer>
      <DescTitle>WHATS OURS IS YOURS</DescTitle>
      <DescSubtitle />
      <DescContainer>
        <p>
          Solutions for all. Whether youâ€™re a movie producer, a multi-lingual
          coder or just have too many damn photos to keep up with, there is a
          CaseX model with the space tailored to work for you.
        </p>
      </DescContainer>
    </OpaqueContentContainer> */}
  </>
);

export default Descriptions;
