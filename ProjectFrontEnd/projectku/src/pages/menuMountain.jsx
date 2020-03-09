
import React, { useEffect, useState } from 'react'
import { FaRegWindowMinimize } from "react-icons/fa";
import { APIURL, APIURLimage } from '../helper/apiurl'
import Axios from 'axios'


const MenuMountain = () => {
  const [getDataMountain, setGetDataMountain] = useState([])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        setGetDataMountain(res.data.dataMountain)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const renderProduk = () => {
    return getDataMountain.map((val, index) => {
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


  return (
    <div style={{ width: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1536244881128-90b1d3d2549f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80"
        style={{ width: "100%", height: "30pc" }}
      />
      <h2 className="CardTextHeader">XQUARONE</h2>
      <FaRegWindowMinimize className="StripMountain1" />
      <div className='row' style={{ width: "100%", marginLeft: '1px' }}>
        {renderProduk()}
      </div>
    </div>)
}

export default MenuMountain;