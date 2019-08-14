import * as React from "react";
import styled from "styled-components";
// import { colors } from "src/theme";
import { decodeJSONForRoute } from "src/utils/router";
import * as queryString from "query-string";
import PurchaseOptions from "src/routes/ProductPage/PurchaseOptions";
import ContentHeader from "./ContentHeader";
import { ChosenOptions, defaultChoice } from "./PurchaseOptions/choices";
import { breakpoints, colors } from "src/theme";
import Header from "../HomePage/components/Header";
import HamburgerMenu from "../../components/HamburgerMenu";
import ProductImageComponent from "./PurchaseOptions/ProductImage";
import LowerSection from "./LowerSection";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefefe;
  color: ${colors.dark};
  overflow-x: hidden;

  & * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 1 1;

  @media (max-width: ${breakpoints.phone}) {
    flex-direction: column;
  }
`;

interface Props {
  history: {
    push: (route: string) => void;
  };
  location: {
    search: string;
  };
  products: any[]; // TODO: types
  addToCart: (variantId: string) => any;
  openCheckout: () => void;
  handleCartOpen: () => void;
}

interface State {
  showHamburger: boolean;
  scrollPosition: number;
}

export default class ProductPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showHamburger: false,
      scrollPosition: 0
    };
    this.reroute = this.reroute.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.hamburgerClose = this.hamburgerClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  private handleScroll() {
    this.setState({ scrollPosition: window.scrollY });
  }

  private reroute = () => this.props.history.push("/");

  private handleHamburgerClick() {
    this.setState({ showHamburger: true });
  }

  private hamburgerClose() {
    this.setState({ showHamburger: false });
  }

  public render() {
    // retrieve product from url
    const { product, progress } = queryString.parse(this.props.location.search);
    const chosen: ChosenOptions =
      typeof product === "string" ? decodeJSONForRoute(product) : defaultChoice;
    const currentProgress =
      typeof progress === "string" && !isNaN(parseInt(progress, 10))
        ? parseInt(progress, 10)
        : 1;
    return (
      <PageContainer id="Product">
        <Header
          change={false}
          homePage={false}
          showHamburger={this.handleHamburgerClick}
          history={this.props.history}
        />
        <ContentHeader />
        <ContentContainer id="Product">
          <ProductContainer>
            <ProductImageComponent
              scrollY={this.state.scrollPosition}
              chosen={chosen}
            />
            <PurchaseOptions
              history={this.props.history}
              chosen={chosen}
              progress={currentProgress}
              addToCart={this.props.addToCart}
              openCheckout={this.props.openCheckout}
              handleCartOpen={this.props.handleCartOpen}
              products={this.props.products}
            />
          </ProductContainer>
          <LowerSection />
        </ContentContainer>
        <HamburgerMenu
          show={this.state.showHamburger}
          theme={"light"}
          homePage={false}
          history={this.props.history}
          close={this.hamburgerClose}
        />
      </PageContainer>
    );
  }
}
