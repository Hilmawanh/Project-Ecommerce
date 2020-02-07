import React from "react";
import { Table } from "reactstrap";

const Example = props => {
  return (
    <div>
      <Table hover className="container">
        <thead>
          <tr>
            <th></th>
            <th style={{ fontFamily: "Roboto", color: "#535353" }}>PRODUCT</th>
            <th></th>
            <th style={{ fontFamily: "Roboto", color: "#535353" }}>PRICE</th>
            <th style={{ fontFamily: "Roboto", color: "#535353" }}>QUANTITY</th>
            <th style={{ fontFamily: "Roboto", color: "#535353" }}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <div className="tableCheckout">
        &nbsp;
        <div className="Text-Checkout-1">
          <h4 className="Text-Checkout-h4">CART TOTALS</h4>
        </div>
        <div className="Text-Checkout-2">
          <h7 className="Text-Checkout-h7">SUBTOTAL</h7>
        </div>
        <div className="Text-Checkout-3">
          <h5 className="Text-Checkout-h5">TOTAL</h5>
        </div>
        <div>
          <button className="button-Checkout">PROCEED TO CHECKOUT -></button>
        </div>
      </div>
    </div>
  );
};

export default Example;
