import React, { Component } from "react";
import {Link} from "react-router-dom"
import { imageUrl } from "./../../constants";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import * as actions from "../../actions/stock.action";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
class Stock extends Component {
    componentDidMount() {
        this.props.getProducts();
      }
  renderRows = () => {
    const {result,isFetching} = this.props.stockReducer;

      return (!isFetching&&result != null&&result.map((item) => (
        
        <tr key={item.id}>
          <td>{item.createdAt}</td>
          <td><span style={{ marginRight: 10, minHe: 100 }}>
                <img
                  src={`${imageUrl}/images/${
                    item.image
                  }?dummy=${Math.random()}`}
                  style={{ maxWidth: 50 }}
                />
              </span>{item.name}</td>
       
          <td> <NumberFormat
                value={item.price}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={"฿"}
              /></td>
          <td> <NumberFormat
                value={item.stock}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={0}
                fixedDecimalScale={true}
                suffix={" pcs"}
              /></td>
          <td>{item.id}</td>
          <td style={{ textAlign: "center" }}>
              <button
                onClick={() =>
                  this.props.history.push(`/stock-edit/${item.id}`)
                }
                type="button"
                className="btn btn-info"
              >
                แก้ไข
              </button>
              <span style={{ color: "grey" }}> | </span>
              <button
                onClick={() => {
                  MySwal.fire({
                    title: "Are you sure to delete?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!"
                  }).then(result => {
                    if (result.value) {
                      this.props.deleteProduct(item.id);
                    }
                  });
                }}
                type="button"
                className="btn btn-danger"
              >
                ลบ
              </button>
            </td>
        </tr>
      ))
      );
    
  };
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Stock</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/ic_product.png`}
                        className="logo"
                      />
                    </span>
                    <div className="info-box-content">
                      <p className="p_custom">Products</p>
                      <h2>12</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/ic_new.png`}
                        className="logo"
                      />
                    </span>
                    <div className="info-box-content">
                      <p className="p_custom">Defect</p>
                      <h2>0</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/images/ic_out_of_stock.png`}
                        className="logo"
                      />
                    </span>
                    <div className="info-box-content">
                      <p className="p_custom">SoldOut</p>
                      <h2>12</h2>
                    </div>
                  </div>
                </div>
              </div>
                <div className="card">
                  {/* <div className="card-header">
                    <h3 className="card-title">
                      DataTable with minimal features &amp; hover style
                    </h3>
                  </div> */}
                  {/* /.card-header */}
                  <div className="card-body">
                  <div className="row" style={{ marginBottom: 40 }}>
                    <div className="col-6">
                      <input
                 
                        onChange={this.onChange}
                        type="search"
                        className="form-control input-lg"
                        placeholder="Enter search keyword"
                        style={{ borderRadius: 10,height: 48 }}
                      />
                    </div>
                    <div className="col-6 text-right">
                      <Link
                        to="/stock-create"
                        style={{ float: "right", margin: 0, width: 100 }}
                        className="btn btn-success btn-lg"
                      >
                        เพิ่ม
                      </Link>
                    </div>
                  </div>
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>CREATED</th>
                          <th>NAME</th>
                          
                          <th>PRICE</th>
                          <th>STOCK</th>
                          <th>ID</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderRows()}</tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}
const mapStateToProps = ({ stockReducer }) => ({
  stockReducer,
});

const mapDispatchToProps = {
  ...actions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Stock);
