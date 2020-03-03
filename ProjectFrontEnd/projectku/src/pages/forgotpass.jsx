import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import { MdDirectionsBike } from "react-icons/md";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class ForgotPassword extends Component {
    state = {}
    render() {
        return (<div className="container">
            <Avatar
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    marginLeft: "542px",
                    marginTop: "110px"
                }}>
                <MdDirectionsBike />
            </Avatar>
            <div>
                <input className="input-loginn" type="text" ref="email" placeholder="Email" />
                <input className="input-login" type="password" ref="Old Password" placeholder="Old Password" />
                <input className="input-login" type="ResPassword" ref="ResPassword" placeholder="New Password" />
            </div>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" style={{ marginLeft: "390px" }} />
            <div className="login100-form-btn mt-2">Change Password</div>
        </div>)
    }
}

export default ForgotPassword;