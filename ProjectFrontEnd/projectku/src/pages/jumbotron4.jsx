import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Jumbotron4 extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "flex", marginBottom: "200px", }}>
        <div style={{ width: "25%", height: "285px", backgroundColor: "#f4f3f3", marginLeft: "145px" }}>
          <img src="https://www.polygonbikes.com/wp-content/uploads/2018/03/RAZOR_PRO.png" style={{ width: "100%", height: "100%" }} />
          {/* <h5 >BMX</h5> */}
          <center><h4 style={{ marginTop: "20px", fontFamily: "Public Sans" }}>BMX</h4></center>
          <center>
            <Link to='/menubmx'>
              <button style={{ width: "105px", height: "50px", backgroundColor: "black", color: "white", fontFamily: "Roboto", marginTop: "20px", fontFamily: "Lato", marginRight: "2px" }}>BUY NOW</button>
            </Link>
          </center>
        </div>
        <div style={{ width: "25%", height: "285px", backgroundColor: "#f4f3f3", marginLeft: "40px" }}>
          <img src="https://www.polygonbikes.com/wp-content/uploads/2019/11/MY20-PATH-E5000-GENT.png" style={{ width: "100%", height: "100%" }} />
          {/* <h5 >BMX</h5> */}
          <center><h4 style={{ marginTop: "20px", fontFamily: "Public Sans" }}>EBIKE</h4></center>
          <center>
            <Link to='/menuebike'>
              <button style={{ width: "105px", height: "50px", backgroundColor: "black", color: "white", fontFamily: "Roboto", marginTop: "20px", marginRight: "2px" }}>BUY NOW</button>
            </Link>
          </center>
        </div>
        <div style={{ width: "25%", height: "285px", backgroundColor: "#f4f3f3", marginLeft: "40px" }}>
          <img src="https://www.brompton.com/~/media/2018/navigation/standard-638x445.png" style={{ width: "100%", height: "100%" }} />
          {/* <h5 >BMX</h5> */}
          <center><h4 style={{ marginTop: "20px", fontFamily: "Public Sans" }}>DAILY</h4></center>
          <center>
            <Link to='/menudaily'>
              <button style={{ border: "1px solid", width: "105px", height: "50px", backgroundColor: "black", color: "white", fontFamily: "Roboto", marginTop: "20px", marginRight: "2px" }}>BUY NOW</button>
            </Link>
          </center>
        </div>
      </div>
    );
  }
}

export default Jumbotron4;
