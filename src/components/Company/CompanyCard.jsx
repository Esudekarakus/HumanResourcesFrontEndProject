
import React ,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import decodeToken from "../../service/JwtDecoder";
import { fetchCompanyById } from "../../service/CompanyService";

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
  

const CompanyCard = () => {

  const[companyDetails,setCompanyDetails]=useState("");

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

  const CompanyId = useSelector((state)=>state.userDetails.companyId);
  const cDetails = useSelector((state)=>state.companyDetails);
  console.log(cDetails);


  if (CompanyId !== 0) {
    useEffect(() => {
      console.log(CompanyId);
        bringCompanyDetails(CompanyId);
        setCompanyDetails(cDetails);
    }, [CompanyId]);
}


  const bringCompanyDetails = async (CompanyId) => {
    try {
      console.log(CompanyId);
      const response = await fetchCompanyById(CompanyId);
      setCompanyDetails(cDetails);
    } catch (error) {
      console.error("Error fetching company list:", error);
    }
  };

  return (
    <div style={styles.companyCard}>
      <div style={styles.cardHeader}>
        <img src={companyDetails.logo} alt="Company Logo" style={styles.companyLogo} />
        <h2>{companyDetails.name}</h2>
      </div>
      <div style={styles.cardContent}>
        <table style={styles.companyInfo}>
          <tbody>
            <tr>
              <td style={styles.companyInfoTdFirst}>Ünvan:</td>
              <td style={styles.companyInfoTd}>{companyDetails.name}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Mersis No:</td>
              <td style={styles.companyInfoTd}>{companyDetails.mersisNo}   </td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Vergi No:</td>
              <td style={styles.companyInfoTd}>{companyDetails.vatNumber}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Vergi Dairesi:</td>
              <td style={styles.companyInfoTd}>{companyDetails.taxOffice}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Telefon:</td>
              <td style={styles.companyInfoTd}>{companyDetails.phoneNumber}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Adres:</td>
              <td style={styles.companyInfoTd}>{companyDetails.address}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Email:</td>
              <td style={styles.companyInfoTd}>{companyDetails.email}</td>
            </tr>

            <tr>
              <td style={styles.companyInfoTdFirst}>Çalışan Sayısı:</td>
              <td style={styles.companyInfoTd}>{companyDetails.employeeCount}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Kuruluş Yılı:</td>
              <td style={styles.companyInfoTd}>{companyDetails.foundationDate}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>
                Sözleşme Başlangıç Tarihi:
              </td>
              <td style={styles.companyInfoTd}>{companyDetails.dateOfContractStart}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Sözleşme Bitiş Tarihi:</td>
              <td style={styles.companyInfoTd}>{companyDetails.dateOFContractEnd}</td>
            </tr>
            <tr>
              <td style={styles.companyInfoTdFirst}>Aktiflik Durumu:</td>
              <td style={styles.companyInfoTd}>
                {companyDetails.isActive ? "Aktif" : "Pasif"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyCard;
