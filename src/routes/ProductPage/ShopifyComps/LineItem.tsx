import * as React from "react";

interface Props {
  lineItem: any;
  updateQuantityInCart: (lineItemId: string, updatedQuantity: number) => void;
  removeLineItemInCart: (lineItemId: string) => void;
}

class LineItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  private decrementQuantity(lineItemId: string) {
    const updatedQuantity = this.props.lineItem.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  private incrementQuantity(lineItemId: string) {
    const updatedQuantity = this.props.lineItem.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  public render() {
    console.log("PROPS FOR LINE ITEM", this.props);
    return (
      <li className="Line-item">
        <div className="Line-item__img">
          {this.props.lineItem.variant.image ? (
            <img
              src={this.props.lineItem.variant.image.src}
              alt={`${this.props.lineItem.title} product shot`}
            />
          ) : null}
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.lineItem.variant.title}
            </div>
            <span className="Line-item__title">
              {this.props.lineItem.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button
                className="Line-item__quantity-update"
                onClick={() => this.decrementQuantity(this.props.lineItem.id)}
              >
                -
              </button>
              <span className="Line-item__quantity">
                {this.props.lineItem.quantity}
              </span>
              <button
                className="Line-item__quantity-update"
                onClick={() => this.incrementQuantity(this.props.lineItem.id)}
              >
                +
              </button>
            </div>
            <span className="Line-item__price">
              ${" "}
              {(
                this.props.lineItem.quantity * this.props.lineItem.variant.price
              ).toFixed(2)}
            </span>
            <button
              className="Line-item__remove"
              onClick={() =>
                this.props.removeLineItemInCart(this.props.lineItem.id)
              }
            >
              ×
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
