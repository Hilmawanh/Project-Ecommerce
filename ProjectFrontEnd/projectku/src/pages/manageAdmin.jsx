import React, { useEffect, Fragment, useState, useRef } from "react";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import ManageProduct from "./manageProduct";
import ManageUsers from "./manageUsers";

function ManageAdmin() {
  return (
    <Tabs>
      <TabList style={{ marginTop: "70px" }}>
        <Tab tabFor="horizontal-tab-one">Manage Product</Tab>
        <Tab tabFor="horizontal-tab-two">Manage Pembayaran</Tab>
      </TabList>

      <TabPanel tabId="horizontal-tab-one">
        <ManageProduct />
      </TabPanel>

      <TabPanel tabId="horizontal-tab-two">
        <ManageUsers />
      </TabPanel>
    </Tabs>
  );
}

export default ManageAdmin;
