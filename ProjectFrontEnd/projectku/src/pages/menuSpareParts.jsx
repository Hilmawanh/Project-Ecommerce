import React from 'react';
import { FaRegWindowMinimize } from "react-icons/fa";

const MenuSpareParts = () => {

    return (
        <div>
            <div style={{ width: "100%", height: "20pc", backgroundColor: "#eaeaea" }} />
            <h2
                className="CardTextHeader"
                style={{
                    zIndex: "2",
                    position: "absolute",
                    top: "200px",
                    left: "5px",
                }}>
                SPARE PARTS
          </h2>
            <FaRegWindowMinimize
                style={{
                    zIndex: "2",
                    position: "absolute",
                    top: "200px",
                    left: "75px",
                    color: "#1c2938",
                    width: "50px",
                    height: "100px"
                }}
            />

            <div style={{ display: "flex" }}>
                <div className="card">
                    <img
                        src="https://i.dlpng.com/static/png/6323587_preview.png"
                        style={{ width: "100%", textAlign: "center", height: "63%" }}
                    />
                    <div class="container">
                        <h4 style={{ textAlign: "center", fontFamily: "Lato" }}>
                            <b style={{ fontFamily: "Poppins" }}>Helios LT9X</b>
                        </h4>
                        <center>
                            <p>Road Performance bike built with a UCI approved ACX frame that is astonishingly responsice, smooth and fast.</p>
                        </center>
                        <center>
                            <h5 className="CardTextPrice">Rp. 75.000.000</h5>
                        </center>
                    </div>
                </div>

                <div className="card">
                    <img src="https://static1.squarespace.com/static/54585a1ae4b00283efc176e8/545eb836e4b0a75b67ee1c3d/58c8440f86e6c04b4466a227/1506456764758/" style={{ width: "100%" }} />
                    <div class="container">
                        <h4 style={{ textAlign: "center" }}>
                            <b>Helios LT9X</b>
                        </h4>
                        <center>
                            <p>nnononoono</p>
                        </center>
                        <center>
                            <h5 className="CardTextPrice">Rp. 75.000.000</h5>
                        </center>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MenuSpareParts;