import {  Routes, Route, Navigate  } from "react-router-dom";
import Login from './components/Login/SignIn'
import ForgotPass from './components/ForgotPass/ForgotPass';
import './App.css';
import Template from './components/Template';
import { useSelector } from 'react-redux';
import Footer from './components/HomePage/Footer';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      
        <Routes>
        <Route path='*' element={<Template />} />
        {isAuthenticated ? (
          <Route path="/" element={<Template />} />
        ) : (
          <Route path="/" element={<Navigate to="/SignIn" />} />
        )}
        <Route path="/SignIn" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>

        <Footer />

    </div>
  );
}
export default App;