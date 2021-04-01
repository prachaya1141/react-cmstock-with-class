import React, { Component } from "react";
import { httpClient } from "./../../utils/HttpClient";
import { server } from "../../constants";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login,autoLogin } from "../../actions/login.action";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
  }
  componentDidMount(){
    this.props.autoLogin(this.props.history)
  }
  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissible">
    
        <h4>
          <i className="icon fa fa-ban" /> Error!
        </h4>
        Incorrect infomation
      </div>
    );
  };
  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Admin</b>LTE
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                {this.props.loginReducer.isError?this.showError():null}
                <div className="row">
                  {/* /.col */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={(e) => {
                
                        e.preventDefault();
                        this.props.login(this.props.history, this.state);
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
                <div className="row">
                  {/* /.col */}
                  <div className="col-12">
                    <button
                      className="btn btn-light btn-block"
                      style={{ marginTop: 8 }}
                      onClick={() => this.props.history.push("/register")}
                    >
                      Register
                    </button>
                    {/* <p className="mt-2 mb-1">
                      <a href="forgot-password.html">I forgot my password</a>
                    </p> */}
                  </div>
                  {/* /.col */}
                </div>
              </form>

              <p className="mb-0">
                {/* <a href="register.html" className="text-center">
                  Register a new membership
                </a> */}
              </p>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
      </div>
    );
  }
}
const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps ={
  login,autoLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
