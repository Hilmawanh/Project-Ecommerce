import React, { useState, useEffect } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link } from 'react-router-dom'


const MenuApparels = () => {
  const [getMenuApparels, setGetMenuApparels] = useState([])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-gear`)
      .then(res => {
        setGetMenuApparels(res.data.dataApparels)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderProdukGear = () => {
    return getMenuApparels.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details6/' + val.id}>
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
              <h5 className="CardTextPrice">Rp.{val.harga}</h5>
            </center>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <div style={{ width: "100%", height: "20pc", backgroundColor: "#eaeaea" }} />

      {/* Harusnya card */}
      <div style={{ display: "column" }}>
        <h2
          className="CardTextHeader"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "200px",
            left: "5px",
            width: "50px",
            height: "100px"
          }}>
          SHOP
          </h2>
        <FaRegWindowMinimize
          style={{

            zIndex: "2",
            position: "absolute",
            top: "205px",
            left: "75px",
            color: "red",
            width: "50px",
            height: "100px"
          }}
        />
        <div style={{ display: "flex" }}>
          {renderProdukGear()}
        </div>
      </div>
    </div>
  )
}

export default MenuApparels;

