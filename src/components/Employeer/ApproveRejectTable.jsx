import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, makeStyles } from '@material-ui/core';
import { getAdvanceWithEmployee } from '../../service/AdvanceService';
 
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
 
function ApproveRejectTable() {
  const [requests, setRequests] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAdvanceWithEmployee();
        setRequests(data.result); // Diziyi buradan al
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    }
 
    fetchData();
  }, []);
 
  const handleApprove = (id) => {
    // Onay işlemi burada yapılabilir...
    alert(`Talep ${id} onaylandı.`);
  };
 
  const handleReject = (id) => {
    // Reddetme işlemi burada yapılabilir...
    alert(`Talep ${id} reddedildi.`);
  };
 
  return (
    <div style={styles.card}>
        <h2 style={styles.header}>
          Avans Talep Onay Ekranı
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ad</th>
              <th style={styles.th}>Soyad</th>
              <th style={styles.th}>Talep Tutarı</th>
              <th style={styles.th}>Talep Tarihi</th>
              <th style={styles.th}>Talep Türü</th>
              <th style={styles.th} align="center">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id}>
                  <td component="th" scope="row">
                    {request.employeeName}
                  </td>
                  <td>{request.employeeLastName}</td>
                  <td>{request.amount}</td>
                  <td>{request.createdDate}</td>
                  <td>{request.advanceType}</td>
                  <td align="center">
                    <Button style={{backgroundColor:"green"}}
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => handleApprove(request.id)}
                    >
                      Onayla
                    </Button>
                    <Button style={{backgroundColor:"red"}}
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => handleReject(request.id)}
                    >
                      Reddet
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} align="center">Veri yükleniyor...</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}
 
export default ApproveRejectTable;
 