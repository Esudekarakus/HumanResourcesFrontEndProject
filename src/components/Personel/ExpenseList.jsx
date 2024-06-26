import {getExpensesByEmployeeId} from '../../service/ExpenseService';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
   
  const ExpenseRequestsList = () => {
    const [expenses, setExpenses] = useState([]);
    const [personalIdRole, setPersonalIdRole] = useState({ personalId: '', personalRole: '' });

    const personalId = useSelector((state) => state.userDetails.personalId);
    const personalRole = useSelector((state) => state.auth.role);
  
    useEffect(() => {
      // burada ikisinide bir use state ile tuttum buradan alıp kullanılabilir.
      setPersonalIdRole({ personalId, personalRole });
    }, [personalId, personalRole]);
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
    const getExpenseTypeText = (expenseType) => {
      switch (expenseType) {
        case 1:
          return 'Konut';
        case 2:
          return 'Seyahat';
        case 3:
          return 'Yiyecek';
        case 4:
          return 'Malzeme';
        case 5:
          return ' Eğitim';
        case 6:
          return 'Sağlık';
        case 7:
          return 'Yakıt';
        default:
          return 'Diğer'; // Varsayılan durum
      }
    };
    
    // denemeler.
    console.log(personalIdRole.personalId);
    console.log(personalIdRole.personalRole);
   
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getExpensesByEmployeeId(personalId); 
          setExpenses(data);
        } catch (error) {
          console.error(error);
          // Handle error, e.g., set an error state
        }
      }
   
      fetchData();
    }, []);
   
    return (
      <div style={styles.card}>
        <h2 style={styles.header}>Masraf Taleplerim</h2>
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
            {expenses.map((request, index) => (
              <tr key={index}>
                <td style={styles.td}>{getExpenseTypeText(request.expenseType)}</td>
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
   
  export default ExpenseRequestsList;