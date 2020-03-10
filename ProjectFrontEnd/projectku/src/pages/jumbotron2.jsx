import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Jumbotron2 extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "130px" }}>
        <h2 style={{ fontFamily: "Poppins" }}>XC GEAR</h2>
        <p style={{ width: "45%", marginLeft: "395px" }}>In cross country racing, your bike is only half of the winning equation. What you wear and how you equip your bike also impacts your performance. That’s why we offer a massive range of cross country equipment and clothing. If speed is what you seek, you’ll find what you need here.</p>
        <Link to='/menuapparels'>
          <button style={{ border: "1px solid", width: "10%", height: "40px", backgroundColor: "#333333", color: "white", marginBottom: "150px" }}>SHOP GEAR</button>
        </Link>
      </div>
    );
  }
}

export default Jumbotron2;
