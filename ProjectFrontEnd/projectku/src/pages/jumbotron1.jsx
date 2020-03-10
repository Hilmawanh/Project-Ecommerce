import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Jumbotron1 extends Component {
  state = {};
  render() {
    return (
      <div className="Jumbotron1Parents">
        <div className="Jumbotron1Child1" style={{ display: "flex" }}>
          <div className="Jumbotron1ChildText">
            <h5 style={{ fontFamily: "Oswald", fontWeight: "bolder", color: "#212529", letterSpacing: "1px" }}>MOUNTAIN</h5>
            <h3 style={{ fontFamily: "Poppins", fontWeight: "bolder", color: "#313131" }}>EPIC HARDTAIL</h3>
            <h5 style={{ textAlign: "justify", width: "70%", letterSpacing: "1px", color: "#313131" }}>The lightest production hardtail on earth is also now the most capable and comfortable racing machine ever created. Behold the game-changer—the Epic Hardtail. We refined every inch of this bike to create the world’s lightest, fastest, and most forgiving race machine, because you’re not reaching the podium if you’re getting pummeled by the trail.</h5>
            <Link to='/menumountain'>
              <button className="Jumbotron1Button">Buy Now</button>
            </Link>

          </div>

          <div style={{ width: '60%' }}>
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY19-XQUARONE-EX9-XTR.png"
              style={{ width: "100%", height: "100%", marginTop: "50px" }}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default Jumbotron1;
