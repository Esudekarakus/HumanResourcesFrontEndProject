
import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core';
import { getLeaveWithEmployee } from '../../service/LeaveService';
 
const initialLeave = [
  {
    id:3,
    employeeName: "x",
    employeeLastName: "as",
    numberOfDays: "1",
    description: "s",
    type: "Yıllık İzin",
    leaveDate: "22.02.2222",
    dueDate: "23.02.2222"
  },
];
 
 
 
const styles = {
  card: {
    backgroundColor: '#f0faff', // Açık mavi arka plan
    border: '1px solid #007bff', // Mavi çerçeve
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    
    textAlign:'center'
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
function LeaveApprovalScreen() {
  const [leaveRequests, setLeaveRequests] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLeaveWithEmployee();
        setLeaveRequests(data.result);
      } catch (error) {
        console.error(error);
        
      }
    }
 
    fetchData();
  }, []);
 
  const handleApprove = (id) => {
    // Onay işlemi burada yapılabilir...
    alert(`İzin talebi ${id} onaylandı.`);
  };
 
  const handleReject = (id) => {
    // Reddetme işlemi burada yapılabilir...
    alert(`İzin talebi ${id} reddedildi.`);
  };
 
  return (
    <div style={styles.card}>
        <h2 style={{color:'#007bff',textAlign:'center'}}>
          İzin Onay Ekranı
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <td style={styles.th}>Ad</td>
              <td style={styles.th}>Soyad</td>
              <td style={styles.th}>Talep Edilen Gün Sayısı</td>
              <td style={styles.th}>Açıklama</td>
              <td style={styles.th}>Talep Türü</td>
              <td style={styles.th}>İzin Başlangıç Tarihi</td>
              <td style={styles.th}>İzin Bitiş Tarihi</td>
              <td style={styles.th} align="center">İşlemler</td>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.employeeName}</td>
                <td>{request.employeeLastName}</td>
                <td>{request.numberOfDays}</td>
                <td>{request.description}</td>
                <td>{request.type}</td>
                <td>{request.leaveDate}</td>
                <td>{request.dueDate}</td>
                <td align="center">
                  <Button style={{backgroundColor:"green"}}
                    variant="contained"
                    className={`${classes.button} ${classes.approveButton}`}
                    onClick={() => handleApprove(request.id)}
                  >
                    Onayla
                  </Button>
                  <Button style={{backgroundColor:"red"}}
                    variant="contained"
                    className={`${classes.button} ${classes.rejectButton}`}
                    onClick={() => handleReject(request.id)}
                  >
                    Reddet
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
 
export default LeaveApprovalScreen;
 