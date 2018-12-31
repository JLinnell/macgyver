import axios from 'axios';
export const TEST = "TEST";
export const FETCH_ALL_HACKS = "FETCH_ALL_HACKS";
export const DELETE_HACK = "DELETE_HACK";
export const CREATE_HACK = "CREATE_HACK";
export const FETCH_HACKS_WITH_ITEM = "FETCH_HACKS_WITH_ITEM";
// const API_URL = 'http://localhost:1212';
 const API_URL = 'https://guarded-refuge-52889.herokuapp.com/';


export const testThunkAction = () => {
  return (dispatch) => {
    setTimeout(function() {
      dispatch({type: TEST, payload: "Jon"});
    }, 1500);
  }
}

export const createHack = (hackData) => {
  return (dispatch) => {
    axios.post(`${API_URL}/hacks/create/${localStorage.getItem('token')}`, hackData)
    .then( (response) => {
      dispatch({type: CREATE_HACK, payload: response.data});
  }) 
  }  
}  

export const fetchAllHacks = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/hacks/all/${localStorage.getItem('token')}`)
    .then( (response) => {
        dispatch({type: FETCH_ALL_HACKS, payload: response.data});
    })
  }  
}   

export const fetchByItem = (landingSearch) => {
  return (dispatch) => {
    axios.get(`${API_URL}/hacks/findByItem/${landingSearch.val()}`)
    .then( (response) => {
        dispatch({type: FETCH_HACKS_WITH_ITEM, payload: response.data});
    })
  }  
}   


export const deleteHack = (id) => {
    return (dispatch) => {
      axios.delete(`${API_URL}/hacks/delete/${id}`)
      .then( (response) => {
          dispatch({type: DELETE_HACK, payload: response.data.data});
      })
    }  
  }   