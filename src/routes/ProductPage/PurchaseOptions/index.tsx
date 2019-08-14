import * as React from "react";
import styled from "styled-components";
import { encodeJSONForRoute } from "../../../utils/router";
import DecisionComponent from "./DecisionComponent";
import { Decisions, ChosenOptions, Decision } from "./choices";
import PriceComponent from "./PriceComponent";
// import PaypalButton from "./PaypalButton";
import { colors, breakpoints } from "src/theme";
import { beautifyChoices, getVariant } from "src/utils/choice-utils";
import { calculateOverallPrice } from "./PriceUtils";

const PurchaseWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  color: ${colors.dark};

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
    padding: 0 25px 50px 25px;
  }
`;

const PurchaseHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  & span {
    margin-left: 10px;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.phone}) {
    height: 75px;
  }
`;

const DecisionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.phone}) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const PaymentWrapper = styled.div`
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
  justify-content: center;
  background: ${colors.background_light};
  margin-top: 50px;
  padding: 25px;
  border-radius: 5px;
  flex-wrap: wrap;
`;

const PaypalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CheckoutButton = styled.button``;

interface State {
  progress: number;
  chosen: ChosenOptions;
}

interface Props {
  chosen: ChosenOptions;
  progress: number;
  history: {
    push: (route: string) => void;
  };
  children?: React.ReactNode[];
  products: any[]; // TODO: types
  addToCart: (variantId: string) => any;
  openCheckout: () => void;
  handleCartOpen: () => void;
}

class PurchaseOptions extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      progress: this.props.progress,
      chosen: this.props.chosen
    };
    this.returnProgress = this.returnProgress.bind(this);
    this.addChoiceToRoute = this.addChoiceToRoute.bind(this);
    this.updateStateWithChoice = this.updateStateWithChoice.bind(this);
    this.showSection = this.showSection.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  private addChoiceToRoute() {
    this.props.history.push(
      `/product?product=${encodeJSONForRoute(this.state.chosen)}&progress=${
        this.state.progress
      }`
    );
  }

  private updateStateWithChoice(decison: Decision, optionIdx: number) {
    const chosen = this.state.chosen;
    chosen[decison.label] = optionIdx;
    const progress = this.returnProgress(decison);
    this.setState({ progress, chosen });
    this.addChoiceToRoute();
  }

  private setModelToZero = () => {
    const modelDecision = Decisions.find(
      decision => decision.label === "model"
    );
    if (modelDecision) {
      this.updateStateWithChoice(modelDecision, 0);
    }
  };

  private returnProgress(decision: Decision) {
    if (this.state.chosen.size === 1 && decision.label === "size") {
      this.setModelToZero();
      return this.state.progress + 2;
    }
    return decision.index === this.state.progress
      ? this.state.progress + 1
      : this.state.progress;
  }

  private showSection(decision: Decision): boolean {
    if (this.state.chosen.size === 1 && decision.label === "model") {
      return false;
    }
    return decision.index <= this.state.progress;
  }

  private async addItemToCart() {
    this.props.history.push("/product/cart");
    const variantId = await getVariant(this.props.products, this.props.chosen);
    await this.props.addToCart(variantId);
    // this.props.handleCartOpen();
    // this.props.openCheckout();
  }

  public render() {
    const price = calculateOverallPrice(Decisions, this.state.chosen);
    const readableChoices = beautifyChoices(this.state.chosen);
    const orderComplete = this.props.progress >= 5;

    // console.log("Children Props", this.props.children);

    console.log("Chosen", readableChoices, orderComplete);
    return (
      <PurchaseWrapper>
        <PurchaseHeader>
          Buy <span>CaseX</span>
        </PurchaseHeader>
        <DecisionContainer>
          {Decisions.map(decision =>
            this.showSection(decision) ? (
              <DecisionComponent
                key={decision.index}
                decision={decision}
                chosen={this.props.chosen[decision.label]}
                // tslint:disable-next-line jsx-no-lambda
                onClickHandler={(decision: Decision, optionIdx: number) => {
                  this.updateStateWithChoice(decision, optionIdx);
                }}
              />
            ) : (
              ""
            )
          )}
        </DecisionContainer>
        <PaymentWrapper show={orderComplete}>
          <PriceComponent price={price} />
          <PaypalButtonWrapper>
            {/* <PaypalButton price={price} /> */}
            <CheckoutButton onClick={this.addItemToCart}>
              Checkout
            </CheckoutButton>
          </PaypalButtonWrapper>
        </PaymentWrapper>
      </PurchaseWrapper>
    );
  }
}

export default PurchaseOptions;
