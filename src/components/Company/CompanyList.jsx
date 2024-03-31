 import React, { useState,useEffect } from "react";
 import { useSelector } from "react-redux";
 import { GetCompanyList } from "../../service/CompanyService";
 

const CompanyList =  () => {

  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filter, setFilter] = useState("");
 
  const userRole = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (userRole === "admin") {
      fetchCompanyList();
    }
  }, [userRole]);

  const fetchCompanyList = async () => {
    try {
      const response = await GetCompanyList();
      setCompanies(response);
      setFilteredCompanies(response);
    } catch (error) {
      console.error("Error fetching company list:", error);
    }
  };

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    const filtered = companies.filter((company) => {
      const companyName = company.name.toLowerCase();
      const companyVatNumber = company.vatNumber.toLowerCase();
      const companyEmail = company.email ? company.email.toLowerCase() : ''; // Add a conditional check for company.email
      const phoneNumber = company.phoneNumber.toLowerCase();
  
      return (
        companyName.includes(value) ||
        companyVatNumber.includes(value) ||
        companyEmail.includes(value) || // Check if company.email exists before calling toLowerCase()
        phoneNumber.includes(value)
      );
    });
    setFilteredCompanies(filtered);
  };
  
  const clearFilter = () => {
    setFilter("");
    setFilteredCompanies(companies);
  };


  const styles = {
    listContainer: {
      width: "100%",
      maxWidth: "960px",
      margin: "20px auto",
      backgroundColor: "#f0f8ff", // Açık mavi
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      fontsize: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#007bff", // Koyu mavi
      color: "white",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #dee2e6",
    },
    button: {
      padding: "6px 12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    header: {
      fontSize: '30px',
      padding: "20px",
      backgroundColor: "#007bff", // Koyu mavi
      color: "white",
      textAlign: "center",
    },

    searchContainer: {
      padding: "10px",
      backgroundColor: "#f0f8ff", // Açık mavi
    },
    searchInput: {
      padding: "10px",
      marginRight: "5px",
      width: "calc(100% - 120px)",
    },
    searchButton: {
      padding: "10px",
      width: "100px",
    },
    logo: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
  };

 

  return (
    <div style={styles.listContainer}>
      <div style={styles.header}>Şirket Listesi</div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Şirket Ara..."
          style={styles.searchInput}
          value={filter}
          onChange={handleFilterChange}
        />
        <button style={styles.searchButton} onClick={() => setFilter("")}>
          Temizle
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Logo</th>
            <th style={styles.th}>Şirket Adı</th>
            <th style={styles.th}>Vat Number</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Telefon</th>
            <th style={styles.th}>Aksiyon</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company, index) => (
            <tr key={index}>
              <td style={styles.td}>
                <img
                  src={company.logo}
                  alt="Company Logo"
                  style={styles.logo}
                />
              </td>
              <td style={styles.td}>{company.name}</td>
              <td style={styles.td}>{company.vatNumber}</td>
              <td style={styles.td}>{company.email}</td>
              <td style={styles.td}>{company.phoneNumber}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Şirket Detayları: ${company.name}`)}
                >
                  Detaylar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
