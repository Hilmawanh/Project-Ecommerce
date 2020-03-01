import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class MenuAwal extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://scontent.fcgk21-1.fna.fbcdn.net/v/t1.0-9/84895119_2781158178619952_3101043177432285184_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=WY4lIUgWMaAAX-Xnbpb&_nc_ht=scontent.fcgk21-1.fna&oh=7f690e8f6b7a19d920b90cca593e3ad3&oe=5F00737C"
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
