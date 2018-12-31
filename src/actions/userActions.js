import axios from 'axios';
//const API_URL = 'http://localhost:1212';
const API_URL = 'https://guarded-refuge-52889.herokuapp.com';



export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";


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
