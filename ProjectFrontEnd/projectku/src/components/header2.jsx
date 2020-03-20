import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

} from 'reactstrap';
import { connect, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import { userLogout } from '../redux/actions'



const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Login = useSelector(state => state.auth.loginStatus);
    const roleid = useSelector(state => state.auth.roleid)

    const LogoutSuccess = () => {
        localStorage.removeItem("userid");
        localStorage.removeItem("token");
        this.props.userLogout();
    };
    const toggle = () => setIsOpen(!isOpen);

    if (roleid === 1) {
        return <Redirect to='/manageadmin' />
    }

    return (
        <div>
            <Navbar color="black" expand="md" style={{ height: "34px", width: "100%", backgroundColor: "#222831" }}>
                <NavbarBrand style={{ color: "white", fontFamily: "Roboto", fontSize: "12px", marginLeft: "34px" }} href="/"> 2001/5/04 </NavbarBrand>
                <Nav >



                    {Login ? (
                        <NavItem style={{ marginLeft: "1143px" }}>
                            <NavLink href='/' style={{ width: "100%" }} onClick={LogoutSuccess} >
                                <button style={{ height: "34px", width: "90px", border: "1px", backgroundColor: "#333333", color: "white" }}>
                                    Logout
                                 </button>
                            </NavLink>
                        </NavItem>

                    ) : (
                            <NavItem style={{ marginLeft: "1143px" }}>
                                <NavLink href="/login">
                                    <button style={{ height: "34px", width: "90px", border: "1px", backgroundColor: "black", color: "white" }}>
                                        Login
                            </button>
                                </NavLink>
                            </NavItem>
                        )}

                </Nav>
            </Navbar>
        </div>
    );
}

export default Header2;