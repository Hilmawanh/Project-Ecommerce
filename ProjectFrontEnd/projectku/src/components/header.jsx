import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import { FaShoppingCart } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";

const LogoutSuccess=()=>{
  localStorage.clear()
  
}

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="top" light expand="md">
        <NavbarBrand href="/" style={{ fontSize: "28px", color: "#333333", marginRight: "410px" }}>
          BROMEYO
        </NavbarBrand>

        <div className="dropdown">
          <h2 className="dropbtn" to="/">
            BIKES
          </h2>
          <div className="dropdown-content">
            <a style={{ color: "white" }} href="/menuroadbike">
              Road Bike
            </a>
            <a style={{ color: "white" }} href="/menumountain">
              Mountain
            </a>
            <a style={{ color: "white" }} href="/menubmx">
              Bmx
            </a>
            <a style={{ color: "white" }} href="/menudaily">
              Daily
            </a>
            <a style={{ color: "white" }} href="/menuebike">
              Ebike
            </a>
          </div>
        </div>

        <div class="dropdown">
          <h2 className="dropbtn2">GEAR</h2>
          <div class="dropdown-content2">
            <a style={{ color: "white" }} href="/menuapparels">
              Apparels
            </a>
            <a style={{ color: "white" }} href="#">
              Spare Parts
            </a>
        
          </div>
        </div>

        <div class="dropdown">
          <h2 className="dropbtn3">STORE</h2>
          <div class="dropdown-content3">
            <a style={{ color: "white" }} href="#">
              Link 1
            </a>
            <a style={{ color: "white" }} href="#">
              Link 2
            </a>
            <a style={{ color: "white" }} href="#">
              Link 3
            </a>
          </div>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavItem style={{ marginLeft: "399px" }}>
              <Link>
                <MdNotifications
                  className="mr-1 ml-2  "
                  style={{
                    color: "#333333",
                    fontSize: 26
                  }}
                />
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/cart">
                <FaShoppingCart className="mr-1 ml-2 tampilan" style={{ color: "#333333", fontSize: 22 }} />
              </Link>
            </NavItem>

            {/* <NavItem>
              <Link to="/">
                <button className="">Logout</button>
              </Link>
            </NavItem> */}

            <NavItem>
              <Link to="/login">
                <button className="ButtonHeader">Login</button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
