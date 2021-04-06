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


const doGetProducts = (dispatch)=>{
    httpClient.get(server.PRODUCT_URL).then(result=>{
        dispatch(setStateStockToSuccess(result.data))
    }).catch(error=>{
        alert(JSON.stringify(error))
        dispatch(setStateStockToFailed())
    })
}