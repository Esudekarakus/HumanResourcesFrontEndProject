import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./components/HomePage/Home";
import Managers from "./components/HomePage/Managers";
import Details from "./components/HomePage/Details";
import Employees from "./components/HomePage/Employees";
import Page01 from './pages/01';
import Page02 from './pages/02';
import Page03 from './pages/03';
import Login from './components/Login/Login'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { EmpUpdate } from './components/Employer/EmpUpdate';
import { EmpDetails } from './components/Employer/EmpDetails';
import ForgotPass from './components/ForgotPass/ForgotPass';
import './App.css';

function App() {
  return (
<div>
<header>
<Nav></Nav>
</header>
<main>
  <Login/>
  <ForgotPass/>
  <EmpDetails/>
  <EmpUpdate/>
<div style={{display: 'flex'}}>
<nav style={{
              padding: '20px',
              width: '250px',
              minHeight: '100vh',
              background: '#004d99', // Mavi renk
              color: 'white'
            }}>
<ul style={{listStyleType: 'none', padding: 0}}>
<li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Anasayfa</Link></li>
<li><Link to="/managers" style={{ color: 'white', textDecoration: 'none' }}>Yöneticiler</Link></li>
<li><Link to="/details" style={{ color: 'white', textDecoration: 'none' }}>Detaylar</Link></li>
<li><Link to="/employees" style={{ color: 'white', textDecoration: 'none' }}>Çalışanlar</Link></li>
</ul>
</nav>
<div style={{flex: 1, padding: '20px', background: '#e6f2ff'}}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/managers" element={<Managers />} />
<Route path="/details" element={<Details />} />
<Route path="/employees" element={<Employees />} />
<Route path="/page01" element={<Page01/>}/>
<Route path="/employer-details/:id" element={<Page02/>}/>
<Route path="/deneme" element={<Page03/>}/>
<Route path="*" element={<h2>404 Page not found</h2>} />
</Routes>
</div>
</div>
</main>
</div>
  );
}
export default App;