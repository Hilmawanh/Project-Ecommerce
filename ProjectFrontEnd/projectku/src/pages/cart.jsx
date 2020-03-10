import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Table } from "reactstrap";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { cartProduk } from '../redux/actions'


const Cart = () => {

  const getCart = useSelector(state => state.cartReducers.getCart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartProduk())
  }, [])

  const renderCart = () => {
    return getCart.map((val, index) => {
      
    })
  }


  return (
    <div>
      <div style={{ width: "100%", height: "20pc", backgroundColor: "#eaeaea" }} />
      <div style={{ display: "column" }}>
        <h2
          className="CardTextHeader"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "200px",
            left: "5px",
            width: "50px",
            height: "100px"
          }}>
          CART
          </h2>
        <FaRegWindowMinimize
          style={{
            zIndex: "2",
            position: "absolute",
            top: "205px",
            left: "75px",
            color: "red",
            width: "50px",
            height: "100px"
          }}
        />
      </div>
      <div style={{ marginTop: "60px" }}>
        <Table borderless className="container">
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
    </div>
  );
};

export default Cart;
