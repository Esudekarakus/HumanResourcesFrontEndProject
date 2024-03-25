export const setUserDetails = (userDetails) => ({
  type: 'SET_USER_DETAILS',
  payload: userDetails,
});

export const updateUserDetails = (updatedUserDetails) => ({
  type: 'UPDATE_USER_DETAILS',
  payload: updatedUserDetails
});