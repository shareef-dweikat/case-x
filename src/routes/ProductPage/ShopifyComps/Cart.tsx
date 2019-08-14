import * as React from "react";
import LineItem from "./LineItem";
import styled from "styled-components";

const CartPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartContainer = styled.div`
  width: 800px;
  margin-top: 50px;
  border-radius: 0.4rem;
  font: 1.1rem "Lucida Grande", Helvetica, Arial, Verdana, sans-serif;
  background: #ffffff;
  box-shadow: 0.1rem 0 0 0 #d2d2d2, -0.1rem 0 0 0 #d2d2d2, 0 0.1rem 0 0 #b6b6b6,
    0 0.2rem 0 0 #d2d2d2, 0.2rem 0 0 0 #e6e6e6, -0.2rem 0 0 0 #e6e6e6,
    0 0.3rem 0 0 #e6e6e6, 0 -0.1rem 0 0 #e6e6e6;
`;

const CartHeader = styled.header`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: inline-block;
`;

const FooterContainer = styled.footer`
  padding: 20px;
  border-top: 1px solid #e5e5e5;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;

  display: flex;
  justify-content: flex-end;
`;

const FooterInnerContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CheckoutButton = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  font-size: 1.3rem;
  line-height: 0.5rem;
  display: inline-block;
  cursor: pointer;
  border-radius: 0.4rem;
  box-shadow: inset 0 0.1rem 0 rgba(255, 255, 255, 0.2);
  background-color: #0070c9;
  background: linear-gradient(#42a1ec, #0070c9);
  border: 0.1rem solid #07c;
  color: #fff;
  vertical-align: middle;
`;

const CartInfoRow = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

interface Props {
  checkout: any;
  updateQuantityInCart: (lineItemId: any, quantity: number) => void;
  removeLineItemInCart: (lineItemId: any) => void;
  handleCartClose: () => void;
}

class Cart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  private openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  public render() {
    const lineItems = this.props.checkout.lineItems.map((lineItem: any) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={lineItem.id.toString()}
          lineItem={lineItem}
        />
      );
    });

    return (
      <CartPage>
        <CartContainer>
          <CartHeader>
            <h2>Your cart</h2>
            <button
              onClick={this.props.handleCartClose}
              className="Cart__close"
            >
              ×
            </button>
          </CartHeader>
          <ul className="Cart__line-items">{lineItems}</ul>
          <FooterContainer>
            <FooterInnerContainer>
              <CartInfoRow>
                <div className="Cart-info__total Cart-info__small">
                  Subtotal
                </div>
                <div className="Cart-info__pricing">
                  <span className="pricing">
                    $ {this.props.checkout.subtotalPrice}
                  </span>
                </div>
              </CartInfoRow>
              <CartInfoRow>
                <div className="Cart-info__total Cart-info__small">Taxes</div>
                <div className="Cart-info__pricing">
                  <span className="pricing">
                    $ {this.props.checkout.totalTax}
                  </span>
                </div>
              </CartInfoRow>
              <CartInfoRow>
                <div className="Cart-info__total Cart-info__small">Total</div>
                <div className="Cart-info__pricing">
                  <span className="pricing">
                    $ {this.props.checkout.totalPrice}
                  </span>
                </div>
              </CartInfoRow>
              <CheckoutButton onClick={this.openCheckout}>
                Check Out
              </CheckoutButton>
            </FooterInnerContainer>
          </FooterContainer>
        </CartContainer>
      </CartPage>
    );
  }
}

export default Cart;
