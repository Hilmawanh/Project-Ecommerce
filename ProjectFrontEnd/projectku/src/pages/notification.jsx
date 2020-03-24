import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux'
import Axios from 'axios'
import { APIURL } from '../helper/apiurl'

const Notification = () => {
    // const [count, setCount] = useState(0);
    const [getHistory, setGetHistory] = useState([])
    const UserIdRedux = useSelector(state => state.auth.id)

    useEffect(() => {
        Axios.get(`${APIURL}auth/getHistory/${UserIdRedux}`)
            .then(res => {
                setGetHistory(res.data.dataHistory)
            })
            .catch(err => {
                console.log(err)
            })
    })

    const renderHistory = () => {
        return getHistory.map((val) => {
            return (
                <tr>
                    <th scope="row">1</th>
                    <td>{val.produk}</td>
                    <td>{val.harga}</td>
                    <td>{val.jumlah}</td>
                </tr>
            )
        })
    }

    return (
        <div>


            <h5 style={{ zIndex: "2", position: "absolute", top: "125px", marginLeft: "160px" }}>HISTORY</h5>
            <Table style={{ marginTop: "150px", marginBottom: "200px" }} className='container'>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produk</th>
                        <th>Harga</th>
                        <th>jumlah</th>
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