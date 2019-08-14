import * as React from "react";
import styled from "styled-components";
import closeIcon from "../resources/close-icon-white.png";
import { encodeJSONForRoute } from "../../../utils/router";

const FullPageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const PurchaseWrapper = styled.div`
  width: auto;
  height: 500px;
  background: white;
  display: flex;
`;

const PurchaseWindow = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid black;
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
`;

const Button = styled.button`
  background: red;
  padding: 10px;
  border: black;
  border-radius: 5px;
  height: 100px;
`;

const Close = styled.div`
  height: 50px;
  width: 50px;
  background-image: url(${closeIcon});
  background-size: cover;
`;

interface State {
  progress: number;
}

interface Props {
  visible: boolean;
  close: () => void;
  history: {
    push: (route: string) => void;
  };
}

class PurchasePopUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      progress: 1
    };
    this.goToNextStep = this.goToNextStep.bind(this);
  }

  private goToNextStep() {
    this.setState({ progress: this.state.progress + 1 });
    const product = {
      name: "Some Name",
      description: "A description"
    };
    // console.log("PRODUCTTT ISS", encodeJSONForRoute(product));
    this.props.history.push(`/product?product=${encodeJSONForRoute(product)}`);
  }

  public render() {
    return (
      <FullPageBackground show={this.props.visible}>
        <PurchaseWrapper>
          <PurchaseWindow show={true}>
            some stuff
            <Button onClick={this.goToNextStep}>Next</Button>
          </PurchaseWindow>
          {/* <PurchaseWindow show={this.state.progress > 1}>
            some stuff
          </PurchaseWindow>
          <PurchaseWindow show={this.state.progress > 2}>
            some stuff
          </PurchaseWindow> */}
        </PurchaseWrapper>
        <Close onClick={this.props.close} />
      </FullPageBackground>
    );
  }
}

export default PurchasePopUp;
