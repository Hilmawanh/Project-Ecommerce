import React, { useState, useEffect } from 'react'
import { FaRegWindowMinimize } from "react-icons/fa";
import { FiSmile } from 'react-icons/fi'
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { useParams } from 'react-router-dom'

const MenuDatails = () => {

  const { detailId } = useParams()

  // State Roadbike //
  const [getViewDetailsHelios, setGetViewDetailsHelios] = useState([])
  const [getViewDetailStrattos, setGetViewDetailsStrattos] = useState([])
  const [getViewDetailBend, setGetViewDetailsBend] = useState([])

  // View Details Helios //
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

  // View Details Strattos // 
  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details/${detailId}`)
      .then(res => {
        setGetViewDetailsStrattos(res.data.detailRoadbikeStrattos)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // View Details Bend //
  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details/${detailId}`)
      .then(res => {
        setGetViewDetailsBend(res.data.detailRoadbikeBend)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // Render Detail Roadbike //
  const renderViewDetailsHelios = () => {
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
                style={{ height: "100%", width: "100%", marginTop: "20px" }}
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

  const renderViewDetailsStrattos = () => {
    return getViewDetailStrattos.map((val, index) => {
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

  const renderViewDetailBend = () => {
    return getViewDetailBend.map((val, index) => {
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

  // =========================================== Roadbike ================================= \\

  // State Mountain //
  const [GetViewDetailMountain, setGetViewDetailMountain] = useState([])

  // View Details Mountain //
  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details2/${detailId}`)
      .then(res => {
        setGetViewDetailMountain(res.data.detailMountain)
      })
      .catch(err => {
        console.log(err)
      })
  })

  // Render Detail Mountain //
  const renderViewDetailsMountain = () => {
    return GetViewDetailMountain.map((val, index) => {
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h2 className='MenuDetailsChild2'>{val.produk}</h2>
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

  // =========================================== Mountain ================================= \\

  // State Daily //
  const [getViewDataDaily, setGetViewDataDaily] = useState([])
  const [getViewDataBmx, setGetViewDataBmx] = useState([])
  const [getViewDataEbike, setGetViewEbike] = useState([])

  // State Daily //
  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details3/${detailId}`)
      .then(res => {
        setGetViewDataDaily(res.data.detailDaily)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // State Bmx // 
  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details3/${detailId}`)
      .then(res => {
        setGetViewDataBmx(res.data.detailBmx)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // State Ebike // 
  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details3/${detailId}`)
      .then(res => {
        setGetViewEbike(res.data.detailEbike)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderViewDetailsDaily = () => {
    return getViewDataDaily.map((val, index) => {
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h2 className='MenuDetailsChild2'>{val.produk}</h2>
              <FaRegWindowMinimize className='StripMenuDetails' />
              <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
            </div>
          </div>
          <div className='MenuDetailsParents2'>
            <div className='MenuDetailsChild3'>
              <img
                src={APIURLimage + val.gambar}
                style={{ height: "100%", width: "100%", marginTop: "40px" }}
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

  const renderViewDetailsBmx = () => {
    return getViewDataBmx.map((val, index) => {
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h2 className='MenuDetailsChild2'>{val.produk}</h2>
              <FaRegWindowMinimize className='StripMenuDetails' />
              <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
            </div>
          </div>
          <div className='MenuDetailsParents2'>
            <div className='MenuDetailsChild3'>
              <img
                src={APIURLimage + val.gambar}
                style={{ height: "100%", width: "100%", marginTop: "40px" }}
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

  const renderViewDetailsEbike = () => {
    return getViewDataEbike.map((val, index) => {
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h2 className='MenuDetailsChild2'>{val.produk}</h2>
              <FaRegWindowMinimize className='StripMenuDetails' />
              <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
            </div>
          </div>
          <div className='MenuDetailsParents2'>
            <div className='MenuDetailsChild3'>
              <img
                src={APIURLimage + val.gambar}
                style={{ height: "100%", width: "100%", marginTop: "40px" }}
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

  // ======================================== Daily , Bmx , Ebike =================================\\

  const [getViewDataApparels, setGetViewDataApparels] = useState([])
  const [getViewDataGear, setGetViewDataGear] = useState([])

  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details4/${detailId}`)
      .then(res => {
        setGetViewDataApparels(res.data.detailApparels)
      })
      .catch(err => {
        console.log(err)
      })
  })

  useEffect(() => {
    Axios.get(`${APIURL}admin/view-details4/${detailId}`)
      .then(res => {
        setGetViewDataGear(res.data.detailSpareParts)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const renderViewDetailsApparels = () => {
    return getViewDataApparels.map((val, index) => {
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h2 className='MenuDetailsChild2'>{val.produk}</h2>
              <FaRegWindowMinimize className='StripMenuDetails' />
              <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
            </div>
          </div>
          <div className='MenuDetailsParents2'>
            <div className='MenuDetailsChild3'>
              <img
                src={APIURLimage + val.gambar}
                style={{ height: "100%", width: "100%", marginTop: "40px" }}
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

  const renderViewDetailsGear = () => {
    return getViewDataGear.map((val, index) => {
      return (
        <div className='MenuDetailsParents'>
          <div className='MenuDetailsChild1'>
            <div className='container'>
              <h2 className='MenuDetailsChild2'>{val.produk}</h2>
              <FaRegWindowMinimize className='StripMenuDetails' />
              <h2 style={{ marginTop: "20px", fontFamily: "Lato" }}>2019</h2>
            </div>
          </div>
          <div className='MenuDetailsParents2'>
            <div className='MenuDetailsChild3'>
              <img
                src={APIURLimage + val.gambar}
                style={{ height: "100%", width: "100%", marginTop: "40px" }}
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


  // ========================================= Apparels & SpareParts ================================\\
  return (
    <div>
      {/* Detail Roadbike Started */}
      {renderViewDetailsHelios()}
      {renderViewDetailsStrattos()}
      {renderViewDetailBend()}
      {/* Detail Mountain Started */}
      {renderViewDetailsMountain()}
      {/*  */}
      {renderViewDetailsDaily()}
      {/*  */}
      {renderViewDetailsBmx()}
      {/*  */}
      {renderViewDetailsEbike()}
      {/*  */}
      {renderViewDetailsApparels()}
      {/*  */}
      {renderViewDetailsGear()}
    </div>
  )
}

export default MenuDatails;