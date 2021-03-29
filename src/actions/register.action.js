import {
  HTTP_REGISTER_FETCHING,
  HTTP_REGISTER_SUCCESS,
  HTTP_REGISTER_FAILED,
  OK,
} from "../constants";
import {httpClient} from "./../utils/HttpClient";
import { server } from "./../constants";

export const setRegisterStateToFetching = () => ({
  type: HTTP_REGISTER_FETCHING,
});
export const setRegisterStateToSuccess = (payload) => ({
  type: HTTP_REGISTER_SUCCESS,
  payload,
});
export const setRegisterStateToFailed = () => ({
  type: HTTP_REGISTER_FAILED,
});

// onClickRegister = (e) => {
//   e.preventDefault();
//   let {name,username,password} =this.state;
//   let data ={name,username,password}
//   // axios.post("http://localhost:8085/api/v1/authen/register",data).then(response=>{
//   //   alert(JSON.stringify(response.data))
//   // })
//   httpClient.post(server.REGISTER_URL,data).then(response=>{
//       alert(JSON.stringify(response.data))
//     })
// };
export const register = (history, credentail) => {
  return async (dispatch) => {
    dispatch(setRegisterStateToFetching());
    try {
      let result = await httpClient.post(server.REGISTER_URL, credentail);
      if (result.data.result == OK) {
        dispatch(setRegisterStateToSuccess({ result: result.data.result }));
        history.goBack();
    } else {
        dispatch(setRegisterStateToFailed());
      }
    } catch (error) {
      dispatch(setRegisterStateToFailed());
    }

    //  dispatch(setRegisterStateToFailed)
  };
};
