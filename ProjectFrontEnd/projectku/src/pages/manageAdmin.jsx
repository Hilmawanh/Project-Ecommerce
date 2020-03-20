import React, { useEffect, Fragment, useState, useRef } from "react";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import ManageProduct from "./manageProduct";
import ManageChekout from "./manageCheckout";
import { NavLink, NavItem } from "reactstrap";
import { useSelector } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";
import { Redirect } from 'react-router-dom'

const LogoutSuccess = () => {
  localStorage.removeItem("userid");
  localStorage.removeItem("token");
  this.props.userLogout();
};

function ManageAdmin() {
  const roleid = useSelector(state => state.auth.roleid)
  const username = useSelector(state => state.auth.username)

  if (roleid === 0) {
    return <Redirect to={'/ganemu'} />
  }

  if (roleid === 2) {
    return <Redirect to={'/ganemu'} />
  }

  return (
    <div>
      <h5 style={{ marginLeft: "685px", marginTop: "40px" }}>
        {username}
      </h5>
      <div>
        <NavLink href='/' onClick={LogoutSuccess}>
          <button style={{ marginLeft: "670px", marginTop: "40px", border: "1px solid red", backgroundColor: "blue" }}>Logout</button>
        </NavLink>
      </div>
      <Tabs>
        <TabList style={{ marginTop: "10px" }}>
          <Tab tabFor="horizontal-tab-one">Manage Product</Tab>
          <Tab tabFor="horizontal-tab-two">Manage Pembayaran</Tab>
        </TabList>

        <TabPanel tabId="horizontal-tab-one">
          <ManageProduct />
        </TabPanel>

        <TabPanel tabId="horizontal-tab-two">
          <ManageChekout />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ManageAdmin;
