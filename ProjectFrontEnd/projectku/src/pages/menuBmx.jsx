import React, { useEffect, useState } from 'react';
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link } from 'react-router-dom'
import NumberFormat from "react-number-format";

function MenuBmx() {

  const [dataBmx, setGetDataProduk] = useState([])
  const [getTocart, setGetToCart] = useState([])



  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-bmx`)
      .then(res => {
        setGetDataProduk(res.data.dataBmx)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderProduk = () => {
    return dataBmx.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details4/' + val.id}>
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


  return (

    <div>
      <img
        src="https://images.pexels.com/photos/1580234/pexels-photo-1580234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        style={{ width: "100%", height: "32pc" }}
      />
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader">RAZOR</h2>
        <FaRegWindowMinimize className="StripBmx1" />
        <div className='row' style={{ width: "100%", marginLeft: '1px' }} >
          {renderProduk()}
        </div>
      </div>
    </div>
  )
}

export default MenuBmx;