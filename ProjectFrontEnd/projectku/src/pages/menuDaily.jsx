import React, { Component } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link } from 'react-router-dom'
import NumberFormat from "react-number-format";


class MenuDaily extends Component {
  state = {
    dataDaily: []
  };

  componentDidMount() {
    Axios.get(`${APIURL}admin/get-prod-daily`)
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
          <Link to={'/menu-details3/' + val.id}>
            <img src={APIURLimage + val.gambar} style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4 className="MenuDailyNamaProduk">
              <h5 style={{ fontFamily: "Poppins", fontWeight: "bolder" }}>{val.produk}</h5>
            </h4>
            <center>
              <p>{val.deskripsi}</p>
            </center>
            <center>
              <h5><NumberFormat value={val.harga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} className="CardTextPrice" /></h5>
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
          style={{ width: "100%", height: "32pc" }}
        />

        {/* Harusnya card */}
        <div className="CardTextColumn">
          <h2 className="CardTextHeader">BROMPTON</h2>
          <FaRegWindowMinimize className="StripDaily" />
          <div className='row' style={{ width: "100%", marginLeft: '1px' }}>
            {this.renderProduk()}
          </div>
        </div>
      </div>
    );
  }
}

export default MenuDaily;
