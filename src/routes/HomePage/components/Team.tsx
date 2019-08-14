import * as React from "react";
import styled from "styled-components";
import { colors } from "../../../theme";

import MaxImage from "../../../resources/teamImages/Max.jpg";
import EmilImage from "../../../resources/teamImages/Emil.jpg";
import MoImage from "../../../resources/teamImages/Mo.jpg";
import KareemImage from "../../../resources/teamImages/Kareem.jpg";
import SamImage from "../../../resources/teamImages/Sam.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.background_dark};
  color: ${colors.background_light};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0;
  flex-wrap: wrap;
  flex: 1 1 1;
  justify-content: space-evenly;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 250px;
  height: 350px;
`;

const TeamMemberImage = styled.div`
  height: 200px;
  width: 125px;
  margin: 25px auto;
  display: block;
  border-radius: 50%;
  background-image: url(${(props: { background: string }) => props.background});
  background-size: cover;
  background-position: center;
`;

const TeamMemberRole = styled.div`
  width: 100%;
  padding: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const TeamMemberName = styled(TeamMemberRole)`
  font-style: bold;
  font-size: 18px;
`;

const Honour = styled.span`
  font-style: italic;
`;

interface TeamMember {
  imageSrc: string;
  name: JSX.Element;
  role: string;
}

const Team = () => {
  const TeamArray: TeamMember[] = [
    {
      imageSrc: MaxImage,
      name: (
        <span>
          Max Kent <Honour>MEng</Honour>
        </span>
      ),
      role: "Co Director & Lead Engineer"
    },
    {
      imageSrc: EmilImage,
      name: (
        <span>
          Emil Kort <Honour>BEng. MSc</Honour>
        </span>
      ),
      role: "Co Director & Lead Design"
    },
    {
      imageSrc: MoImage,
      name: (
        <span>
          Mo Nour <Honour>BA, LL.B, LL.M, Esq.</Honour>
        </span>
      ),
      role: "Secretary & Legal Advisor"
    },
    {
      imageSrc: KareemImage,
      name: (
        <span>
          Kareem Kort <Honour>MEng</Honour>
        </span>
      ),
      role: "Business Development & Investment Sourcing"
    },
    {
      imageSrc: SamImage,
      name: (
        <span>
          Victor Ebenezer <Honour>BSc</Honour>
        </span>
      ),
      role: "Coder & Web Developer"
    }
  ];

  return (
    <Container id="team">
      <TeamContainer>
        {TeamArray.map((teamMember, idx) => {
          idx++;
          return (
            <TeamMemberContainer key={idx}>
              <TeamMemberImage background={teamMember.imageSrc} />
              <TeamMemberName>{teamMember.name}</TeamMemberName>
              <TeamMemberRole>{teamMember.role}</TeamMemberRole>
            </TeamMemberContainer>
          );
        })}
      </TeamContainer>
    </Container>
  );
};

export default Team;
