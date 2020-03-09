import React, { Component } from "react";

class Jumbotron4 extends Component {
  state = {};
  render() {
    return (
      // <div>
      //   <h2 className="textMostPopular">#Most.Popular</h2>

      //   <div className="menu4MostPopular">
      //     <div className="menu4CategoryBmx">
      //       <div>
      //         <h4 className="menu4Text">BMX</h4>
      //         <button style={{ marginLeft: "173px", border: "1px solid", backgroundColor: "black", width: "90px", color: "white", height: "50px" }}>Buy</button>
      //       </div>
      //     </div>

      //     <div className="menu4CategoryEbike">
      //       <h1 className="menu4Text2">EBIKE</h1>
      //     </div>

      //     <div className="menu4CategoryDailyBike">
      //       <h1 className="menu4Text3">DAILY BIKE</h1>
      //     </div>
      //   </div>
      // </div>


      <div style={{ display: "flex", marginBottom: "200px", }}>
        <div style={{ width: "25%", height: "285px", backgroundColor: "#f4f3f3", marginLeft: "145px" }}>
          <img src="https://www.polygonbikes.com/wp-content/uploads/2018/03/RAZOR_PRO.png" style={{ width: "100%", height: "100%" }} />
          {/* <h5 >BMX</h5> */}
          <center><h4 style={{ marginTop: "20px", fontFamily: "Public Sans" }}>BMX</h4></center>
          <center>
            <button style={{ width: "105px", height: "50px", backgroundColor: "black", color: "white", fontFamily: "Roboto", marginTop: "20px", fontFamily: "Lato", marginRight: "2px" }}>BUY NOW</button>
          </center>
        </div>
        <div style={{ width: "25%", height: "285px", backgroundColor: "#f4f3f3", marginLeft: "40px" }}>
          <img src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY20-PATH-E5000-GENT.png" style={{ width: "100%", height: "100%" }} />
          {/* <h5 >BMX</h5> */}
          <center><h4 style={{ marginTop: "20px", fontFamily: "Public Sans" }}>EBIKE</h4></center>
          <center>
            <button style={{ width: "105px", height: "50px", backgroundColor: "black", color: "white", fontFamily: "Roboto", marginTop: "20px", marginRight: "2px" }}>BUY NOW</button>
          </center>
        </div>
        <div style={{ width: "25%", height: "285px", backgroundColor: "#f4f3f3", marginLeft: "40px" }}>
          <img src="https://www.brompton.com/~/media/2018/navigation/standard-638x445.png" style={{ width: "100%", height: "100%" }} />
          {/* <h5 >BMX</h5> */}
          <center><h4 style={{ marginTop: "20px", fontFamily: "Public Sans" }}>DAILY</h4></center>
          <center>
            <button style={{ border: "1px solid", width: "105px", height: "50px", backgroundColor: "black", color: "white", fontFamily: "Roboto", marginTop: "20px", marginRight: "2px" }}>BUY NOW</button>
          </center>
        </div>
      </div>
    );
  }
}

export default Jumbotron4;
