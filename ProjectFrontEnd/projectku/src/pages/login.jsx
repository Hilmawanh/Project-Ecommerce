import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { MdDirectionsBike } from "react-icons/md";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLoginn } from "./../redux/actions";

class SignIn extends Component {
  btnLogin = () => {
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    this.props.userLoginn({ username, password });
  };

  renderError = () => {
    if (this.props.error.length > 0) {
      return (
        <p className="alert alert-danger" style={{ width: "30%", marginLeft: "400px" }}>
          {this.props.error}
        </p>
      );
    }
  };

  renderErrorLogin = () => {
    if (this.props.loginError.length > 0) {
      return (
        <p className="alert alert-danger" style={{ width: "30%", marginLeft: "400px" }}>
          {this.props.loginError}
        </p>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return <i className="fa fa-spinner fa-spin" style={{ fontSize: "54px" }} />;
    }
    return <input type="button" name="submit" id="submit" className="ButtonLogin" defaultValue="Login" onClick={this.btnLogin} />;
  };

  render() {
    console.log(this.props.loginStatus);

    console.log(this.props.roleid)
    if (this.props.loginStatus && this.props.roleid === 2) {
      return <Redirect to='/' />
    }

    console.log(this.props.roleid);

    if (this.props.loginStatus && this.props.roleid === 1) {
      return <Redirect to='/manageadmin' />
    }

    return (
      <div className="container">
        {/* <Avatar
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            marginLeft: "542px",
            marginTop: "110px"
          }}>
          <MdDirectionsBike />
        </Avatar> */}
        <div>
          <h4 style={{
            marginLeft: "400px",
            marginTop: "160px",

          }}>SIGN IN TO <br /> YOUR ACCOUNT</h4>
        </div>
        <div>
          <input className="input-loginn" type="text" ref="username" placeholder="username" />
          <input className="input-login" type="password" ref="password" placeholder="Password" />
        </div>
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" style={{ marginLeft: "390px" }} />
        <div>{this.renderError()}</div>
        <div>{this.renderErrorLogin()}</div>
        <div className="container-login100-form-btn">{this.renderButton()}</div>
        <Grid container style={{ marginBottom: "20px" }}>
          <Grid style={{ marginLeft: "400px" }}>
            <Link href="/forgotpass" variant="body2" style={{ color: "black" }}>
              Forgot password?
            </Link>
          </Grid>
          <Grid style={{ marginLeft: "20px" }}>
            <Link href="/register" variant="body2" style={{ color: "black" }} >
              {"Don't have an account? Join"}
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    email: state.auth.email,
    loading: state.auth.loading,
    error: state.auth.error,
    loginError: state.auth.loginError,
    loginStatus: state.auth.loginStatus,
    roleid: state.auth.roleid
  };
};

export default connect(mapStateToProps, { userLoginn })(SignIn);
