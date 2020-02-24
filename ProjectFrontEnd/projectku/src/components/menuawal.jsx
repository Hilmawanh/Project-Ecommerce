import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class MenuAwal extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://pbs.twimg.com/media/EP6rj9JXUAEO-B_?format=jpg&name=large"
          style={{ width: "100%", height: "95vh" }}
        />

        <h1 className="menuAwalText1">SAGAN RACE REPLICA FRAMESETS</h1>
        <h2 className="menuAwalText2">
          Superstar racing, <br /> with the Pros!
        </h2>

        <Link to="/" style={{ color: "white" }}>
          <button className="menuAwalButton">Shop Gear</button>
        </Link>

        <Link to="/menuroadbike" style={{ color: "white" }}>
          <button className="menuAwalButton2">Shop Bike</button>
        </Link>
      </div>
    );
  }
}

export default MenuAwal;

// https://pbs.twimg.com/media/EPTnPYdWAAIx0mb?format=jpg&name=large

// https://pbs.twimg.com/media/D3zhrQeX4AQ5gr3?format=jpg&name=4096x4096
