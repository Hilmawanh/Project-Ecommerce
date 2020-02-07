import React, { Component } from "react";

class MenuEbike extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src="https://media-cdn.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dwdfa4c984/category-landing/ebikes/world_hero_canyon_e-bikes_2019.jpg?sw=737&sfrm=jpg&q=80"
          style={{ width: "100%", height: "25pc" }}
        />
        {/* Harusnya card */}
        <div style={{ display: "flex" }}>
          <div class="card">
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY20-SAGE-BLUE-FIX.png"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h4 style={{ textAlign: "center", fontFamily: "Lato" }}>
                <b>SAGE V3</b>
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
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY20-PATH-E5000-LADY.png"
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
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY20-PATH-E5000-GENT.png"
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

export default MenuEbike;
