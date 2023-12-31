import {AUTH,LOGOUT} from '../constants/actionTypes.js'
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('user_info', JSON.stringify({ ...action?.data }));
      console.log(action.data)
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;