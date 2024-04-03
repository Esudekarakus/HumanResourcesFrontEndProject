import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login/SignIn";
import { useSelector, useDispatch } from "react-redux";
import Home from "../components/HomePage/Home";
import Details from "../components/HomePage/Details";
import AddEmp from "./HomePage/AddEmp";
import UpdateDetails from "./UpdateDetails";
import AdvanceRequestForm from "./Personel/AdvanceForm";
import AdvanceRequestsList from "./Personel/AdvanceList";
import LeaveRequestForm from "./Personel/LeaveForm";
import LeaveRequestList from "./Personel/LeaveList";
import ExpenseList from "./Personel/ExpenseList";
import ExpenseForm from "./Personel/ExpenseForm";
import ApproveRejectTable from "./Employeer/ApproveRejectTable";
import LeaveApprovalScreen from "./Employeer/LeaveApprovalScreen";
import ExpenseScreen from "./Employeer/ExpenseScreen";
import CompanyCard from "./Company/CompanyCard";
import CompanyList from "./Company/CompanyList";
import ManagerForm from "./Company/ManagerForm";
import backgroundImage from "/images/clean-2721104_1280.jpg";
// import { getAppUserDetailsByMail } from "../service/AppUserService";
// import { setUserDetails } from "../service/redux/actions/userAction";
// import { useDispatch } from "react-redux";

function Template() {
  const [isAdvanceMenuOpen, setAdvanceMenuOpen] = useState(false);
  const [isLeaveMenuOpen, setLeaveMenuOpen] = useState(false);
  const [isExpenseMenuOpen, setExpenseMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setCompanyMenuOpen] = useState(false);

  const toggleAdvanceMenu = () => setAdvanceMenuOpen(!isAdvanceMenuOpen);
  const toggleLeaveMenu = () => setLeaveMenuOpen(!isLeaveMenuOpen);
  const toggleExpenseMenu = () => setExpenseMenuOpen(!isExpenseMenuOpen);
  const toggleCompanyMenu = () => setCompanyMenuOpen(!isCompanyMenuOpen);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const toggleLogoutModal = () => setLogoutModalOpen(!isLogoutModalOpen);

  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user.role);

  const handleLogoutPage = () => {
    localStorage.removeItem("jwt");
    navigate("/SignIn");
  };

  const cancelLogout = () => {
    setLogoutModalOpen(false);
  };

  // const UserDetails=async(email)=>{
  //   const apiResponse = await getAppUserDetailsByMail(email);
  //   console.log(apiResponse);
  //   return apiResponse
  // }
  // if(user.isAuthenticated){
  //   const result = UserDetails(user.email);
  //   dispatch(setUserDetails(result));
  // }
  const modalBackdropStyle = {
    position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 100,

  };
  const modalHeaderStyle = {
    padding: '15px',
    fontSize: '1.5rem',
    fontWeight: '200',
    color: 'black',
    //backgroundColor: '#0056b3',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center',
  };
  const modalContentStyle = {
    backgroundColor: 'white',
  borderRadius: '10px',
  padding: '16px', // İçerideki boşluğu azalt
  maxWidth: '300px', // Beyaz alanın maksimum genişliğini azalt
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  overflow: 'hidden',
  };

  const modalButtonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#007bff',
    outline: 'none',
    transition: 'background-color 0.2s',
  };



  const handleBackdropClick = (e) => {
    // Eğer tıklanan eleman modalın kendisi değilse, yani backdrop ise, logout iptal işlemini çağır.
    if (e.target.id === "backdrop") {
      cancelLogout();
    }
  };

  return (
    <main>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            padding: "20px",
            width: "250px",
            minHeight: "100vh",
            //background: "#093766",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link
                to="/home/:userId"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                Anasayfa
              </Link>
            </li>

            <li>
              <Link
                to="/details/:userId"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                Detaylar
              </Link>
            </li>

            <li>
              <Link
                to="/update"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                Bilgileri Güncelle
              </Link>
            </li>
            {(user.role === "admin" || !user.role) && (
              <li
                onClick={toggleCompanyMenu}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                Mevcut Şirketler
                {isCompanyMenuOpen && (
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <Link
                        to="/companyCard"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Şirket Detayları
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/companyList"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Şirketler
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/managerForm"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Yöneticiler
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            )}

            {(user.role === "employer" || !user.role) && (
              <li>
                <Link
                  to="/addemp"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Personel Ekle
                </Link>
              </li>
            )}
            <li
              onClick={toggleAdvanceMenu}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
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
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Avans Taleplerim
                    </Link>
                  </li>
                  {user.role === "employer" && (
                    <li>
                      <Link
                        to="/approverejecttable"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Avans Onay
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </li>

            <li
              onClick={toggleLeaveMenu}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
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
                  {user.role === "employer" && (
                    <li>
                      <Link
                        to="/leaveapprovalscreen"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        İzin Onay
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </li>

            <li
              onClick={toggleExpenseMenu}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
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
                      to="/expenseList"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Masraf Taleplerim
                    </Link>
                  </li>
                  {user.role === "employer" && (
                    <li>
                      <Link
                        to="/expensescreen"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Masraf Onay
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </li>
            <li
              onClick={toggleLogoutModal}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
              Çıkış Yap
              {isLogoutModalOpen && (
                <div
                  id="backdrop"
                  style={modalBackdropStyle}
                  onClick={handleBackdropClick}
                >
                  <div
                    style={modalContentStyle}
                    onClick={(e) => e.stopPropagation()}
                  >
                   
                    <h2 style={modalHeaderStyle}>
                      Çıkmak istediğinize emin misiniz?
                    </h2>
                    <div  style={{ marginTop: '20px' }}>
                    <button style={modalButtonStyle} onClick={handleLogoutPage}>
                      Evet
                    </button>
                    <button style={modalButtonStyle} onClick={cancelLogout}>
                      Hayır
                    </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div style={{ flex: 1, padding: "20px", background: "#e6f2ff" }}>
          <Routes>
            {/* Her zaman görünecek Route'lar */}
            <Route path="/SignIn" element={<Login />} />
            <Route path="/home/:userId" element={<Home />} />
            <Route path="/details/:userId" element={<Details />} />
            <Route path="/update" element={<UpdateDetails />} />
            <Route
              path="/advancerequestform"
              element={<AdvanceRequestForm />}
            />
            <Route
              path="/advancerequestlist"
              element={<AdvanceRequestsList />}
            />
            <Route path="/leaverequestform" element={<LeaveRequestForm />} />
            <Route path="/leaverequestlist" element={<LeaveRequestList />} />
            <Route path="/expenseform" element={<ExpenseForm />} />
            <Route path="/expenseList" element={<ExpenseList />} />

            {/* Koşullu Route'lar */}
            {(user.role === "employer" || !user.role )&& (
              <>
                <Route path="/Addemp" element={<AddEmp />} />
                <Route
                  path="/approverejecttable"
                  element={<ApproveRejectTable />}
                />
                <Route
                  path="/leaveapprovalscreen"
                  element={<LeaveApprovalScreen />}
                />
                <Route path="/expensescreen" element={<ExpenseScreen />} />
              </>
            )}
            {(user.role === "admin" || !user.role) && (
              <>
                <Route path="/companyCard" element={<CompanyCard />} />
                <Route path="/companyList" element={<CompanyList />} />
                <Route path="/managerForm" element={<ManagerForm />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default Template;
