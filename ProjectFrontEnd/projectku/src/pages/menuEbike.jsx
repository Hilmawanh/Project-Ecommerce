import React, { useEffect, useState } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { APIURL, APIURLimage } from '../helper/apiurl'
import NumberFormat from "react-number-format";

const MenuEbike = () => {
  const [dataEbike, setDataEbike] = useState([])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-ebike`)
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
          <Link to={'/menu-details5/' + val.id}>
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
        src="https://media-cdn.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dwdfa4c984/category-landing/ebikes/world_hero_canyon_e-bikes_2019.jpg?sw=737&sfrm=jpg&q=80"
        style={{ width: "100%", height: "32pc" }}
      />

      {/* Harusnya card */}
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader">TRID</h2>
        <FaRegWindowMinimize className="StripEbike" />
        <div className='row' style={{ width: "100%", marginLeft: '1px' }}>
          {renderProduk()}
        </div>
      </div>
    </div>
  )
}

export default MenuEbike;
