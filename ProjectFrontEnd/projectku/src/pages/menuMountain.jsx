
import React, { useEffect, useState } from 'react'
import { FaRegWindowMinimize } from "react-icons/fa";
import { APIURL, APIURLimage } from '../helper/apiurl'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import NumberFormat from "react-number-format";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const MenuMountain = () => {
  const [getDataMountain, setGetDataMountain] = useState([])
  const [page, setPage] = useState(1)
  const [pager, setPager] = useState({})

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-mountain/${page}`)
      .then(res => {
        setGetDataMountain(res.data.pageOfData)
        setPager(res.data.pager)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    Axios.get(`${APIURL}admin/get-prod-mountain/${page}`)
      .then(res => {
        setGetDataMountain(res.data.pageOfData)
        setPager(res.data.pager)
      })
      .catch(err => {
        console.log(err)
      })
  }, [page])



  const renderProduk = () => {
    return getDataMountain.map((val, index) => {
      return (
        <div className="card">
          <Link to={'/menu-details2/' + val.id}>
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
    <div style={{ width: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1536244881128-90b1d3d2549f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80"
        style={{ width: "100%", height: "32pc" }}
      />
      <h2 className="CardTextHeader">XQUARONE</h2>
      <FaRegWindowMinimize className="StripMountain1" />
      <div className='row' style={{ width: "100%", marginLeft: '1px' }}>
        {renderProduk()}
      </div>

      {pager.pages && pager.pages.length &&
        // <ul className="pagination" style={{ marginLeft: "545px", marginTop: "40px", marginBottom: "60PX" }}>
        //   <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
        //     <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=1` }} className="page-link" onClick={() => setPage(pager.startPage)}>First</Link>
        //   </li>
        //   <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
        //     <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link" onClick={() => setPage(pager.currentPage - 1)}>Previous</Link>
        //   </li>
        //   {pager.pages.map(page =>
        //     <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
        //       <Link style={{ backgroundColor: "#333333", color: "white" }} to={{ search: `?page=${page}` }} className="page-link" onClick={() => setPage(page)}>{page}</Link>
        //     </li>
        //   )}
        //   <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
        //     <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link" onClick={() => setPage(pager.currentPage + 1)}>Next</Link>
        //   </li>
        //   <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
        //     <Link style={{ backgroundColor: "#212529", color: "white" }} to={{ search: `?page=${pager.totalPages}` }} className="page-link" onClick={() => setPage(pager.totalPages)}>Last</Link>
        //   </li>
        // </ul>

        <Pagination size="sm" style={{ marginBottom: "100px", marginLeft: "400px" }}>
          <PaginationItem className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
            <PaginationLink first style={{ color: "black", border: "black" }} to={{ search: `?page=1` }} onClick={() => setPage(pager.startPage)} />
          </PaginationItem>
          <PaginationItem className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`} >
            <PaginationLink previous style={{ color: "black", border: "black" }} to={{ search: `?page=${pager.currentPage - 1}` }} onClick={() => setPage(pager.currentPage - 1)} />
          </PaginationItem>
          {pager.pages.map(page =>
            <PaginationItem key={page} className={`${pager.currentPage === page ? 'active' : ''}`}>
              <PaginationLink style={{ backgroundColor: "white", color: "black", fontWeight: "bolder", border: "black" }} to={{ search: `?page=${page}` }} onClick={() => setPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem className={`${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
            <PaginationLink next style={{ color: "black", border: "black" }} to={{ search: `?page=${pager.currentPage + 1}` }} onClick={() => setPage(pager.currentPage + 1)} />
          </PaginationItem>
          <PaginationItem className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
            <PaginationLink last style={{ color: "black", border: "black" }} to={{ search: `?page=${pager.totalPages}` }} onClick={() => setPage(pager.totalPages)} />
          </PaginationItem>
        </Pagination>
      }
    </div>
  )
}

export default MenuMountain;