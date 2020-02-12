import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Jumbotron6 extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ marginRight: "12px", display: "column" }}>
          <img
            src="https://www.brompton.com/~/media/2018/bikes/house-red-550x338.png?h=338&la=en&w=550"
            alt=""
          />
          <p>
            The perfect folding bike for the city. Portable and practical.
            Compact and convenient.
          </p>
          <div>
            <Link to="/menudaily">
              <button className="jumbo6TextBuy">Discover</button>
            </Link>
          </div>
        </div>

        <div style={{ display: "column" }}>
          <img
            src="https://www.brompton.com/~/media/2018/banners/electric-home-550x338.png?h=338&la=en&w=550"
            alt=""
          />
          <p style={{ fontFamily: "Lato" }}>
            An electric folding bike you can take anywhere with you. Fly up
            hills. See more. Do more.
          </p>
          <div>
            <Link to="/menudaily">
              <button className="jumbo6TextBuy">Discover</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron6;
