import { httpClient } from "./../utils/HttpClient";
import {
  HTTP_STOCK_SUCCESS,
  HTTP_STOCK_FETCHING,
  HTTP_STOCK_FAILED,
  server
} from "../constants";

const setStateStockToSuccess = payload => ({
  type: HTTP_STOCK_SUCCESS,
  payload: payload
});

const setStateStockToFetching = () => ({
  type: HTTP_STOCK_FETCHING
});

const setStateStockToFailed = () => ({
  type: HTTP_STOCK_FAILED
});



export const getProducts = () => {
  return dispatch => {
    dispatch(setStateStockToFetching());
    doGetProducts(dispatch);
  };
};
export const deleteProduct = id => {
  return async dispatch => {
    dispatch(setStateStockToFetching());
    await httpClient.delete(`${server.PRODUCT_URL}/${id}`)
    await doGetProducts(dispatch);
  };
};
export const getProductByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateStockToFetching());
    
    if (keyword !== null && keyword != "") {
      httpClient.get(`${server.PRODUCT_URL}/keyword/${keyword}`).then(result => {
        dispatch(setStateStockToSuccess(result.data));
      });
    } else {
      doGetProducts(dispatch);
    }
  };
};

const doGetProducts = (dispatch)=>{
    httpClient.get(server.PRODUCT_URL).then(result=>{
        dispatch(setStateStockToSuccess(result.data))
    }).catch(error=>{
        alert(JSON.stringify(error))
        dispatch(setStateStockToFailed())
    })
}