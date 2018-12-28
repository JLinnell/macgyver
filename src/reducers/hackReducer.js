import {TEST, FETCH_ALL_HACKS, DELETE_HACK, CREATE_HACK } from '../actions/hackActions';

const initialState = {
  hack: '',
  all: [],
}

const deleteById = (id, hacks) => {
   return hacks.filter(element => element._id !== id)
}

const hackReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST:
      return {...state, hack: action.payload}
    case FETCH_ALL_HACKS:
        return{...state, all: action.payload.data}
        case DELETE_HACK:
        return{...state, all: deleteById(action.payload._id, state.all)}
       case CREATE_HACK:
       state.all.push(action.payload.data)
        return{...state}
    default:
      return state;
  }
}

export default hackReducer;