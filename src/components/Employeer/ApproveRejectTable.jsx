import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { getAdvanceWithEmployee } from '../../service/AdvanceService';

const styles = {
  card: {
    backgroundColor: '#f0faff',
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
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
  },
  buttonApprove: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgreen',
    },
    margin: '5px',
  },
  buttonReject: {
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkred',
    },
    margin: '5px',
  },
};

function AdvanceApprovalScreen() {
  const [advanceRequests, setAdvanceRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAdvanceWithEmployee();
        setAdvanceRequests(response.result);
      } catch (error) {
        console.error('Avans talepleri yüklenirken bir hata oluştu:', error);
      }
    }

    fetchData();
  }, []);

  const updateAdvanceStatus = async (advanceId, newStatus) => {
    console.log(`Updating status for advance: ${advanceId} with newStatus: ${newStatus}`);
    const url = `https://localhost:7287/api/advance/${advanceId}`;
    console.log(`Request URL: ${url}`);
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: advanceId, approvalStatus: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Durum güncelleme başarısız');
      }

      const updatedList = advanceRequests.map(request => {
        if (request.id === advanceId) {
          return { ...request, approvalStatus: newStatus };
        }
        return request;
      });
      alert(`Avans talebi ID: ${advanceId} başarıyla güncellendi.`);
      setAdvanceRequests(updatedList);
    } catch (error) {
      console.error('Avans durumu güncellenirken bir hata oluştu:', error);
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.header}> Avans Talep Onay Ekranı</h2>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell style={styles.th}>Ad</TableCell>
            <TableCell style={styles.th}>Soyad</TableCell>
            <TableCell style={styles.th}>Talep Edilen Miktar</TableCell>
            <TableCell style={styles.th}>Açıklama</TableCell>
            <TableCell style={styles.th}>Talep Türü</TableCell>
            <TableCell style={styles.th}>Talep Tarihi</TableCell>
            <TableCell style={styles.th}>Güncellenme Tarihi</TableCell>
            <TableCell style={styles.th}>Onaylanma Tarihi</TableCell>
            <TableCell style={styles.th}>Aksiyonlar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {advanceRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell style={styles.td}>{request.employeeName}</TableCell>
              <TableCell style={styles.td}>{request.employeeLastName}</TableCell>
              <TableCell style={styles.td}>{request.amount}</TableCell>
              <TableCell style={styles.td}>{request.description}</TableCell>
              <TableCell style={styles.td}>{request.advanceType}</TableCell> {/* Assuming requestType exists */}
              <TableCell style={styles.td}>{request.createdDate}</TableCell>
              <TableCell style={styles.td}>{request.updatedDate}</TableCell>
              <TableCell style={styles.td}>{request.approvalDate}</TableCell>
              <TableCell>
              <Button style={styles.buttonApprove} onClick={() => updateAdvanceStatus(request.id, 2)}>Onayla</Button>
                <Button style={styles.buttonReject} onClick={() => updateAdvanceStatus(request.id, 3)}>Reddet</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdvanceApprovalScreen;
