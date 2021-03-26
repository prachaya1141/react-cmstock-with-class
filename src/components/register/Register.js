import React, { Component } from "react";

export default class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
             username:"",
             password:"",
             repassword:""
        }
    }
    
  render() {
    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Admin</b>LTE
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full name"
                    onChange={(e)=>{this.setState({name:e.target.value})}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                  name="username"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e)=>{this.setState({username:e.target.value})}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                  name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    onChange={(e)=>{this.setState({repassword:e.target.value})}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <span>{JSON.stringify(this.state)}</span>
                <div className="row">
            
                  {/* /.col */}
                  <div className="col-12">
                    <button onClick={(e)=>{
                        e.preventDefault()
                        this.props.history.goBack()
                    }} className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  {/* /.col */}
                </div>
                <div className="row">
            
                  {/* /.col */}
                  <div className="col-12">
                    <button style={{marginTop:8}} onClick={(e)=>{
                        e.preventDefault()
                        this.props.history.goBack()
                    }} className="btn btn-light btn-block">
                      Cancel
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
            
           
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
        {/* /.register-box */}
      </div>
    );
  }
}
