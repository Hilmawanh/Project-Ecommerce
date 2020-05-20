import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux'
import Axios from 'axios'
import { APIURL } from '../helper/apiurl'
import { FaRegWindowMinimize } from "react-icons/fa";

const Notification = () => {
    // const [count, setCount] = useState(0);
    const [getHistory, setGetHistory] = useState([])
    const UserIdRedux = useSelector(state => state.auth.id)
    const Login = useSelector(state => state.auth.loginStatus);

    useEffect(() => {
        Axios.get(`${APIURL}auth/getHistory/${UserIdRedux}`)
            .then(res => {
                setGetHistory(res.data.dataHistory)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const renderHistory = () => {
        return getHistory.map((val, index) => {
            return (
                <tr>

                    <td>{val.produk}</td>
                    <td>{val.harga}</td>
                    <td>{val.jumlah}</td>
                    <td>{val.tanggal}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div style={{ display: "column" }}>
                <div style={{ width: "100%", height: "20pc", backgroundColor: "#eaeaea" }} />
                <h2
                    className="CardTextHeader"
                    style={{
                        zIndex: "2",
                        position: "absolute",
                        top: "200px",
                        left: "5px",
                        width: "50px",
                        height: "100px"
                    }}>
                    NOTIF
          </h2>
                <FaRegWindowMinimize className='stripCart' />
            </div>

            <Table style={{ marginTop: "100px", marginBottom: "200px" }} className='container'>

                <thead>
                    <tr>
                        <th>Produk</th>
                        <th>Harga</th>
                        <th>jumlah</th>
                        <th>tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHistory()}
                </tbody>
            </Table>
        </div>
    )
}

export default Notification;