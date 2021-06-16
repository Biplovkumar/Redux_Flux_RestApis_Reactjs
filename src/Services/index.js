//axios is a library for react native for API calling
import axios from 'axios';
import { CheckNet } from '../Utils/CommonFun/index'
//for host & Apis url
// import Config from '../../src/Utils/Config';
let NoNet = new Error("No internet connection.");


export default class Api {
  constructor(name) {
    this._name = name;
  }
}//end of class




export const callGetRestApis = async (URL) => {
  let Conn = CheckNet();
  if (!Conn) { throw NoNet } else {
    console.log('url callGetRestApis ', URL);
    return axios(URL).then((res) => {
      console.log("callGetRestApis res", res);
      return res.data ? res.data : res;
    })
      .catch((err) => {
        console.log(".catch((err) callGetRestApis", err);
        handleErrors(err);
      });
  }
};









//   export const CallPostRestApi = async (Data,URI) => {
//     const S = store.getState();
//     let token = ''
//     if (S && S.login && S.login.loginData && S.login.loginData.token) { token = S.login.loginData.token }
//     console.log('Api token => ' + token)
//     let Conn = await CheckNet();
//     if (!Conn) { throw 'No internet connection.' } else {

//       let authOptions = {
//         method: "POST",
//         mode: "cors",
//         url: URI,
//         data: Data,
//         headers: { "access_token": token },
//       }
//       console.log('authOptions CallGraphQlTokenApi ', authOptions);
//       return axios(authOptions)
//         .then((res) => {
//           console.log("CallGraphQlTokenApi res", res);
//           return res ? res.data : res;
//         })
//         .catch((err) => {
//           console.log(".catch((err) CallGraphQlTokenApi", err);
//           handleErrors(err);
//         });
//     }
//   };


function handleErrors(error) {
  let NoNetwork = new Error('Please check your network connection.');
  let credentialError = new Error('Please Provide valid credential.');
  let UnauthorizedError = new Error('Unauthorized User.');
  let serverError = new Error('Oops server error occurred');
  console.log('Error====> :- ', error)
  // network error
  if (!error.response) { throw NoNetwork }
  else {
    // http status code
    const code = error.response.status
    // response data
    const response = error.response.data
    console.log('code :- ' + code + ' response :- ', response)
    if (error.response.status === 400) { throw credentialError }
    else if (error && error.response && error.response.status === 401) { throw UnauthorizedError }
    else { throw serverError }
  }
}