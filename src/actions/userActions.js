/*import axios from 'axios';
export const TEST = "TEST";
export const REGISTER_USER = "REGISTER_USER";
export const FETCH_USER = "FETCH_USER";



export const testThunkAction = () => {
  return (dispatch) => {
    setTimeout(function() {
      dispatch({type: TEST, payload: "Jon"});
    }, 1500);
  }
}

export const registerUser = (userData) => {
  return (dispatch) => {
    axios.post(`${API_URL/users/register/${localStorage.getItem('token')}`, userData)
    .then( (response) => {
      dispatch({type: REGISTER_USER, payload: response.data});
  }) 
  }  
}  

export const fetchUser = () => {
  return (dispatch) => {
    axios.get(`${API_URL/users/login/${localStorage.getItem('token')}`)
    .then( (response) => {
        dispatch({type: FETCH_USER, payload: response.data});
    })
  }  
}   
*/



import axios from 'axios';
const API_URL = 'http://localhost:1212';
//const API_URL = 'heroku-url-goes-here';



export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

/*export const registerUser = (user) => {
  const request = axios.post(`${API_URL}/users/register`, user)
  return{
    type: REGISTER,
    payload: request
  }
}
*/

export const registerUser = (user) => {
  return (dispatch) => {
    axios.post(`${API_URL}/users/register`, user)
    .then( (request) => {
        dispatch({
          type: REGISTER, 
          payload: request
        });
    })
  }  
}  

/*export const loginUser = (user) => {
  const request = axios.post(`${API_URL}/users/login`, user)
  return{
    type: LOGIN,
    payload: request
  }
}*/

export const loginUser = (user) => {
  return (dispatch) => {
    axios.post(`${API_URL}/users/login/`, user)
    .then( (request) => {
        dispatch({
          type: LOGIN, 
          payload: request
        });
    })
  }  
}  
