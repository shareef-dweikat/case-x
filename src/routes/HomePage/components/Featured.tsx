import * as React from "react";
import styled from "styled-components";

import Logo1 from "../../../resources/solace_labs.png";
import Logo2 from "../../../resources/helmholtz.png";
import Logo3 from "../../../resources/impulse.png";
import { colors, breakpoints } from "src/theme";

interface FeaturedCompany {
  imageSrc: string;
}

const FeaturedCompaniesRow = styled.div`
  width: 100%;
  min-height: 225px;
  background: ${colors.background_light};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 5%;
`;

const FeaturedCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 20px 0;
    min-width: 200px;
    max-height: 25vh;
  }
`;

const FeaturedCompanyImage = styled.img`
  margin-bottom: 20px;
  height: 150px;
`;

const Featured = () => {
  const FeaturedCompanies: FeaturedCompany[] = [
    {
      imageSrc: Logo1
    },
    {
      imageSrc: Logo2
    },
    {
      imageSrc: Logo3
    }
    // {
    //   name: "Company4",
    //   imageSrc: Logo4
    // }
  ];
  return (
    <FeaturedCompaniesRow id="featured">
      {FeaturedCompanies.map((Company, idx) => (
        <FeaturedCompanyContainer key={idx}>
          <FeaturedCompanyImage src={Company.imageSrc} />
        </FeaturedCompanyContainer>
      ))}
    </FeaturedCompaniesRow>
  );
};

export default Featured;
