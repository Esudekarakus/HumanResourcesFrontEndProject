import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../components/HomePage/Home";
import Managers from "../components/HomePage/Managers";
import Details from "../components/HomePage/Details";
import AddEmployee from "./HomePage/AddEmp";
import UpdateDetails from "./UpdateDetails";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ForgotPass from '../components/ForgotPass/ForgotPass';
import '../App.css';
import AdvanceRequestForm from './Personel/AdvanceForm';
import AdvanceRequestList from './Personel/AdvanceList';
import AdvanceRequestsList from './Personel/AdvanceList';
import LeaveRequestForm from './Personel/LeaveForm';
import LeaveRequestList from './Personel/LeaveList';
import ExpenseForm from './Personel/ExpenseForm';
import ApproveRejectTable from './Employeer/ApproveRejectTable';
import LeaveApprovalScreen from './Employeer/LeaveApprovalScreen';
import ExpenseScreen from './Employeer/ExpenseScreen';



function Template() {
  return (

<main>
 
 
<div style={{display: 'flex'}}>
<nav style={{
              padding: '20px',
              width: '250px',
              minHeight: '100vh',
              background: '#004d99', // Mavi renk
              color: 'white'
            }}>
<ul style={{listStyleType: 'none', padding: 0}}>
<li><Link to="/home/:userId" style={{ color: 'white', textDecoration: 'none' }}>Anasayfa</Link></li>
<li><Link to="/details/:userId" style={{ color: 'white', textDecoration: 'none' }}>Detaylar</Link></li>
<li><Link to="/update" style={{ color: 'white', textDecoration: 'none' }}>Bilgileri Güncelle</Link></li>
<li><Link to="/employees" style={{ color: 'white', textDecoration: 'none' }}>Personel Ekle</Link></li>
<li><Link to="/advancerequestform" style={{ color: 'white', textDecoration: 'none' }}>Avans Talep Et</Link></li>
<li><Link to="/advancerequestlist" style={{ color: 'white', textDecoration: 'none' }}>Avans Taleplerim</Link></li>
<li><Link to="/leaverequestform" style={{ color: 'white', textDecoration: 'none' }}>İzin Talep Et</Link></li>
<li><Link to="/leaverequestlist" style={{ color: 'white', textDecoration: 'none' }}>İzin Taleplerim</Link></li>
<li><Link to="/expenseform" style={{ color: 'white', textDecoration: 'none' }}>Masraf Formu</Link></li>
<li><Link to="/approverejecttable" style={{ color: 'white', textDecoration: 'none' }}>Avans Onay </Link></li>
<li><Link to="/leaveapprovalscreen" style={{ color: 'white', textDecoration: 'none' }}>İzin Onay </Link></li>
<li><Link to="/expensescreen" style={{ color: 'white', textDecoration: 'none' }}>Masraf Onay </Link></li>



</ul>
</nav>
<div style={{flex: 1, padding: '20px', background: '#e6f2ff'}}>
<Routes>
<Route path="/home/:userId" element={<Home />} />
{/* <Route path="/managers" element={<Managers />} /> */}
<Route path="/details/:userId" element={<Details />} />
<Route path="/employees" element={<AddEmployee />} />
<Route path="/update" element={<UpdateDetails/>}/>
<Route path="/advancerequestform" element={<AdvanceRequestForm/>}/>
<Route path="/advancerequestlist" element={<AdvanceRequestsList/>}/>
<Route path="/leaverequestform" element={<LeaveRequestForm/>}/>
<Route path="/leaverequestlist" element={<LeaveRequestList/>}/>
<Route path="/expenseform" element={<ExpenseForm/>}/>
<Route path="/approverejecttable" element={<ApproveRejectTable/>}/>
<Route path="/leaveapprovalscreen" element={<LeaveApprovalScreen/>}/>
<Route path="/expensescreen" element={<ExpenseScreen/>}/>



</Routes>
</div>
</div>
</main>

  );
}
export default Template;