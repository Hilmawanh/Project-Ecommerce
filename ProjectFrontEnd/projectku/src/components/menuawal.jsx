import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class MenuAwal extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://scontent.fcgk21-1.fna.fbcdn.net/v/t1.0-9/92818346_2935790953156673_4495643428087922688_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=ycQ88TDXGEcAX_pR04K&_nc_ht=scontent.fcgk21-1.fna&oh=d05df910b7b1d413dc16d00f2bb8528f&oe=5EE9649D"
          style={{ width: "100%", height: "100vh", marginTop: "60px" }}
        />

        <h1 className="menuAwalText1">SAGAN RACE REPLICA FRAMESETS</h1>
        <h2 className="menuAwalText2">
          Superstar racing, <br /> with the Pros!
        </h2>

        <Link to="/menuspareparts" style={{ color: "white" }}>
          <button className="menuAwalButton">Shop Gear</button>
        </Link>

        <Link to="/menumountain" style={{ color: "white" }}>
          <button className="menuAwalButton2">Shop Bike</button>
        </Link>
      </div>
    );
  }
}

export default MenuAwal;