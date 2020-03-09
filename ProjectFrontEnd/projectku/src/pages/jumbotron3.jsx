import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jumbotron3 extends Component {
  state = {};
  render() {
    return (
      // <div className="menu3">
      //   <div className="menukirimenu3">
      //     <h1 className="menukirimenu3Text">Series</h1>
      //     <h2 className="menukirimenu3Text2">R O A D B I K E</h2>
      //   </div>

      //   <div className="menukananmenu3">
      //     <div className="menukanan3Text">
      //       <div className="menukanan3Text1">
      //         <button className="menukanan3TextButton">Hot Item</button>
      //         <h1 style={{ fontFamily: "Poppins", color: "#23374d" }}>
      //           Roadbike
      //         </h1>
      //         <p style={{ fontFamily: "Lato" }}>
      //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
      //           nihil ipsam iste sunt. nananakdsadopsaijdaioasji
      //         </p>

      //         <p className="menukananText2">
      //           Price. $2000{" "}
      //           <Link to="/menuroadbike">
      //             <button className="button1">Buy Now</button>
      //           </Link>
      //         </p>
      //       </div>
      //     </div>

      //     <div style={{ width: "100%" }}>
      //       <img
      //         src="https://pacific-bike.com/wp-content/uploads/2019/01/RB-PRIMUM-3.0_2.png"
      //         style={{
      //           width: "100%",
      //           height: "100%"
      //         }}
      //       />
      //     </div>
      //   </div>
      // </div>

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


            <button style={{ border: "1px", width: "125px", height: "45px", backgroundColor: "#333333", color: "white", marginTop: "10px" }}>Buy Now</button>

          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron3;
