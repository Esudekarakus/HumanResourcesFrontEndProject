export const loginSuccess = ({email, token, role,isAuthenticated}) => ({
    type: 'LOGIN_SUCCESS',
    payload: { email, token, role, isAuthenticated}
  });
  
  export const logout = () => ({
    type: 'LOGOUT'
  });

  export const failure = () => ({
    type: 'LOGIN_FAILURE'
  });