import { combineReducers } from "redux";


const users = (state = null) => state;

const lost = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENTS":
      return [...state, action.value];
    case "ADD_LOST":
      return [...state, action.value];
    case "REMOVE_LOST":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};

const found = (state = [], action) => {
  switch (action.type) {
    case "ADD_FOUND":
      return [...state, action.value];
    case "REMOVE_FOUND":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};


export default combineReducers({ users, lost, found });




