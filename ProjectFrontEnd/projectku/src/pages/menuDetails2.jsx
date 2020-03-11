import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FaRegWindowMinimize } from "react-icons/fa";
import { FiSmile } from 'react-icons/fi'
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { useParams } from 'react-router-dom'

const MenuDetails2 = () => {
    const { detailId } = useParams()

    const UserIdRedux = useSelector(state => state.auth.id)

    const [GetViewDetailMountain, setGetViewDetailMountain] = useState([])
    const [getTocart, setGetToCart] = useState([])

    useEffect(() => {
        Axios.get(`${APIURL}admin/view-details2/${detailId}`)
            .then(res => {
                console.log('GetToCart', getTocart)
                const { id, harga } = res.data.detailMountain[0]
                console.log(res.data.detailMountain)
            
                setGetToCart({ ...getTocart, id,harga })
                setGetViewDetailMountain(res.data.detailMountain)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setGetToCart({ ...getTocart, userid: UserIdRedux, status: 0 })
    }, [GetViewDetailMountain])

    const addToCart = () => {
        Axios.post(`${APIURL}auth/getTransaction`, { getTocart })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const renderViewDetailsMountain = () => {
        // console.log('UserIdRedux', UserIdRedux)
        console.log('GetToCart', getTocart)

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
                            <button className='MenuDetailsMenuKananButton' onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    console.log('UserIdRedux', UserIdRedux)

    return (
        <div>
            {renderViewDetailsMountain()}
        </div>
    )
}

export default MenuDetails2;