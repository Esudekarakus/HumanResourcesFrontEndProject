 import React, { useState } from "react";

const CompanyList = ({ companies }) => {

    const mockData = [
        { id: 1, logo: 'Logo1.png', name: 'Şirket A', title: 'Ünvan A', email: 'email@example.com', phone: '123-456-7890' },
        // ... add more data rows as needed
      ];


  // Kullanıcı tarafından girilen filtreyi tutan state
  const [filter, setFilter] = useState("");

  // Filtreye uyan şirketleri tutan state
  const [filteredCompanies, setFilteredCompanies] = useState(mockData );

  // Kullanıcı filtre değerini değiştirdiğinde filteredCompanies state'ini günceller
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    if (!value) {
      setFilteredCompanies(mockData);
    } else {
      const filtered = companies.filter((company) =>
        company.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCompanies(filtered);
    }
  };

  // Filtrelemeyi temizleyip tüm şirketleri tekrar göstermek için kullanılır
  const clearFilter = () => {
    setFilter("");
    setFilteredCompanies(mockData);
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
          onChange={(e) => setFilter(e.target.value)}
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
            <th style={styles.th}>Ünvanı</th>
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
              <td style={styles.td}>{company.title}</td>
              <td style={styles.td}>{company.email}</td>
              <td style={styles.td}>{company.phone}</td>
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
