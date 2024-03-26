const initialState = {
    email: "",
    token: "",
    isAuthenticated: false,
    role: ""
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
          email: "",
          token: "",
          isAuthenticated: false,
          role: ""
        };
        case 'LOGIN_FAILURE':
            return { 
                ...state,
                email: "",
                token: "",
                isAuthenticated: false,
                role: ""
            };
      default:
        return state;
    }
  }
  
  export default authReducer;