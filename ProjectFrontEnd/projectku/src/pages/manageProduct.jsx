import React, { useState, useEffect, Fragment, useRef } from "react";
import { Table, Button, CustomInput } from "reactstrap";
import { APIURL, APIURLimage } from "../helper/apiurl";
import Modal from "../components/modal";
import Axios from 'axios'

function ManageProduct() {
  const [dataproduct, setdataproduct] = useState([])
  const [addDataProduct, setAddDataProduct] = useState([])
  const [datacategory, setdatacategory] = useState([])
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


  const [dataAdd] = useState({
    produk: useRef(),
    deskripsi: useRef(),
    harga: useRef(),
    stock: useRef(),
    ukuranproduk: useRef(),
  })

  const toggleadd = () => setmodaladd(!modaladd);

  useEffect(() => {
    console.log('didmount')
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        console.log(res.data)
        setdataproduct(res.data.dataProduk)
        setdatacategory(res.data.dataCategory)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // ===== Add Data Produk ===== // 
  const addData = () => {
    var formdata = new FormData();
    const token = localStorage.getItem("token");
    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }
    };
    formdata.append("image", addimagefile.addImageFile);
    formdata.append("data", JSON.stringify(addDataProduct));
    Axios.post(`${APIURL}admin/add-prod`, formdata, Headers)
      .then(res => {
        setdataproduct(res.data.dataProduk)
        setdatacategory(res.data.dataCategory)
        setmodaladd(!modaladd)
      })
      .catch(err => {
        console.log(err, 'Error Add data Bro')
      })
  };

  const onChangeAddData = e => {
    const { name, value } = e.target
    setAddDataProduct({ ...addDataProduct, [name]: value })
  }

  const onAddImageFileChange = event => {
    console.log('event.target.files[0]', event.target.files[0])
    var file = event.target.files[0]
    if (file) {
      setaddimagefile({ ...addimagefile, addImageFileName: file.name, addImageFile: event.target.files[0] })
    } else {
      setaddimagefile({ ...addimagefile, addImageFileName: "Select Image....", addImageFile: undefined })
    }
  }

  // ===== Edit Data Produk ===== //
  var formdata = new FormData()
  var Headers = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  formdata.append("image", editimagefile.editImageFile);

  const oneditImageFileChange = event => {
    console.log("event.target.files[0]", event.target.files[0]);
    console.log("event.target", event.target);
    var file = event.target.files[0];
    if (file) {
      setimageedit({ ...editimagefile, editimagefilename: file.name, editImageFile: event.target.files[0] });
    } else {
      setimageedit({ ...editimagefile, editimagefilename: "Select Image...", editImageFile: undefined });
    }
  };

  const renderProduct = () => {
    console.log('data product', dataproduct)
    return dataproduct.map((val, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td> {val.produk}</td>
          <td className='DeskipsiProduct'>{val.deskripsi}</td>
          <td>{val.harga}</td>
          <td>
            <img src={`${APIURLimage + val.gambar}`} alt={index} width="160px" height="140px" />
          </td>
          <td>{val.stock}</td>
          <td>{val.ukuranproduk}</td>
          <td>{val.categoryBike}</td>
          <td>
            <button className='EditManage'>Edit</button>
            <button className='DeleteManage'>Delete</button>
          </td>
        </tr>
      )
    })
  }



  return (
    <Fragment>
      <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "40px" }}>
        <button className='ButtonManageProduct' outline onClick={toggleadd}>
          Add Product
        </button>
      </div>
      <Modal title="Add Product" toggle={toggleadd} modal={modaladd} actionfunc={addData} btnTitle='Save'>
        <input type='text' name='produk' placeholder='Nama Produk' className='form-control' onChange={onChangeAddData} />
        <input type='text' name='deskripsi' placeholder='Deskripsi' className='form-control' onChange={onChangeAddData} />
        <input type='text' name='harga' placeholder='Harga' className='form-control' onChange={onChangeAddData} />
        <CustomInput type='file'
          label={addimagefile.addImageFileName}
          id="addImagePost"
          className="form-control"
          onChange={onAddImageFileChange} />

        <input type='text' name='stock' placeholder='Jumlah Produk' className='form-control' onChange={onChangeAddData} />
        <input type='text' name='ukuranproduk' placeholder='Ukuran Product' className='form-control' onChange={onChangeAddData} />
        <select name='categoryid' className='form-control' onChange={onChangeAddData} >
          <option hidden>Pilih Category Sepeda</option>
          {datacategory.map((val, index) => {
            return (
              <option key={index} value={val.id}>
                {val.category}
              </option>
            )
          })}
        </select>
      </Modal>
      <Table style={{ marginBottom: "170px", width: "90%", marginLeft: "80px" }} bordered>
        <thead>
          <tr>
            <th>No</th>
            <th style={{ width: "8%" }}>Produk</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Gambar</th>
            <th>Jumlah Product</th>
            <th>Ukuran Product</th>
            <th>Category Sepeda</th>
            <th style={{ width: "11%" }}> Action</th>
          </tr>
        </thead>
        <tbody>
          {renderProduct()}
        </tbody>
      </Table>

    </Fragment>
  );
}

export default ManageProduct;
