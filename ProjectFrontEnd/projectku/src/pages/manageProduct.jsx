import React, { useState, useEffect, Fragment, useRef } from "react";
import { Table, Button, CustomInput } from "reactstrap";
import { APIURL, APIURLimage } from "../helper/apiurl";
import Modal from "../components/modal";
import Axios from 'axios'

function ManageProduct() {
  const [dataproduct, setdataproduct] = useState([])
  const [addDataProduct, setAddDataProduct] = useState([])
  const [datacategory, setdatacategory] = useState([])
  const [editDataProduk, setEditDataProduk] = useState([]);
  const [editdatacategory, setEditCategory] = useState({})
  const [DataEditBackend, setDataEditBackend] = useState([])
  const [deletedataproduk, setdeletedataproduk] = useState([]);
  const [produk, setproduk] = useState([]);
  const [modaldelete, setModaldelete] = useState(false);
  const [modaladd, setmodaladd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [addimagefile, setaddimagefile] = useState({
    addImageFileName: "Select Image....",
    addImageFile: undefined
  });

  const [editimagefile, setImageEditFile] = useState({
    editimagefilename: "Select Image....",
    editImageFile: undefined
  });

  const toggleadd = () => setmodaladd(!modaladd);

  const toggleedit = () => setModalEdit(!modalEdit)

  const toggleDelete = () => setModalDelete(!modaldelete);

  useEffect(() => {
    console.log('didmount')
    Axios.get(`${APIURL}admin/get-prod`)
      .then(res => {
        console.log(res.data)
        setdataproduct(res.data.dataProduk)
        setdatacategory(res.data.dataCategory)
        setDataEditBackend(res.data.dataEdit)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // ===== Add Data Produk ===== // 
  const addData = () => {
    if (dataproduct.length === 0) {
      return <div>loading....</div>
    }

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
  const editData = () => {
    console.log('editimagefile', editimagefile)
    console.log('editDataProduk', editDataProduk);

    var formdata = new FormData()
    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    formdata.append("image", editimagefile.editImageFile);
    formdata.append('data', JSON.stringify(editDataProduk));
    formdata.append('category', JSON.stringify(editDataProduk));
    console.log('aa', editDataProduk)
    Axios.put(`${APIURL}admin/edit-prod/${editDataProduk.id}`, formdata, Headers)
      .then(res => {
        console.log("masuk", res)
        // setEditDataProduk(res.data.dataProduk)
        // setEditCategory(res.data.dataCategory)
        setdataproduct(res.data.dataProduk)
        setdatacategory(res.data.dataCategory)
        setModalEdit(!modalEdit)
      })
      .catch(err => {
        console.log("error di axios", editDataProduk)

      })
  }

  const onChangeEditData = e => {
    const { name, value } = e.target
    setEditDataProduk({ ...editDataProduk, [name]: value })
  }

  const openToggleEdit = index => {
    setEditDataProduk(DataEditBackend[index])
    setModalEdit(true)
  }

  const onEditImageFileChange = event => {
    console.log("event.target.files[0]", event.target.files[0]);
    console.log("event.target", event.target);
    var file = event.target.files[0];
    if (file) {
      setImageEditFile({ ...editimagefile, editImageFileName: file.name, editImageFile: event.target.files[0] });
    } else {
      setImageEditFile({ ...editimagefile, editImageFileName: "Select Image...", editImageFile: undefined });
    }
  };

  // ===== Delete Data Product ===== \\





  const renderProduct = () => {
    console.log('DataEditBackend', DataEditBackend)
    console.log('dataproduct', dataproduct);

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
          <td>{val.category}</td>
          <td>
            <button className='EditManage' onClick={() => openToggleEdit(index)}>Edit</button>
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
        <input style={{ marginBottom: "10px" }} type='text' name='produk' placeholder='Nama Produk' className='form-control' onChange={onChangeAddData} />
        <input style={{ marginBottom: "10px" }} type='text' name='deskripsi' placeholder='Deskripsi' className='form-control' onChange={onChangeAddData} />
        <input style={{ marginBottom: "10px" }} type='text' name='harga' placeholder='Harga' className='form-control' onChange={onChangeAddData} />
        <CustomInput type='file'
          label={addimagefile.addImageFileName}
          id="addImagePost"
          className="form-control"
          onChange={onAddImageFileChange} />

        <input style={{ marginBottom: "10px", marginTop: "10px" }} type='text' name='stock' placeholder='Jumlah Produk' className='form-control' onChange={onChangeAddData} />
        <input style={{ marginBottom: "10px" }} type='text' name='ukuranproduk' placeholder='Ukuran Product' className='form-control' onChange={onChangeAddData} />
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

      <Modal title={`Edit produk ${editDataProduk.produk}`} toggle={toggleedit} modal={modalEdit} actionfunc={editData} btnTitle='Save'>
        <input style={{ marginBottom: "10px" }} name='produk' type='text' className='form-control' value={editDataProduk.produk} onChange={onChangeEditData} />
        <input style={{ marginBottom: "10px" }} name='deskripsi' type='text' className='form-control' value={editDataProduk.deskripsi} onChange={onChangeEditData} />
        <input style={{ marginBottom: "10px" }} name='harga' type='text' className='form-control' value={editDataProduk.harga} onChange={onChangeEditData} />
        <CustomInput type="file"
          label={editimagefile.editimagefilename}
          id="editImagePost"
          className="form-control"
          onChange={onEditImageFileChange} />

        <input style={{ marginBottom: "10px", marginTop: "10px" }} type='text' name='stock' className='form-control' value={editDataProduk.stock} onChange={onChangeEditData} />
        <input style={{ marginBottom: "10px" }} type='text' name='ukuranproduk' className='form-control' value={editDataProduk.ukuranproduk} onChange={onChangeEditData} />
        <select style={{ marginBottom: "10px" }} type='text' name='categoryid' className='form-control' value={editDataProduk.categoryid} onChange={onChangeEditData}  >
          <option hidden>Edit Category Sepeda</option>
          {datacategory.map((val, index) => {
            return (
              <option key={index} value={val.id}>
                {val.category}
              </option>
            )
          })}
        </select>
      </Modal>

      <Table style={{ marginBottom: "170px", width: "90%", marginLeft: "80px" }} responsive >
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