import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';

import Login from './components/Login/Login'

import ForgotPass from './components/ForgotPass/ForgotPass';
import './App.css';
import Template from './components/Template';

function App() {
  return (
<div>
<header>
<Nav></Nav>
</header>
<main>
  <Login/>
  <ForgotPass/>
  <Template/>
</main>
</div>
  );
}
export default App;