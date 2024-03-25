const initialState = {
    email: null,
    token: null,
    isAuthenticated: false,
    role: null
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          email: action.payload.email,
          token: action.payload.token,
          isAuthenticated: action.payload.isAuthenticated,
          role: action.payload.role
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
          role: null
        };
        case 'LOGIN_FAILURE':
            return { 
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                role: null
            };
      default:
        return state;
    }
  }
  
  export default authReducer;