import React, { useState, useEffect, Fragment } from "react";
import { Table, Button, CustomInput } from "reactstrap";
import { APIURL, APIURLimage } from "../helper/apiurl";
import Modal from "../components/modal";
import Axios from 'axios'

function ManageProduct() {
  const [dataproduct, setdataproduct] = useState([])
  const [datacategory, setdatacategory] = useState([])
  const [addDataProduk, setaddDataProduk] = useState([]);
  const [editdataproduk, seteditdataproduk] = useState([]);
  const [deletedataproduk, setdeletedataproduk] = useState([]);
  const [produk, setproduk] = useState([]);
  const [modal, setModal] = useState(false);
  const [modaldelete, setModaldelete] = useState(false);
  const [modaladd, setmodaladd] = useState(false);
  const [addimagefile, setaddimagefile] = useState({
    addImageFileName: "Select Image....",
    addImageFile: undefined
  });
  const [editimagefile, setimageedit] = useState({
    editimagefilename: "Select Image....",
    editImageFile: undefined
  });

  const toggleadd = () => setmodaladd(!modaladd);

  const addData = () => {
    var formdata = new FormData();
    const token = localStorage.setItem("token");
    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }
    };

    formdata.append("image", addimagefile.addImageFile);
    formdata.append("data", JSON.stringify(addDataProduk));
    Axios.post(`${APIURL}admin/add-prod`, formdata, Headers)
      .then(res => {
        console.log(res)
        setdataproduct(res.data.dataProduct)
        setdatacategory(res.data.dataCategory)
        setmodaladd(!modaladd)
      })
  };
  return (
    <Fragment>
      <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "40px" }}>
        <button className='ButtonManageProduct' outline onClick={toggleadd}>
          Add Product
        </button>
      </div>
      <Modal title="Add Product" toggle={toggleadd} modal={modaladd} actionfunc={addData} btnTitle='Save'>
        <input type='text' name='Nama Produk' placeholder='Nama Produk' className='form-control' />
        <input type='text' name='Deskripsi' placeholder='Deskripsi' className='form-control' />
        <input type='text' name='Harga' placeholder='Harga' className='form-control' />
        {/* <select name='categoryid' className='form-control' placeholder='Input Image' /> */}
        <CustomInput type='file' className='form-control' />

        <input type='text' name='Jumlah Produk' placeholder='Jumlah Produk' className='form-control' />
        <input type='text' name='Ukuran Product' placeholder='Ukuran Product' className='form-control' />
      </Modal>
      <Table style={{ marginBottom: "170px" }} className='container' bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Produk</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Gambar</th>
            <th>Jumlah Product</th>
            <th>Ukuran Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

    </Fragment>
  );
}

export default ManageProduct;
