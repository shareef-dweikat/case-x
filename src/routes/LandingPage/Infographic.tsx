import * as React from "react";
import styled from "styled-components";
import InfoGraphicImg from "../../resources/landingPage/landing_page_infographic.png";

const PageContainer = styled.div`
  width: 100vw;
`;

const CasexInfoGraphic = styled.img`
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 27%;
  width: 100%;
`;

const LinkButton = styled.button`
  width: 15vw;
  height: 4vw;
  background: #203a4d;
  color: orange;
  border: none;
  border-radius: 2vw;
  font-size: 1.6vw;

  &:hover {
    background: orange;
    color: #203a4d;
  }
`;

const Spacer = styled.div`
  width: 25px;
`;

interface Props {
  history: {
    push: (route: string) => void;
  };
}

class Infographic extends React.Component<Props, {}> {
  private linkToPage = (route: string) => {
    this.props.history.push(route);
    window.scrollTo(0, 0);
  };

  public render() {
    return (
      <PageContainer>
        <CasexInfoGraphic src={InfoGraphicImg} />
        <ButtonContainer>
          {/* tslint:disable-next-line jsx-no-lambda */}
          <LinkButton onClick={this.linkToPage.bind(this, "/home")}>
            Find out more
          </LinkButton>
          <Spacer />
          {/* tslint:disable-next-line jsx-no-lambda */}
          <LinkButton onClick={this.linkToPage.bind(this, "/product")}>
            Buy now!
          </LinkButton>
        </ButtonContainer>
      </PageContainer>
    );
  }
}

export default Infographic;
