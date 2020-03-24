import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from 'react-redux'
import { Table, Button, CustomInput } from "reactstrap";
import Axios from 'axios'
import { APIURL, APIURLimage } from "../helper/apiurl";



function ManageUsers() {
  const [getDataPayment, setGetDataPayment] = useState([])
  // const [confirmPayment, setConfirmPayment] = useState([])
  // const [updatePayment, setUpdatePayment] = useState([])
  const Loading = useSelector(state => state.auth.loading)


  useEffect(() => {
    Axios.get(`${APIURL}admin/getPayment`)
      .then(res => {
        setGetDataPayment(res.data.dataPayment)
        // setConfirmPayment(res.data.updateStatus)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const onConfirmClick = (idtransaksi) => {
    Axios.put(`${APIURL}admin/updatePayment/${idtransaksi}`)
      .then(res => {
        setGetDataPayment(res.data.dataPayment)
        console.log(res.data)
        alert("Confirm Payment")
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onDeclineClick = (idtransaksi) => {
    Axios.put(`${APIURL}admin/declinePayment/${idtransaksi}`)
      .then(res => {
        setGetDataPayment(res.data.dataPayment)
        // console.log(res.data)
        alert("Decline Payment")
      }).catch(err => {
        console.log(err)
      })
  }


  // useEffect(() => {
  //   Axios.put(`${APIURL}admin/confirmPayment`)
  //     .then(res => {
  //       setUpdatePayment(res.data.updateStatus)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  const renderPayment = () => {
    return getDataPayment.map((val) => {
      return (
        <tr>
          <th scope="row">1</th>
          <td>{val.nama}</td>
          <td>{val.email}</td>
          <td>{val.alamat}</td>
          <td>{val.nomor}</td>
          <td>
            <img src={APIURLimage + val.foto} style={{ width: "160px", height: "140px" }} />
          </td>
          <td>{val.idtransaksi}</td>
          <td>{val.tanggal}</td>
          <td>{val.produk}</td>
          <td>{val.jumlah}</td>
          <td >
            <button onClick={() => onConfirmClick(val.idtransaksi)} style={{ border: "1px solid", marginLeft: "10px", marginRight: "10px" }}>Confirm</button>
            <button onClick={() => onDeclineClick(val.idtransaksi)} style={{ border: "1px solid", marginLeft: "13px", marginTop: "20px" }}>Decline</button>
          </td>
        </tr>
      )
    })
  }

  if (Loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <Fragment>
      <Table style={{ marginBottom: "150px" }} bordered style={{ width: "90%", marginLeft: "70px" }} >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>Nomor</th>
            <th>Foto</th>
            <th>transaksiid</th>
            <th>tanggal</th>
            <th>Produk</th>
            <th>jumlah</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderPayment()}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default ManageUsers;
