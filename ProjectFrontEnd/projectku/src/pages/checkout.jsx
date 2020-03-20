import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CustomInput } from 'reactstrap'
import Axios from "axios";
import { APIURL } from '../helper/apiurl'


const CheckOut = () => {

    const [getCheckout, setGetCheckout] = useState([])
    const UserIdRedux = useSelector(state => state.auth.id)
    const totalHarga = useSelector(state => state.cartReducers.dataTotalHarga)
    const loading = useSelector(state => state.auth.loading)

    useEffect(() => {
        Axios.get(`${APIURL}auth/getCheckout/${UserIdRedux}`)
            .then(res => {
                setGetCheckout(res.data.dataCheckOut)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                </div>
            )
        })
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
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Your Email*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Your Adress*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Phone*</h6>
                <input type="text" style={{ border: "1px solid", height: "40px", width: "250px" }} />
                <br />
                <br />
                <h6 style={{ fontWeight: "bolder" }}>Transactions*</h6>
                <div style={{ width: "47%" }}>
                    <CustomInput type='file'
                        // id="addImagePost"
                        className="form-control"

                    />
                </div>
                <br />
                <button style={{ marginTop: "20px", width: "140px", border: "1px solid", height: "50px", backgroundColor: "#212529", color: "white" }}>
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
                    <p>IDR.{totalHarga}</p>
                </div>
                <hr></hr>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "375px", fontWeight: "bolder" }}>TOTAL</p>
                    <p>IDR.{totalHarga}</p>
                </div>
            </div>
        </div>
    )
}




export default CheckOut;

