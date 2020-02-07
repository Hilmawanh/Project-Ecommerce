import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class MenuAwal extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://pbs.twimg.com/media/EPTnPYdWAAIx0mb?format=jpg&name=large"
          style={{ width: "100%", height: "80vh" }}
        />

        <h1 className="menuAwalText1">SAGAN RACE REPLICA FRAMESETS</h1>
        <h2 className="menuAwalText2">
          Superstar racing, <br /> with the Pros!
        </h2>

        <button className="menuAwalButton">
          <Link to="/" style={{ color: "white" }}>
            Shop Equipment
          </Link>
        </button>
        <button className="menuAwalButton2">
          <Link to="/" style={{ color: "white" }}>
            Shop Bike
          </Link>
        </button>
      </div>
    );
  }
}

export default MenuAwal;
