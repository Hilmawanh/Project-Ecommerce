import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jumbotron3 extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", height: "800px", backgroundColor: "#f4f4f4" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "60%" }}>
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9X_ACE_P.png"
              style={{ width: "100%", height: "100%", marginTop: "90px" }}
            />
          </div>


          <div style={{ width: '40%', display: "column", marginLeft: "180px", marginTop: "200px" }}>
            <h5 style={{ fontFamily: "Oswald", letterSpacing: "1px" }}>ROADBIKE</h5>
            <h3 style={{ fontFamily: "Poppins", fontWeight: "bolder" }}>EPIC HARDTAIL</h3>
            <h5 style={{ textAlign: "justify", width: "85%", letterSpacing: "1px" }}>The lightest production hardtail on earth is also now the most capable and comfortable racing machine ever created. Behold the game-changer—the Epic Hardtail. We refined every inch of this bike to create the world’s lightest, fastest, and most forgiving race machine, because you’re not reaching the podium if you’re getting pummeled by the trail.</h5>

            <Link to='/menuroadbike'>
              <button style={{ border: "1px", width: "125px", height: "45px", backgroundColor: "#333333", color: "white", marginTop: "10px" }}>Buy Now</button>
            </Link>

          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron3;
