import React, { useState, useEffect } from 'react'
import { FaRegWindowMinimize } from "react-icons/fa";
import { FiSmile } from 'react-icons/fi'
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { useParams } from 'react-router-dom'

const MenuDatails = () => {

  const [getViewDetailsHelios, setGetViewDetailsHelios] = useState([])

  const { detailId } = useParams()

  useEffect(() => {
    console.log(detailId)
    Axios.get(`${APIURL}admin/view-details/${detailId}`)
      .then(res => {
        setGetViewDetailsHelios(res.data.detailRoadbikeHelios)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderViewDetails = () => {
    return getViewDetailsHelios.map((val, index) => {
      console.log('val', val)
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h1 className='MenuDetailsChild2'>{val.produk}</h1>
              <FaRegWindowMinimize className='StripMenuDetails' />
              <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
            </div>
          </div>
          <div className='MenuDetailsParents2'>
            <div className='MenuDetailsChild3'>
              <img
                src={APIURLimage + val.gambar}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className='MenuDetailsMenuKanan'>
              <h5>Rp. {val.harga}</h5>
              <h6 style={{ marginTop: "30px" }}>{val.deskripsi}</h6>
              <div className='MenuDetailsMenuKananSize'>
                <h4>Size</h4>
                <h6 style={{ marginTop: "6px", marginLeft: "40px" }}>{val.ukuranproduk}</h6>
                {/* <h6 style={{ marginTop: "6px", marginLeft: "40px" }}>52</h6> */}
                {/* <select name="" id="" style={{ width: "100px", height: "27px", marginTop: "2px", marginLeft: "60px" }}></select> */}
              </div>
              <div className='MenuDetailsMenuKananStock'>
                <FiSmile className='MenuDetailsMenuKananSmile' />
                <h6 style={{ color: "green" }}>In Stock</h6>
              </div>
              <button className='MenuDetailsMenuKananButton'>ADD TO CART</button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {/* <div className='MenuDetailsChild1'>
        <div className='container'>
          <h1 className='MenuDetailsChild2'>HELIOS LT9X</h1>
          <FaRegWindowMinimize className='StripMenuDetails' />
          <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
        </div>
      </div>
      <div className='MenuDetailsParents2'>
        <div className='MenuDetailsChild3'>
          <img
            src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9X_ACE_P.png"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className='MenuDetailsMenuKanan'>
          <h5>IDR. 51.000.000.00 </h5>
          <h6 style={{ marginTop: "30px" }}>3
            Constructed to pull riders riding on fast road, <br />
            Offering a good compliance and control.
        </h6>
          <div className='MenuDetailsMenuKananSize'>
            <h4>Size</h4>
            <h6 style={{ marginTop: "6px", marginLeft: "40px" }}>51</h6>
          </div>
          <div className='MenuDetailsMenuKananStock'>
            <FiSmile className='MenuDetailsMenuKananSmile' />
            <h6 style={{ color: "green" }}>In Stock</h6>
          </div>
          <button className='MenuDetailsMenuKananButton'>ADD TO CART</button>
        </div>
      </div> */}
      {renderViewDetails()}
    </div>
  )
}

export default MenuDatails;