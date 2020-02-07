import React, { Component } from "react";

class MenuRoadbike extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <img
            src="https://cdn.mos.cms.futurecdn.net/EWXBvRyu3ZEhV2vuayNwMZ.jpg"
            style={{ width: "100%", height: "25pc" }}
          />
        </div>

        {/* Harusnya card */}
        <div style={{ display: "flex" }}>
          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9_P.png"
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
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9_P.png"
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
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9_P.png"
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
                <h4>Rp. 75.000.000</h4>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuRoadbike;
