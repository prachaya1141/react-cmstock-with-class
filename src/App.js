import React, { Component } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/share/Footer";
import Header from "./components/share/Header";
import Sidebar from "./components/share/Sidebar";

import { BrowserRouter as Router, Route ,Redirect} from "react-router-dom";



export default class App extends Component {

  redirectToLogin =()=>{
    return(<Redirect to="/login"/>)
  }
  render() {
    return (
       <Router>
        <div>
          <Header />
          <Sidebar />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route exact={true} path="/" component={this.redirectToLogin}/>
          <Route exact={true} path="*" component={this.redirectToLogin}/>
          <Footer />
        </div>
      </Router> 
    );
  }
}
