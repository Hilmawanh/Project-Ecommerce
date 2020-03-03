import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import { FiShoppingCart } from "react-icons/fi";
// import { MdNotifications } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
// import { userLogout } from "../redux/actions";
import { connect, useSelector } from "react-redux";
import { Badge } from '@material-ui/core'

import Logo from "../image/LogoBromeyo2.png";

const LogoutSuccess = () => {
  localStorage.removeItem("userid");
  localStorage.removeItem("token");
  this.props.userLogout();
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const Login = useSelector(state => state.auth.loginStatus);

  const toggle = () => setIsOpen(!isOpen);
  console.log(Login);
  return (
    <div>
      <Navbar fixed="top" light expand="md">
        <NavbarBrand href="/" style={{ fontSize: "28px", color: "white", marginRight: "450px" }}>
          BROMEYO
        </NavbarBrand>

        <div className="dropdown">
          <h2 className="dropbtn" to="/">
            BIKES
          </h2>
          <div className="dropdown-content">
            <a style={{ color: "black" }} href="/menuroadbike">
              Road Bike
            </a>
            <a style={{ color: "black" }} href="/menumountain">
              Mountain
            </a>
            <a style={{ color: "black" }} href="/menubmx">
              Bmx
            </a>
            <a style={{ color: "black" }} href="/menudaily">
              Daily
            </a>
            <a style={{ color: "black" }} href="/menuebike">
              Ebike
            </a>
          </div>
        </div>

        <div class="dropdown">
          <h2 className="dropbtn2">GEAR</h2>
          <div class="dropdown-content2">
            <a style={{ color: "black" }} href="/menuapparels">
              Apparels
            </a>
            <a style={{ color: "black" }} href="/menuspareparts">
              Spare Parts
            </a>
          </div>
        </div>

        <div class="dropdown">
          <h2 className="dropbtn3">STORE</h2>
          <div class="dropdown-content3">
            <a style={{ color: "black" }} href="#">
              Jakarata
            </a>
            <a style={{ color: "black" }} href="#">
              Bogor
            </a>
            <a style={{ color: "black" }} href="#">
              Yogyakarta
            </a>
          </div>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {Login ? (
            <NavItem style={{ marginLeft: "430px" }}>
              <NavLink href="/cart">
                <Badge badgeContent={1} color="secondary">
                  <FiShoppingCart className="" style={{ color: "white", fontSize: 23, marginBottom: "25px" }} />
                </Badge>
              </NavLink>
            </NavItem>
          ) : null}

          <Nav>
            {Login ? (
              <NavItem>
                {/* <h5 style={{ color: "white", marginTop: "8px" }}>Halo : Nama</h5> */}
                <FiUser style={{ color: "white", fontSize: 23, marginTop: "8px" }} />
              </NavItem>
            ) : (
                <NavItem style={{ marginLeft: "470px" }}>
                  <Link>
                    <MdNotificationsNone
                      className="mr-1 ml-2  "
                      style={{
                        color: "white",
                        fontSize: 25
                      }}
                    />
                  </Link>
                </NavItem>
              )}

            {Login ? (
              <NavItem>
                <NavLink href="/" onClick={LogoutSuccess}>
                  <FiLogOut className="" style={{ color: "white", fontSize: 23, marginBottom: "2px" }} />
                </NavLink>
              </NavItem>
            ) : (
                <NavItem>
                  <Link to="/login">
                    <FiLogIn className="mr-1 ml-3 tampilan" style={{ color: "white", fontSize: 24 }} />
                  </Link>
                </NavItem>
              )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
