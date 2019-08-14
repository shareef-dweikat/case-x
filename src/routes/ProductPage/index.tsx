import * as React from "react";
import ProductPage from "./ProductPage";
import Cart from "./ShopifyComps/Cart";
import "../../app.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { RouteChildrenProps } from "react-router";

interface Props {
  client: any;
  history: {
    push: (route: string) => void;
    goBack: () => void;
  };
  location: {
    search: string;
    pathname: string;
  };
}

interface State {
  isCartOpen: boolean;
  checkout: any;
  products: any[];
  shop: any;
}

class ProductPageWrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };

    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.openCheckout = this.openCheckout.bind(this);
  }

  public componentWillMount() {
    this.props.client.checkout.create().then((res: any) => {
      // console.log("Checkout res", res);
      this.setState({
        checkout: res
      });
    });

    this.props.client.product.fetchAll().then((res: any) => {
      // console.log("Checkout fetchAll", res);
      this.setState({
        products: res
      });
    });

    this.props.client.shop.fetchInfo().then((res: any) => {
      // console.log("Checkout fetchInfo", res);
      this.setState({
        shop: res
      });
    });
    // console.log("State after checkout", this.state);
  }

  private addVariantToCart(variantId: string) {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: 1
      }
    ];

    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res: any) => {
        this.setState({
          checkout: res
        });
      });
  }

  private updateQuantityInCart(lineItemId: any, quantity: number) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [{ id: lineItemId, quantity }];

    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res: any) => {
        this.setState({
          checkout: res
        });
      });
  }

  private removeLineItemInCart(lineItemId: any) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res: any) => {
        this.setState({
          checkout: res
        });
      });
  }

  private handleCartOpen() {
    this.props.history.push("/product/cart");
  }

  private handleCartClose() {
    this.props.history.goBack();
    // console.log("HREFFF", window.location.href);
    // if (
    //   !window.location.href.includes("casex") &&
    //   !window.location.href.includes("localhost")
    // ) {
    //   this.props.history.push("/product");
    // }
  }

  private openCheckout() {
    window.open(this.state.checkout.webUrl);
  }

  public render() {
    console.log("I'm renderrring", this.props.location.pathname);
    return (
      <BrowserRouter>
        <Switch>
          {/* Confusedddd??: Browser router isn't work even though the pathname is change and the component is re-redering */}
          {this.props.location.pathname === "/product/cart" ? (
            <Route
              key={"cart"}
              path={"/product*"}
              render={(props: RouteChildrenProps) => (
                <Cart
                  {...props}
                  checkout={this.state.checkout}
                  // isCartOpen={true || this.state.isCartOpen}
                  updateQuantityInCart={this.updateQuantityInCart}
                  removeLineItemInCart={this.removeLineItemInCart}
                  handleCartClose={this.handleCartClose}
                />
              )}
            />
          ) : (
            <Route
              key={"product-page"}
              path={"/product*"}
              render={(props: RouteChildrenProps) => (
                <ProductPage
                  {...props}
                  {...this.props}
                  addToCart={this.addVariantToCart}
                  openCheckout={this.openCheckout}
                  handleCartOpen={this.handleCartOpen}
                  products={this.state.products}
                />
              )}
            />
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default ProductPageWrapper;
