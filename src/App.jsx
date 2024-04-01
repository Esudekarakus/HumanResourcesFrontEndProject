import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login/SignIn'
import ForgotPass from './components/ForgotPass/ForgotPass';
import './App.css';
import Template from './components/Template';
import { useSelector,useDispatch } from 'react-redux';
import Footer from './components/HomePage/Footer';
import { getAppUserDetailsByMail } from "./service/AppUserService";
import { setUserDetails } from "./service/redux/actions/userAction";
import decodeToken from "./service/JwtDecoder";


function App() {
  const authDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const decodedToken=decodeToken();
  console.log(authDetails.Role);
  console.log(authDetails);
  console.log(decodedToken.Email);

  const UserDetails=async(email)=>{
    const apiResponse = await getAppUserDetailsByMail(email);
    console.log(apiResponse);
    return apiResponse;
  }
  if (decodedToken !== null) {
    UserDetails(decodedToken.Email)
      .then(result => {
        console.log(result);
        dispatch(setUserDetails(result));
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
        // Handle error if needed
      });
  }




  return (
    <div>

      <Routes>
        <Route path='*' element={<Template />} />
        <Route path="/" element={authDetails.isAuthenticated ? <Template /> : <Navigate to="SignIn" />} />
        <Route path="/SignIn" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
      </Routes>

      <Footer />

    </div>
  );
}
export default App;