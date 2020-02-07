import React, { Component } from "react";

class Jumbotron1 extends Component {
  state = {};
  render() {
    return (
      <div className="menu1">
        <div className="menu1flexgambar">
          <div style={{ width: "60%" }}>
            <img
              src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY19-XQUARONE-EX9-XTR.png"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="menukiri1">
            <div className="menukiri1Text">
              <button className="menukiri1TextButton">Hot Item</button>
              <h1 style={{ fontFamily: "Poppins", color: "#23374d" }}>
                Mountain
              </h1>
              <p style={{ fontFamily: "Lato" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                porro excepturi adipisci accusantium asperiores earum quaerat
              </p>

              <p className="menukiri1Text2">
                Price. $1000
                <button className="menukiri1Text2button">Buy Now</button>
              </p>
            </div>
          </div>
        </div>

        <div className="menukanan1">
          <h1 className="menukanan1Text">Mountain</h1>
          <h2 className="menukanan1Text2">C O L L E C T I O N</h2>
        </div>
      </div>
    );
  }
}

export default Jumbotron1;
