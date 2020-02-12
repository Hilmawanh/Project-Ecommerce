import React from "react";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import { Table, Button } from "reactstrap";
import "react-web-tabs/dist/react-web-tabs.css";

function ManageAdmin() {
  return (
    <Tabs
    // defaultTab="vertical-tab-one"
    // style={{ marginLeft: "200px" }}
    // horizontal
    // className="horizontal-tabs"
    >
      <TabList>
        <Tab tabFor="vertical-tab-one">Manage User</Tab>
        <Tab tabFor="vertical-tab-two">Manage Product</Tab>
        <Tab tabFor="vertical-tab-three">Manage Admin</Tab>
      </TabList>

      <TabPanel tabId="vertical-tab-one">
        <Table style={{ marginBottom: "150px", marginTop: "15px" }} bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Produk</th>
              <th>Pembeli</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </TabPanel>

      <TabPanel tabId="vertical-tab-two">
        <Table style={{ marginTop: "15px" }} bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>Produk</th>
              <th>Pembeli</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <div style={{ display: "flex" }}>
          <Button outline color="primary" style={{ marginLeft: "1100px" }}>
            Add Product
          </Button>
          <Button outline color="danger" style={{ marginLeft: "10px" }}>
            Delete Product
          </Button>
        </div>
      </TabPanel>

      <TabPanel tabId="vertical-tab-three">
        <p>Tab 3 content</p>
      </TabPanel>
    </Tabs>
  );
}

export default ManageAdmin;
