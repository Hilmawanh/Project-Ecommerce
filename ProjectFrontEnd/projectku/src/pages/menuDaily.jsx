import React, { Component } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'

class MenuDaily extends Component {
  state = {
    dataDaily: []
  };

  componentDidMount() {
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        this.setState({ dataDaily: res.data.dataDaily })
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderProduk = () => {
    return this.state.dataDaily.map((val, index) => {
      return (
        <div className="card">
          <img src={APIURLimage + val.gambar} style={{ width: "100%" }} />
          <div className="container">
            <h4 className="MenuDailyNamaProduk">
              <b>{val.produk}</b>
            </h4>
            <center>
              <p>{val.deskripsi}</p>
            </center>
            <center>
              <h5 className="CardTextPrice">Rp.{val.harga}</h5>
            </center>
          </div>
        </div>
      )
    })
  }



  render() {
    return (
      <div>
        <img
          src="https://images.pexels.com/photos/3131286/pexels-photo-3131286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          style={{ width: "100%", height: "30pc" }}
        />

        {/* Harusnya card */}
        <div className="CardTextColumn">
          <h2 className="CardTextHeader">BROMPTON</h2>
          <FaRegWindowMinimize className="StripDaily" />
          <div className="menuDailyFlex">
            {this.renderProduk()}
          </div>
        </div>
      </div>
    );
  }
}

export default MenuDaily;
