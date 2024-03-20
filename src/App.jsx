import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";


import Login from './components/Login/Login'

import ForgotPass from './components/ForgotPass/ForgotPass';
import './App.css';
import Template from './components/Template';

function App() {
  return (
    <div>
        <Routes>
          <Route path='*' element={<Template/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="forgot-password" element={<ForgotPass/>} />
        </Routes>

    

    </div>
  );
}
export default App;