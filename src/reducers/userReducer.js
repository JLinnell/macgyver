import {REGISTER, LOGIN} from '../actions/userActions';
import {saveAuthInfo} from '../LocalStorage';

const initialState = {
  user: '',
  users: [],
  loginRedirect: false
}
  
const userReducer = (state = initialState, action) => {
  switch (action.type){
    case REGISTER:
      console.log(saveAuthInfo)
      return {...state, loginRedirect: false};

    case LOGIN:
      console.log('LOGIN action payload:', action.payload);
      
      // The structure is: action.payload.data (not action.payload.data.data)
      if (!action.payload || !action.payload.data) {
        console.error('Invalid payload structure:', action.payload);
        return state;
      }
      
      let {token, userID, email} = action.payload.data;  // Changed from action.payload.data.data
      console.log('Extracted:', {token, userID, email});

      saveAuthInfo(token, userID, email);

      return {...state, loginRedirect: true};

    default:
      return state;
  }
}
export default userReducer;