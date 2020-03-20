import React, { Component } from "react";
class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cartItems } = this.props;
    let countItems = 0;
    cartItems.forEach(item => {
      countItems += item.count;
    });
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empthy."
        ) : (
          <div>You have {countItems} items in the basket.</div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => (
                <li style={{ marginLeft: 30 }} key={item.id}>
                  <b>{`${item.title} `}</b>x{item.count}=
                  {item.price * item.count}$
                  <button
                    style={{ margin: 10 }}
                    className="btn btn-danger"
                    onClick={event =>
                      this.props.handelRemoveFromBasket(event, item)
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <b>{` Total: ${cartItems.reduce(
              (a, b) => a + b.price * b.count,
              0
            )}$`}</b>

            <br />
            <button
              style={{ margin: 10 }}
              className="btn btn-primary"
              onClick={() =>
                alert(
                  "Your products has been added successfully to your cart! To proceed go to your cart for checkout."
                )
              }
            >
              Add to Cart list
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Basket;
