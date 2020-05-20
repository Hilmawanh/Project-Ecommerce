import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FiShoppingCart } from "react-icons/fi";
import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { Badge } from '@material-ui/core'
import Indo from '../image/inde.png'
import { cartProduk } from '../redux/actions'


const LogoutSuccess = () => {
  localStorage.removeItem("userid");
  localStorage.removeItem("token");
  this.props.userLogout();
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const Login = useSelector(state => state.auth.loginStatus);
  const roleid = useSelector(state => state.auth.roleid)
  const username = useSelector(state => state.auth.username)
  const notif = useSelector(state => state.cartReducers.notif)
  const loading = useSelector(state => state.auth.loading)
  const loginError = useSelector(state => state.auth.loginError)
  const error = useSelector(state => state.auth.error)
  // console.log(notif, 'notif')

  const dispatch = useDispatch()
  const toggle = () => setIsOpen(!isOpen);
  console.log(Login);

  if (roleid === 1) {
    return <Redirect to='/manageadmin' />
  }

  return (
    <div className="fixed-top">
      <Navbar color="black" expand="md" style={{ height: "34px", width: "100%", backgroundColor: "#212529" }}>
        <NavbarBrand style={{ color: "white", fontFamily: "Roboto", fontSize: "12px", marginLeft: "34px" }} href="/"> 2001/5/04 </NavbarBrand>
        <Nav >



          <NavItem style={{ marginLeft: "1094px" }}>
            <NavLink>
              <MdSearch
                style={{
                  color: "white",
                  fontSize: 25,
                  marginTop: "5px"
                }}
              />
            </NavLink>
          </NavItem>

          <div style={{
            borderLeft: " 2px solid gray",
            height: "30px",
            zIndex: "2",
            position: "absolute",
            top: "2px",
            left: "1300px"
          }}></div>


          {Login ? (
            <NavItem >
              <NavLink href='/' style={{ width: "100%" }} onClick={LogoutSuccess} >
                <button style={{ height: "34px", width: "90px", border: "1px", backgroundColor: "#333333", color: "white" }}>
                  Logout
                </button>
              </NavLink>
            </NavItem>

          ) : (
              <NavItem style={{ marginLeft: "" }}>
                <NavLink href="/login">
                  <button style={{ height: "34px", width: "90px", border: "1px", backgroundColor: "black", color: "white" }}>
                    Login
                  </button>
                </NavLink>
              </NavItem>
            )}

        </Nav>
      </Navbar>

      <Navbar light expand="md">
        <NavbarBrand href="/" style={{ fontSize: "28px", color: "black", marginRight: "429px" }}>
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

        <div className="dropdown">
          <Link to='/retailerStore' style={{ color: "black" }}>
            <h2 className="dropbtn3">RETAILER</h2>
          </Link>
        </div>

        <Nav>


          {Login ? (
            <NavItem >
              <Link to='/notification'>
                <MdNotificationsNone
                  style={{
                    color: "black",
                    fontSize: 25,
                    marginTop: "9px",
                    marginLeft: "355px"
                  }}
                />
              </Link>
            </NavItem>
          ) : (
              < NavItem >
                <Link to='/notification'>
                  <MdNotificationsNone
                    style={{
                      color: "black",
                      fontSize: 25,
                      marginTop: "9px",
                      marginLeft: "445px"
                    }}
                  />
                </Link>
              </NavItem>
            )}
          {Login ? (
            <NavItem style={{ marginRight: "2px" }}>
              <NavLink href="/cart">
                <Badge badgeContent={notif} color="secondary">
                  <FiShoppingCart style={{ color: "black", fontSize: 23 }} />
                </Badge>
              </NavLink>
            </NavItem>
          ) : (
              <NavItem style={{ marginRight: "2px" }}>
                <NavLink href="/cart">
                  <Badge badgeContent={notif} color="secondary">
                    <FiShoppingCart style={{ color: "black", fontSize: 23 }} />
                  </Badge>
                </NavLink>
              </NavItem>
            )}
          {Login ? (
            <NavItem style={{ color: "black", display: "flex" }}>
              {/* <h7 style={{ color: "white", marginTop: "228px" }}>Halo : {username}</h7> */}
              <FiUser style={{ color: "black", fontSize: 23, marginTop: "8px" }} />
              <h6 style={{ marginTop: "11px" }}> &nbsp; :  {username}</h6>
            </NavItem>
          ) : null
          }
          {/* {Login ? (
            <NavItem>
              <NavLink href="/" onClick={LogoutSuccess}>
                <FiLogOut className="" style={{ color: "black", fontSize: 23, marginBottom: "2px" }} />
              </NavLink>
            </NavItem>
          ) : (
              <NavItem>
                <Link to="/login">
                  <FiLogIn className="mr-1 ml-3 tampilan" style={{ color: "black", fontSize: 24 }} />
                </Link>
              </NavItem>
            )
            } */}
        </Nav>

      </Navbar>
    </div >
  );
};

export default Header;