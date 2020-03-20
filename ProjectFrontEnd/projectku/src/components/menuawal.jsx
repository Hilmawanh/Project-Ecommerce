import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class MenuAwal extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://scontent.fcgk21-1.fna.fbcdn.net/v/t1.0-9/62028208_2223343917781968_2053256450687369216_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=VmTKFJm0OcMAX-4h31Y&_nc_ht=scontent.fcgk21-1.fna&oh=b6fe05813cbf3ca3582258ae9ae6ee9a&oe=5E9339A0"
          style={{ width: "100%", height: "104vh" }}
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
