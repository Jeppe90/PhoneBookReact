const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return{
          ...state,
          authError: null
        }
        default:
          return state;
        
      
  }
  return state
}

export default authReducer
// import { SIGN_IN, SIGN_OUT } from '../actions/types'
// const INITIAL_STATE = {
//   isSignedIn: null,
//   userId: null
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return { ...state, isSignedIn: true, userId: action.payload };
//     case SIGN_OUT:
//       return { ...state, isSignedIn: false, userId: null };
//     default:
//       return state;
//   }
// };
