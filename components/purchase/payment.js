import React, { Component, useState, useRef, useEffect } from "react";
import new_app_logo from "../../photos/new_app.png";

function Payment() {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  let paypalRef = useRef();

  const product = {
    price: 17,
    description: "A nice app.",
    amount: 2,
    currency: "USD"
  };

  useEffect(() => {
    //load paypal script
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AWTK38eehbdjD4IsZ-NQcAU-GWDxu99MJNpti7ff0YXLsuGzHCjqP1SYW10xWw-MhAMPhCh6ibHehVvx";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: product.currency,
                      value: product.price * product.amount
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log(order);
            },
            onError: err => {
              setError(err);
              console.error(err);
            }
          })
          .render(paypalRef);
      });
    }
  });

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      {paidFor ? (
        <div>
          <h1>Congrates! you complete the order's payment successfully!</h1>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <h1 style={{ fontSize: 25 }}>
            {product.description} for ${product.price} with the amount of{" "}
            {product.amount}, in total of : ${product.amount * product.price} in{" "}
            {product.currency}
          </h1>
          <img src={new_app_logo} alt="Logo" style={{ height: 200 }} />
          <div
            ref={v => {
              paypalRef = v;
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Payment;
