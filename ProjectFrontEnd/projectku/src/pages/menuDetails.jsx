import React from "react";

const MenuDetails = () => {
  return (
    <div style={{ display: "flex", marginTop: "100px", width: "100%" }}>
      <div style={{ width: "60%", height: "540px" }}>
        <img
          src="https://www.polygonbikes.com/wp-content/uploads/2018/03/HELIOS_LT9X_ACE_P.png"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div style={{ width: "40%", height: "540px", display: "column", marginTop: "100px", marginLeft: "90px" }}>
        <h4>IDR. 51.000.000.00 </h4>
        <h6 style={{ marginTop: "30px" }}>
          Constructed to pull riders riding on fast road, <br />
          Offering a good compliance and control.
        </h6>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div style={{ marginRight: "100px" }}>
            <h4>Size</h4>
          </div>
          <div>
            <select name="" id=""></select>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <input style={{ width: "65px", marginRight: "80px", borderRadius: "3px" }} />
          <button style={{ backgroundColor: "#212529", color: "white", borderRadius: "6px" }}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
