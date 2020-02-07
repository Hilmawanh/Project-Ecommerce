import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { FaShoppingCart } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="top" light expand="md">
        <NavbarBrand
          href="/"
          style={{ fontSize: "28px", color: "#333333", marginRight: "370px" }}
        >
          BROMEYO
        </NavbarBrand>

        <div className="dropdown">
          <button className="dropbtn" to="/">
            BIKES
          </button>
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
          <button className="dropbtn2">EQUIPMENT</button>
          <div class="dropdown-content2">
            <a style={{ color: "white" }} href="#">
              Helmet
            </a>
            <a style={{ color: "white" }} href="#">
              Shoes
            </a>
            <a style={{ color: "white" }} href="#">
              Shirt
            </a>
            <a style={{ color: "white" }} href="#">
              Gloves
            </a>
          </div>
        </div>

        <div class="dropdown">
          <button className="dropbtn3">MERCHENDISE</button>
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

        {/* <div class="search-container" style={{ marginLeft: "225px" }}>
          <form>
            <input type="text" placeholder="Search Bike" name="search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div> */}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavItem style={{ marginLeft: "320px" }}>
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
                <FaShoppingCart
                  className="mr-1 ml-2 tampilan"
                  style={{ color: "#333333", fontSize: 22 }}
                />
              </Link>
            </NavItem>

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
