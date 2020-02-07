import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { MdDirectionsBike } from "react-icons/md";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userRegis } from "./../redux/actions";

class Register extends Component {
  btnRegister = () => {
    var username = this.refs.username.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    this.props.userRegis({ username, email, password });
  };

  renderError = () => {
    if (this.props.error.length > 0) {
      return (
        <p
          className="alert alert-danger"
          style={{ width: "30%", marginLeft: "400px" }}
        >
          {this.props.error}
        </p>
      );
    }
  };

  renderErrorRegister = () => {
    if (this.props.loginError.length > 0) {
      return (
        <p
          className="alert alert-danger"
          style={{ width: "30%", marginLeft: "400px" }}
        >
          {this.props.loginError}
        </p>
      );
    }
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <i className="fa fa-spinner fa-spin" style={{ fontSize: "54px" }} />
      );
    }
    return (
      <input
        type="button"
        name="submit"
        id="submit"
        className="login100-form-btn mt-2"
        defaultValue="Register"
        onClick={this.btnRegister}
      />
    );
  };

  render() {
    if (this.props.registerStatus) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <Avatar
          style={{
            backgroundColor: "#33313b",
            marginLeft: "542px",
            marginTop: "25px",
            marginBottom: "20px"
          }}
        >
          <MdDirectionsBike />
        </Avatar>
        <div>
          <input
            className="input-login"
            ref="username"
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            required
          />
          <input
            className="input-login"
            ref="email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            className="input-login"
            ref="password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          style={{ marginLeft: "390px" }}
        />
        <div>{this.renderError()}</div>
        <div>{this.renderErrorRegister()}</div>
        <div className="container-login100-form-btn">{this.renderButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    loading: state.auth.loading,
    error: state.auth.error,
    loginError: state.auth.loginError,
    registerStatus: state.auth.registerStatus
  };
};

export default connect(mapStateToProps, { userRegis })(Register);
