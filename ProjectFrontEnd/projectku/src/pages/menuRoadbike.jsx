import React, { useState, useEffect } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link } from 'react-router-dom'


function MenuRoadbike() {
  const [getDataProduct, setGetDataProduct] = useState([])
  const [getDataProductStarttos, setGetDataProductStarttos] = useState([])
  const [getDataProductBend, setGetDataProductBend] = useState([])

  // Get data Produk Helios
  useEffect(() => {
    console.log('didmount')
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        setGetDataProduct(res.data.dataRoadbike)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // Get data Produk Strattos
  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-category`)
      .then(res => {
        setGetDataProductStarttos(res.data.dataStrattos)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  // Get data Produk Bend
  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-category`)
      .then(res => {
        setGetDataProductBend(res.data.dataBend)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  const renderProduk = () => {
    return getDataProduct.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details/' + val.id}>
            <img src={APIURLimage + val.gambar} style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4 className="MenuDailyNamaProduk">
              <h5 style={{ fontFamily: "Poppins", fontWeight: "bolder" }}>{val.produk}</h5>
            </h4>
            <center>
              <p style={{ color: "black" }}>{val.deskripsi}</p>
            </center>
            <center>
              <h5 className="CardTextPrice">Rp.{val.harga}</h5>
            </center>
          </div>
        </div>
      )
    })
  }

  const renderProdukStrattos = () => {
    return getDataProductStarttos.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details/' + val.id}>
            <img src={APIURLimage + val.gambar} style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4 className="MenuDailyNamaProduk">
              <h5 style={{ fontFamily: "Poppins", fontWeight: "bolder" }}>{val.produk}</h5>
            </h4>
            <center>
              <p style={{ color: "black" }}>{val.deskripsi}</p>
            </center>
            <center>
              <h5 className="CardTextPrice">Rp.{val.harga}</h5>
            </center>
          </div>
        </div >
      )
    })
  }

  const renderProdukBend = () => {
    return getDataProductBend.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details/' + val.id}>
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
      <div>
        <img
          src="https://cdn.mos.cms.futurecdn.net/EWXBvRyu3ZEhV2vuayNwMZ.jpg"
          alt="co"
          style={{ width: "100%", height: "30pc" }}
        />
      </div>

      {/* Harusnya card */}
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader">HELIOS STRATTOS BEND</h2>
        <FaRegWindowMinimize className="StripRoadbike1" />
        <div className='row' style={{ width: "100%", marginLeft: '1px' }}>
          {renderProduk()}
        </div>
      </div>
      {/* 
      Harusnya card
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader2">STRATTOS</h2>
        <FaRegWindowMinimize className="StripRoadbike2" />
        <div style={{ display: "flex" }}>
          {renderProdukStrattos()}
        </div>
      </div>

      Harusnya card
      <div style={{ display: "column" }}>
        <h2 className="CardTextHeader2">BEND</h2>
        <FaRegWindowMinimize className="StripRoadbike3" />
        <div style={{ display: "flex" }}>
          {renderProdukBend()}
        </div>
      </div> */}
    </div>
  );
}



export default MenuRoadbike;
