import React, { Component } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";

class MenuBmx extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://images.pexels.com/photos/1580234/pexels-photo-1580234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          style={{ width: "100%", height: "30pc" }}
        />
        {/* <h2 className="menuBmxText">BMX</h2> */}
        {/* <h1 className="menuBmxText2">___</h1> */}

        {/* Harusnya card */}
        <div style={{ display: "column" }}>
          <h2 className="CardTextHeader">RAZOR</h2>
          <FaRegWindowMinimize className="StripBmx1" />
          <div style={{ display: "flex" }}>
            <div class="card">
              <img
                src="https://www.polygonbikes.com/wp-content/uploads/2018/03/RAZOR_ELITE_P_1.png"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h4 style={{ textAlign: "center", fontFamily: "Lato" }}>
                  <b>Helios LT9X</b>
                </h4>
                <center>
                  <p>nnononoono</p>
                </center>
                <center>
                  <h5 style={{ fontFamily: "Roboto", fontWeight: "bolder" }}>Rp. 75.000.000</h5>
                </center>
              </div>
            </div>

            <div class="card">
              <img
                src="https://www.polygonbikes.com/wp-content/uploads/2018/03/RAZOR_PRO.png"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h4 style={{ textAlign: "center" }}>
                  <b>Helios LT9X</b>
                </h4>
                <center>
                  <p>nnononoono</p>
                </center>
                <center>
                  <h5 style={{ fontFamily: "Roboto", fontWeight: "bolder" }}>Rp. 75.000.000</h5>
                </center>
              </div>
            </div>

            <div class="card">
              <img
                src="https://www.polygonbikes.com/wp-content/uploads/2018/03/RUDGE_3_P_1-1.png"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h4 style={{ textAlign: "center" }}>
                  <b>Helios LT9X</b>
                </h4>
                <center>
                  <p>nnononoono</p>
                </center>
                <center>
                  <h5 style={{ fontFamily: "Roboto", fontWeight: "bolder" }}>Rp. 75.000.000</h5>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBmx;
