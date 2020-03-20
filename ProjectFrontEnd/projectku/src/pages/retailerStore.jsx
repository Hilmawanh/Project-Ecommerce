import React from 'react'
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";


const RetailerStore = () => {
    return (
        <div className='container' style={{ display: "flex", marginTop: "200px", marginBottom: "100px" }}>
            <div style={{ backgroundColor: "gray", height: "340px", width: "360px", cursor: "pointer" }}>
                <img src="https://ak0.picdn.net/shutterstock/videos/1025472500/thumb/1.jpg" alt="das" style={{ width: "100%", height: "100%" }} />
                <h2 style={{ zIndex: "2", position: "absolute", top: "350px", left: "261px", color: "white", fontWeight: "bolder", fontFamily: "Poppins", backgroundColor: "rgba(0,0,0,0.6)", letterSpacing: "5px", cursor: "pointer" }}>JAKARTA</h2>
            </div>
            <div style={{ backgroundColor: "black", height: "340px", width: "360px", marginLeft: "30px" }}>
                <img src="https://i.pinimg.com/originals/3f/3d/76/3f3d76a0aa4757c3daf3fab4f73e5240.jpg" alt="das" style={{ width: "100%", height: "100%" }} />
                <h2 style={{ zIndex: "2", position: "absolute", top: "350px", left: "655px", color: "white", fontWeight: "bolder", fontFamily: "Poppins", backgroundColor: "rgba(0,0,0,0.6)", letterSpacing: "5px" }}>BOGOR</h2>
            </div>
            <div style={{ backgroundColor: "blue", height: "340px", width: "360px", marginLeft: "30px" }}>
                <img src="https://static.wixstatic.com/media/887266_e77cf293d6614eb18c99c1a2f366db82~mv2_d_2560_1600_s_2.jpg" alt="da" style={{ width: "100%", height: "100%" }} />
                <h2 style={{ zIndex: "2", position: "absolute", top: "350px", left: "1060px", color: "white", fontWeight: "bolder", fontFamily: "Poppins", backgroundColor: "rgba(0,0,0,0.6)", letterSpacing: "5px" }}>BALI</h2>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default RetailerStore;