import React, { Component } from "react";
import Bike from "./../image/bike.png";
import { Link } from "react-router-dom";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={Bike}
          style={{
            marginLeft: "600px",
            marginTop: "60px",
            height: "250px",
            marginBottom: "10px"
          }}
        />
        <h2
          style={{
            marginLeft: "460px",
            fontSize: "40px",
            fontFamily: "Nunito Sans",
            fontWeight: "bolder"
          }}
        >
          Waduh, tujuanmu nggak ada!
        </h2>
        <p
          style={{
            marginLeft: "490px",
            fontFamily: "Nunito Sans",
            fontSize: "20px"
          }}
        >
          Mungkin kamu salah jalan atau alamat. Ayo balik lagi!
        </p>

        <Link to="/">
          <button
            style={{
              borderRadius: "6px",
              width: "250px",
              height: "50px",
              marginLeft: "599px",
              color: "white",
              backgroundColor: "#333333",
              fontFamily: "Nunito Sans",
              fontWeight: "bolder",
              marginBottom: "30px"
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
