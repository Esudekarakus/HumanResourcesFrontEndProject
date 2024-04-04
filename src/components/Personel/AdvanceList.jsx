import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAdvancesByEmployeeId } from '../../service/AdvanceService';
 
const styles = {
  card: {
    backgroundColor: '#f0faff', // Açık mavi arka plan
    border: '1px solid #007bff', // Mavi çerçeve
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#007bff',
    textAlign: 'center',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: '1px solid #0056b3',
  },
  td: {
    padding: '8px',
    border: '1px solid #007bff',
    textAlign: 'center',
  }
};
 
const AdvanceRequestsList = () => {
  const [advanceRequests, setAdvanceRequests] = useState([]);
  const [personalIdRole, setPersonalIdRole] = useState({ personalId: '', personalRole: '' });

  const personalId = useSelector((state) => state.userDetails.personalId);
  const personalRole = useSelector((state) => state.auth.role);

  useEffect(() => {
    // burada ikisinide bir use state ile tuttum buradan alıp kullanılabilir.
    setPersonalIdRole({ personalId, personalRole });
  }, [personalId, personalRole]);

  // denemeler.
  console.log(personalIdRole.personalId);
  console.log(personalIdRole.personalRole);
  const getApprovalStatusText = (status) => {
    switch (status) {
      case 1:
        return 'Onay Bekleniyor';
      case 2:
        return 'Onaylandı';
      case 3:
        return 'Reddedildi';
      default:
        return 'Bilinmiyor'; // Varsayılan durum
    }
  };
  const getAdvanceTypeText = (advanceType) => {
    switch (advanceType) {
      case 1:
        return 'Kişisel';
    case 2:
        return 'Sağlık';
    case 3:
        return 'Seyahat';
   
    default: return AdvanceType.Individual;
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        if(personalRole==="employer"){// burada employer ın da avans isteğini yapabilirsin.

        }else{

        }
        const data = await getAdvancesByEmployeeId(personalId); // Buradaki 1, employeeId'yi temsil eder. Değiştirmeniz gerekiyorsa değiştirebilirsiniz.
        setAdvanceRequests(data);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    }
 
    fetchData();
  }, []);
 
  return (
    <div style={styles.card}>
      <h2 style={styles.header}>Avans Taleplerim</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Talep Türü</th>
            <th style={styles.th}>Talep Miktarı</th>
            <th style={styles.th}>Talep Durumu</th>
            <th style={styles.th}>Cevaplanma Tarihi</th>
            <th style={styles.th}>Talep Etme Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {advanceRequests.map((request, index) => (
            <tr key={index}>
              <td style={styles.td}>{getAdvanceTypeText(request.advanceType)}</td>
              <td style={styles.td}>{request.amount}</td>
              <td style={styles.td}>{getApprovalStatusText(request.approvalStatus)}</td>
              <td style={styles.td}>{request.updatedDate || '-'}</td>
              <td style={styles.td}>{request.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default AdvanceRequestsList;