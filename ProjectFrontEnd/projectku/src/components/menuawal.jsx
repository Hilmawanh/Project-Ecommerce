import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class MenuAwal extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://scontent.fcgk19-1.fna.fbcdn.net/v/t1.0-9/86183357_2711259832323705_6191809778025496576_o.jpg?_nc_cat=110&_nc_sid=da1649&_nc_ohc=Y1KYY2eowwUAX8wCBRe&_nc_ht=scontent.fcgk19-1.fna&oh=fa58f0750a20c0d6c4321351a4605079&oe=5E96768B"
          style={{ width: "100%", height: "97vh" }}
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

// https://pbs.twimg.com/media/EPTnPYdWAAIx0mb?format=jpg&name=large

// https://pbs.twimg.com/media/D3zhrQeX4AQ5gr3?format=jpg&name=4096x4096
