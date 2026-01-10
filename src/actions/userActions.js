import axios from 'axios';
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://macgyver-api.onrender.com'
  : 'http://localhost:1212';

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const registerUser = (user) => {
  return (dispatch) => {
    return axios.post(`${API_URL}/users/register`, user)
      .then((request) => {
        dispatch({
          type: REGISTER, 
          payload: request.data  // Changed from request to request.data
        });
        return request.data;  // Return the data
      })
      .catch((error) => {
        console.error('Register error:', error);
        throw error;  // Re-throw so component can handle it
      });
  }  
}  

export const loginUser = (user) => {
  return (dispatch) => {
    return axios.post(`${API_URL}/users/login`, user)  // Removed trailing slash
      .then((request) => {
        dispatch({
          type: LOGIN, 
          payload: request.data  // Changed from request to request.data
        });
        return request.data;  // Return the data
      })
      .catch((error) => {
        console.error('Login error:', error);
        throw error;  // Re-throw so component can handle it
      });
  }  
}  

export const logoutUser = () => ({
  type: LOGOUT
});