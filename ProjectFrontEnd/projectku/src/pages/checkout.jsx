import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CustomInput } from 'reactstrap'
import Axios from "axios";
import { APIURL } from '../helper/apiurl'
import { cartProduk } from '../redux/actions';
import { Redirect } from 'react-router-dom'
import NumberFormat from "react-number-format";


const CheckOut = () => {

    const dispatch = useDispatch()

    const [getCheckout, setGetCheckout] = useState([])
    const [inputTransaksiDetail, setInputTransaksiDetail] = useState({}) // Ini buat detail Transaksi
    const [gambarDetail, setGambarDetail] = useState([]) // Ini buat Gambar Detail
    const [buyStatus, setBuyStatus] = useState(false)
    const UserIdRedux = useSelector(state => state.auth.id)
    const totalHarga = useSelector(state => state.cartReducers.dataTotalHarga)
    const loading = useSelector(state => state.auth.loading)
    const Cart = useSelector(state => state.cartReducers.Cart)
    const [redirectCart, setRedirectCart] = useState(false)


    useEffect(() => {
        const UserIdRedux = localStorage.getItem('userid')
        Axios.get(`${APIURL}auth/getCheckout/${UserIdRedux}`)
            .then(res => {
                setGetCheckout(res.data.dataCheckOut)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const onBackCart = () => {
        for (var e = 0; e < Cart.length; e++) {
            var data = {
                id: Cart[e].id,
                userid: Cart[e].userid,
                productid: Cart[e].productid,
                harga: Cart[e].harga,
                jumlah: Cart[e].jumlah,
                total: Cart[e].total,
                status: 'cart'
            }
            Axios.put(`${APIURL}auth/checkoutCancel/${UserIdRedux}`, { data })
                .then(res => {
                    dispatch(cartProduk())
                })
                .catch(err => {
                    console.log(err)
                })
        }
        setRedirectCart(true)
    }

    // Hande detail transaksi 
    const detailTransaksi = e => {
        const { value, name } = e.target
        setInputTransaksiDetail({ ...inputTransaksiDetail, [name]: value })
    }
    // Handle gambar transaksi
    const imageTransaksi = e => {
        setGambarDetail([...gambarDetail, ...e.target.files])
    }

    // Handle beli produk
    const beliProduk = () => {
        const transaksiId = [] // Tamput id transaksi didalam array
        for (let i = 0; i < getCheckout.length; i++) {
            transaksiId.push(getCheckout[i].id)
        }
        console.log(transaksiId, 'transaksiId')
        console.log(inputTransaksiDetail, 'detail')
        console.log(gambarDetail, 'gambarDetail')
        var formdata = new FormData();
        const token = localStorage.getItem("token");
        var Headers = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        };
        formdata.append("image", gambarDetail[0]);
        formdata.append("data", JSON.stringify(inputTransaksiDetail));
        formdata.append("transaksiId", JSON.stringify(transaksiId))
        formdata.append("dataCart", JSON.stringify(getCheckout))
        // Json.stringfy untuk ubah data ke string
        // formdata.append untuk nambah data


        Axios.post(`${APIURL}auth/userTransaksi`, formdata, Headers)
            .then(res => {
                console.log(res.data)
                if (res.data.updateStatus) {
                    setBuyStatus(true)
                    alert('Berhasil Checkout')
                }

            })
            .catch(err => {
                console.log(err)
            })
    }


    const renderCheckout = () => {
        return getCheckout.map((val, index) => {
            return (
                <div>
                    <div style={{ display: "flex" }}>
                        <p style={{ marginRight: "380px", fontWeight: "bolder" }}>{val.produk}</p>
                        <p>IDR.{val.total}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <h6>size :</h6>
                        <h5 style={{ fontSize: "12px", marginTop: "4px", marginLeft: "5px" }}> {val.ukuranproduk}</h5>
                    </div>
                    <div style={{ display: "flex" }}>
                        <h6>quantity :</h6>
                        <h5 style={{ fontSize: "12px", marginTop: "4px", marginLeft: "5px" }}> {val.jumlah} x {val.harga}</h5>
                    </div>
                    <hr></hr>
                </div>
            )
        })
    }

    if (buyStatus) {
        return <Redirect to='/' />
    }

    if (redirectCart === true) {
        return <Redirect to={'/cart'} />
    }

    if (loading) {
        return (<div>loading</div>)
    }
    return (
        <div className='container' style={{ display: "flex", marginTop: "160px", marginBottom: "60px" }}>
            <div style={{ width: "50%", height: "1000px", display: "column", marginLeft: "40px" }}>
                <h4 style={{ fontWeight: "bolder" }}>Shipping details</h4>
                <br />
                <h6>Country* </h6>
                <p>indonesia</p>

                <h6 style={{ fontWeight: "bolder" }}>Your Name*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} name='nama' onChange={detailTransaksi} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Your Email*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} name='email' onChange={detailTransaksi} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Your Adress*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} name='alamat' onChange={detailTransaksi} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Phone*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} name='nomor' onChange={detailTransaksi} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Transactions*</h6>
                <div style={{ width: "47%" }}>
                <CustomInput type='file'
                        className="form-control"
                        name='foto'
                        style={{}}
                />
                </div>
                <br />
                <button style={{ marginTop: "20px", width: "140px", border: "1px solid", height: "50px", backgroundColor: "#212529", color: "white" }} onClick={beliProduk}>
                    Buy
                </button>

            </div>
            <div style={{ width: "50%", height: "1000px", display: "column" }}>
                <h4 style={{ fontWeight: "bolder" }}>Your Order</h4>
                <br />
                <div style={{ display: "flex" }}>
                    <h5 style={{ marginRight: "417px" }}>Product</h5>
                    <h5>Total</h5>
                </div>
                <hr></hr>
                <div>
                    {renderCheckout()}
                </div>
                <hr></hr>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "345px", fontWeight: "bolder" }}>SUBTOTAL</p>
                    <p><NumberFormat value={totalHarga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} /></p>
                </div>
                <hr></hr>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "375px", fontWeight: "bolder" }}>TOTAL</p>
                    <p><NumberFormat value={totalHarga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} /></p>

                </div>

                {/* <button style={{ width: "100%", height: "55px", border: "2px solid" }} onClick={onBackCart}>Cancel Checkout</button> */}
            </div>

            <div>
            </div>
        </div>
    )
}




export default CheckOut;

