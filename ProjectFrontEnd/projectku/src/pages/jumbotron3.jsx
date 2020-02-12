import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jumbotron3 extends Component {
  state = {};
  render() {
    return (
      <div className="menu3">
        <div className="menukirimenu3">
          <h1 className="menukirimenu3Text">Series</h1>
          <h2 className="menukirimenu3Text2">R O A D B I K E</h2>
        </div>

        <div className="menukananmenu3">
          <div className="menukanan3Text">
            <div className="menukanan3Text1">
              <button className="menukanan3TextButton">Hot Item</button>
              <h1 style={{ fontFamily: "Poppins", color: "#23374d" }}>
                Roadbike
              </h1>
              <p style={{ fontFamily: "Lato" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nihil ipsam iste sunt. nananakdsadopsaijdaioasji
              </p>

              <p className="menukananText2">
                Price. $2000{" "}
                <Link to="/menuroadbike">
                  <button className="button1">Buy Now</button>
                </Link>
              </p>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <img
              src="https://pacific-bike.com/wp-content/uploads/2019/01/RB-PRIMUM-3.0_2.png"
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron3;
