
import React from "react";

const sampleCompany = {
    logo: 'https://via.placeholder.com/60',
    name: 'Örnek Şirket A.Ş.',
    title: 'Müdür',
    mersisNo: '0000000000000000',
    taxNo: '0000000000',
    taxOffice: 'İstanbul Vergi Dairesi',
    phone: '0212 444 44 44',
    address: 'İstanbul, Türkiye',
    email: 'iletisim@orneksirket.com',
    employeeCount: '50',
    foundationYear: '1990',
    contractStartDate: '01/01/2020',
    contractEndDate: '01/01/2025',
    isActive: true,
  };
  

const CompanyCard = ({ company = sampleCompany }) => {
  const styles = {
    companyCard: {
      width: "100%",
      maxWidth: "600px",
      margin: "20px auto",
      backgroundColor: "#f0f8ff", // Açık mavi
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
    cardHeader: {
      backgroundColor: "#007bff", // Koyu mavi
      color: "white",
      padding: "20px",
      display: "flex",
      alignItems: "center",
    },
    companyLogo: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      marginRight: "20px",
    },
    cardContent: {
      padding: "20px",
    },
    companyInfo: {
      width: "100%",
      borderCollapse: "collapse",
    },
    companyInfoTd: {
      padding: "8px",
      borderTop: "1px solid #dee2e6",
    },
    companyInfoTdFirst: {
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.companyCard}>
      <div style={styles.cardHeader}>
        <img src={company.logo} alt="Company Logo" style={styles.companyLogo} />
        <h2>{company.name}</h2>
      </div>
      <div style={styles.cardContent}>
        <table style={styles.companyInfo}>
          <tbody>
            <tr>
              <td style={styles.companyInfoTdFirst}>Ünvan:</td>
              <td style={styles.companyInfoTd}>{company.title}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Mersis No:</td>
              <td style={styles.companyInfoTd}>{company.mersisNo}   </td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Vergi No:</td>
              <td style={styles.companyInfoTd}>{company.taxNo}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Vergi Dairesi:</td>
              <td style={styles.companyInfoTd}>{company.taxOffice}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Telefon:</td>
              <td style={styles.companyInfoTd}>{company.phone}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Adres:</td>
              <td style={styles.companyInfoTd}>{company.address}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Email:</td>
              <td style={styles.companyInfoTd}>{company.email}</td>
            </tr>

            <tr>
              <td style={styles.companyInfoTdFirst}>Çalışan Sayısı:</td>
              <td style={styles.companyInfoTd}>{company.employeeCount}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Kuruluş Yılı:</td>
              <td style={styles.companyInfoTd}>{company.foundationYear}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>
                Sözleşme Başlangıç Tarihi:
              </td>
              <td style={styles.companyInfoTd}>{company.contractStartDate}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Sözleşme Bitiş Tarihi:</td>
              <td style={styles.companyInfoTd}>{company.contractEndDate}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Aktiflik Durumu:</td>
              <td style={styles.companyInfoTd}>
                {company.isActive ? "Aktif" : "Pasif"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyCard;
