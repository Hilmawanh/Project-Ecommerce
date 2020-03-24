import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaRegWindowMinimize } from "react-icons/fa";
import { FiSmile } from 'react-icons/fi'
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { useParams } from 'react-router-dom'
import NumberFormat from "react-number-format";

const MenuDetails3 = () => {
    const { detailId } = useParams()

    const UserIdRedux = useSelector(state => state.auth.id)
    const loginStatus = useSelector(state => state.auth.loginStatus)

    const [getViewDataDaily, setGetViewDataDaily] = useState([])
    const [getTocart, setGetToCart] = useState({})

    useEffect(() => {
        Axios.get(`${APIURL}admin/view-details3/${detailId}`)
            .then(res => {
                const { id, harga } = res.data.detailDaily[0]
                setGetToCart({ ...getTocart, productid: id, harga })
                setGetViewDataDaily(res.data.detailDaily)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setGetToCart({ ...getTocart, userid: UserIdRedux, status: 'cart' })
    }, [getViewDataDaily[0]])

    const addToCart = () => {
        console.log('getTocart', getTocart);
        Axios.post(`${APIURL}auth/postTransaction`, { getTocart })
            .then(res => {
                console.log('berhasil', res)
            })
            .catch(err => {
                if (loginStatus === true) {
                    return alert('Berhasil tambah ke Cart')
                }
                if (loginStatus === false) {
                    return alert('Anda belum Login, Harap Login terlebih dahulu')
                }
                console.log('error post', err)
            })
    }

    const onJumlahChange = e => {
        const { name, value } = e.target
        const total = parseInt(value) * getViewDataDaily[0].harga
        setGetToCart({ ...getTocart, [name]: parseInt(value), total })
        console.log('GetToCart', getTocart)
    }

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
                            <h5><NumberFormat value={val.harga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} className="CardTextPrice" /></h5>
                            <h6 style={{ marginTop: "30px", marginRight: "40px" }}>{val.deskripsi}</h6>
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
                            <input style={{ marginTop: "20px", border: "1px solid #170a19" }} type="number" name='jumlah' placeholder='jumlah produk' onChange={onJumlahChange} /> <br></br>
                            <button style={{ marginTop: "30px" }} className='MenuDetailsMenuKananButton' onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            )
        })

    }
    return (
        <div>
            {renderViewDetailsDaily()}
        </div>
    )
}

export default MenuDetails3;