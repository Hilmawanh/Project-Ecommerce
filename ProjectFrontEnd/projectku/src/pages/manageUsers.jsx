import React, { useState, useEffect, Fragment } from "react";
import { Table, Button, CustomInput } from "reactstrap";


function ManageUsers() {
   return (
       <Fragment>
            <Table style={{ marginBottom: "150px" }} bordered>
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
       </Fragment>
   )
}

export default ManageUsers;
