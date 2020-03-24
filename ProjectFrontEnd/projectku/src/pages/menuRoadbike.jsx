import React, { useState, useEffect } from "react";
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link } from 'react-router-dom'
import NumberFormat from "react-number-format";


function MenuRoadbike() {
  const [getDataProduct, setGetDataProduct] = useState([])
  const [page, setPage] = useState(1)
  const [pager, setPager] = useState({})



  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-roadbike/${page}`)
      .then(res => {
        setGetDataProduct(res.data.pageOfData)
        setPager(res.data.pager)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-roadbike/${page}`)
      .then(res => {
        setGetDataProduct(res.data.pageOfData)
        setPager(res.data.pager)
      })
      .catch(err => {
        console.log(err)
      })
  }, [page])



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
              <h5><NumberFormat value={val.harga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} className="CardTextPrice"/></h5>
            </center>
          </div>
        </div>
      )
    })
  }



  console.log(getDataProduct, 'getDataProduct')



  return (
    <div>
      <div>
        <img
          src="https://cdn.mos.cms.futurecdn.net/EWXBvRyu3ZEhV2vuayNwMZ.jpg"
          alt="co"
          style={{ width: "100%", height: "32pc" }}
        />
      </div>

      <div style={{ display: "column", marginBottom: "100px" }}>
        <h2 className="CardTextHeader">HELIOS STRATTOS BEND</h2>
        <FaRegWindowMinimize className="StripRoadbike1" />
        <div className='row' style={{ width: "100%", marginLeft: '1px', marginBottom: "70px" }}>
          {renderProduk()}
        </div>
        {pager.pages && pager.pages.length &&
          <ul className="pagination" style={{ marginLeft: "545px", marginTop: "40px", marginBottom: "60PX" }}>
            <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
              <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=1` }} className="page-link" onClick={() => setPage(pager.startPage)}>First</Link>
            </li>
            <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
              <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link" onClick={() => setPage(pager.currentPage - 1)}>Previous</Link>
            </li>
            {pager.pages.map(page =>
              <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                <Link style={{ backgroundColor: "#333333", color: "white" }} to={{ search: `?page=${page}` }} className="page-link" onClick={() => setPage(page)}>{page}</Link>
              </li>
            )}
            <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
              <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link" onClick={() => setPage(pager.currentPage + 1)}>Next</Link>
            </li>
            <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
              <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=${pager.totalPages}` }} className="page-link" onClick={() => setPage(pager.totalPages)}>Last</Link>
            </li>
          </ul>
        }

      </div>
    </div>
  );
}



export default MenuRoadbike;
