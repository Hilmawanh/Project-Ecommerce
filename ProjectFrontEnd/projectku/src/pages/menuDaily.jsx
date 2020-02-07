import React, { Component } from "react";

class MenuDaily extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://images.pexels.com/photos/3131286/pexels-photo-3131286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          style={{ width: "100%", height: "25pc" }}
        />
        {/* Harusnya card */}
        <div style={{ display: "flex" }}>
          <div class="card">
            <img
              src="
              https://www.brompton.com/~/media/2018/navigation/standard-638x445.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center", fontFamily: "Lato" }}>
                <b>Brompton Black Edition</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 55.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.brompton.com/~/media/2018/navigation/electric-638x445.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center" }}>
                <b>Brompton White Edition</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 45.000.000</h4>
              </center>
            </div>
          </div>

          <div class="card">
            <img
              src="https://www.brompton.com/~/media/2018/navigation/b75-638x445-cut.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center" }}>
                <b>Brompton Superlight</b>
              </h4>
              <center>
                <p>nnononoono</p>
              </center>
              <center>
                <h4>Rp. 40.000.000</h4>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuDaily;
