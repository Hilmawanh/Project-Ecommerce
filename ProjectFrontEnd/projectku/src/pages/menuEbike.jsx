import React, { useEffect, useState } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { APIURL, APIURLimage } from '../helper/apiurl'

const MenuEbike = () => {

  const [dataEbike, setDataEbike] = useState([])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        setDataEbike(res.data.dataEbike)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderProduk = () => {
    return dataEbike.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details/' + val.id}>
            <img src={APIURLimage + val.gambar} style={{ width: "100%" }} />
          </Link>
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


  return (
    <div>
      <img
        src="https://media-cdn.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dwdfa4c984/category-landing/ebikes/world_hero_canyon_e-bikes_2019.jpg?sw=737&sfrm=jpg&q=80"
        style={{ width: "100%", height: "30pc" }}
      />

      {/* Harusnya card */}
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader">TRID</h2>
        <FaRegWindowMinimize className="StripEbike" />
        <div style={{ display: "flex" }}>
          {renderProduk()}
        </div>
      </div>
    </div>
  )
}

export default MenuEbike;
