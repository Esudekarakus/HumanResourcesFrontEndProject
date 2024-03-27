// import {  combineReducers, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit';
import userDetailsReducer from '../reducers/userDetailReducer';
import companyDetailsReducer from '../reducers/companyReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetails: userDetailsReducer,
    companyDetails:companyDetailsReducer
  },
  
});

export default store;