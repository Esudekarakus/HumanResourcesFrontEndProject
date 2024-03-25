import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login/SignIn';
import { useSelector } from 'react-redux'; 
import Home from "../components/HomePage/Home";
import Details from "../components/HomePage/Details";
import AddEmployee from "./HomePage/AddEmp";
import UpdateDetails from "./UpdateDetails";
import AdvanceRequestForm from "./Personel/AdvanceForm";
import AdvanceRequestsList from "./Personel/AdvanceList";
import LeaveRequestForm from "./Personel/LeaveForm";
import LeaveRequestList from "./Personel/LeaveList";
import ExpenseForm from "./Personel/ExpenseForm";
import ApproveRejectTable from "./Employeer/ApproveRejectTable";
import LeaveApprovalScreen from "./Employeer/LeaveApprovalScreen";
import ExpenseScreen from "./Employeer/ExpenseScreen";

function Template() {

  const userRole = useSelector((state) => state.auth.role);
  
  const [isAdvanceMenuOpen, setAdvanceMenuOpen] = useState(false);
  const [isLeaveMenuOpen, setLeaveMenuOpen] = useState(false);
  const [isExpenseMenuOpen, setExpenseMenuOpen] = useState(false);
  const toggleAdvanceMenu = () => setAdvanceMenuOpen(!isAdvanceMenuOpen);
  const toggleLeaveMenu = () => setLeaveMenuOpen(!isLeaveMenuOpen);
  const toggleExpenseMenu = () => setExpenseMenuOpen(!isExpenseMenuOpen);

  return (
    <main>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            padding: "20px",
            width: "250px",
            minHeight: "100vh",
            background: "#004d99",
            color: "white",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link
                to="/home/:userId"
                style={{ color: "white", textDecoration: "none" ,fontSize:"20px"}}
              >
                Anasayfa
              </Link>
            </li>
            
            <li>
              <Link
                to="/details/:userId"
                style={{ color: "white", textDecoration: "none" ,fontSize:"20px"}}
              >
                Detaylar
              </Link>
            </li>
           
            <li>
              <Link
                to="/update"
                style={{ color: "white", textDecoration: "none" ,fontSize:"20px"}}
              >
                Bilgileri Güncelle
              </Link>
            </li>
            
            <li>
              <Link
                to="/employees"
                style={{ color: "white", textDecoration: "none" ,fontSize:"20px"}}
              >
                Personel Ekle
              </Link>
            </li>
            
            <li onClick={toggleAdvanceMenu} style={{ cursor: "pointer" , fontSize:"20px"}}>
              Avans İşlemleri
              {isAdvanceMenuOpen && (
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Link
                      to="/advancerequestform"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Avans Talep Et
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      to="/advancerequestlist"
                      style={{ color: "white", textDecoration: "none"}}
                    >
                      Avans Taleplerim
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/approverejecttable"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Avans Onay
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li onClick={toggleLeaveMenu} style={{ cursor: "pointer",fontSize:"20px" }}>
              İzin İşlemleri
              {isLeaveMenuOpen && (
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Link
                      to="/leaverequestform"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      İzin Talep Et
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/leaverequestlist"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      İzin Taleplerim
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/leaveapprovalscreen"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      İzin Onay
                    </Link>
                  </li>
                </ul>
              )}
            </li>
           
            <li onClick={toggleExpenseMenu} style={{ cursor: "pointer" ,fontSize:"20px"}}>
              Masraf İşlemleri
              {isExpenseMenuOpen && (
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Link
                      to="/expenseform"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Masraf Talep Et
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      to="/expensescreen"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Masraf Onay
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <div style={{ flex: 1, padding: "20px", background: "#e6f2ff" }}>
          
          <Routes>
          <Route path="/SignIn" element={<Login />} />
            <Route path="/home/:userId" element={<Home />} />
            <Route path="/details/:userId" element={<Details />} />
            {userRole === "employee" && <Route path="/employees" element={<AddEmployee />} />}  
            <Route path="/update" element={<UpdateDetails />} />
            <Route path="/advancerequestform"element={<AdvanceRequestForm />}/>
            <Route path="/advancerequestlist" element={<AdvanceRequestsList />}/>
            <Route path="/leaverequestform" element={<LeaveRequestForm />} />
            <Route path="/leaverequestlist" element={<LeaveRequestList />} />
            <Route path="/expenseform" element={<ExpenseForm />} />
            <Route path="/approverejecttable"element={<ApproveRejectTable />}/>
            <Route path="/leaveapprovalscreen"element={<LeaveApprovalScreen />}/>
            <Route path="/expensescreen" element={<ExpenseScreen />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default Template;
