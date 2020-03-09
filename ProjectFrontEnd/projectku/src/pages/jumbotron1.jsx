import React, { Component } from "react";

class Jumbotron1 extends Component {
  state = {};
  render() {
    return (
      // <div className="menu1">
      //   <div className="menu1flexgambar">
      //     <div style={{ width: "60%" }}>
      //       <img
      //         src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY19-XQUARONE-EX9-XTR.png"
      //         style={{ width: "100%", height: "100%" }}
      //       />
      //     </div>

      //     <div className="menukiri1">
      //       <div className="menukiri1Text">
      //         <button className="menukiri1TextButton">Hot Item</button>
      //         <h1 style={{ fontFamily: "Poppins", color: "#23374d" }}>
      //           Mountain
      //         </h1>
      //         <p style={{ fontFamily: "Lato" }}>
      //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
      //           porro excepturi adipisci accusantium asperiores earum quaerat
      //         </p>

      //         <p className="menukiri1Text2">
      //           Price. $1000
      //           <button className="menukiri1Text2button">Buy Now</button>
      //         </p>
      //       </div>
      //     </div>
      //   </div>

      //   <div className="menukanan1">
      //     <h1 className="menukanan1Text">Mountain</h1>
      //     <h2 className="menukanan1Text2">C O L L E C T I O N</h2>
      //   </div>
      // </div>

      <div className="Jumbotron1Parents">
        <div className="Jumbotron1Child1" style={{ display: "flex" }}>
          <div className="Jumbotron1ChildText">
            <h5 style={{ fontFamily: "Oswald", fontWeight: "bolder", color: "#212529", letterSpacing: "1px" }}>MOUNTAIN</h5>
            <h3 style={{ fontFamily: "Poppins", fontWeight: "bolder", color: "#313131" }}>EPIC HARDTAIL</h3>
            <h5 style={{ textAlign: "justify", width: "70%", letterSpacing: "1px", color: "#313131" }}>The lightest production hardtail on earth is also now the most capable and comfortable racing machine ever created. Behold the game-changer—the Epic Hardtail. We refined every inch of this bike to create the world’s lightest, fastest, and most forgiving race machine, because you’re not reaching the podium if you’re getting pummeled by the trail.</h5>
            <button className="Jumbotron1Button">Buy Now</button>

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
