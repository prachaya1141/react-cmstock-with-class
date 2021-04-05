import React, { Component } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/share/Footer";
import Header from "./components/share/Header";
import Sidebar from "./components/share/Sidebar";
import Stock from "./components/stock/stock";
import StockCreate from "./components/stockCreate/stockCreate";
import StockEdit from "./components/stockEdit/stockEdit";
import { setApp } from "./actions/app.action";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { server, YES } from "./constants";
import { connect } from "react-redux";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.setApp(this);
  }
  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };
  render() {
    return (
      <Router>
        <div>
          {isLoggedIn() && <Header />}
          {isLoggedIn() && <Sidebar />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <SecuredRoute path="/stock" component={Stock} />
            <SecuredRoute path="/stock-create" component={StockCreate}/>
            <SecuredRoute path="/stock-edit/:id" component={StockEdit}/>    
            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route exact={true} path="*" component={this.redirectToLogin} />
          </Switch>
          {isLoggedIn() && <Footer />}
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setApp,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
