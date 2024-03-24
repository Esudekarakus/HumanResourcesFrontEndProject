import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// API çağrılarınızı içeren servis dosyanızın yolu
import { getLeaveWithEmployee } from '../../service/LeaveService';

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

function LeaveApprovalScreen() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getLeaveWithEmployee();
        setLeaveRequests(response.result);
      } catch (error) {
        console.error('İzin talepleri yüklenirken bir hata oluştu:', error);
      }
    }

    fetchData();
  }, []);

  const updateLeaveStatus = async (leaveId, newStatus) => {
    console.log(`Updating status for leaveId: ${leaveId} with newStatus: ${newStatus}`);
    const url = `https://localhost:7287/api/leave/${leaveId}`;
    console.log(`Request URL: ${url}`);
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: leaveId, status: newStatus }),
        
      });

      if (!response.ok) {
        throw new Error('Durum güncelleme başarısız');
      }

      // API çağrısı başarılıysa, liste güncellenir
      const updatedList = leaveRequests.map(request => {
        if (request.id === leaveId) {
          return { ...request, status: newStatus };
        }
        return request;
      });
      alert(`İzin talebi ID: ${leaveId} başarıyla güncellendi.`);
      setLeaveRequests(updatedList);
    } catch (error) {
      console.error('İzin durumu güncellenirken bir hata oluştu:', error);
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.header}> İzin Talep Onay Ekranı</h2>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell style={styles.th}>Ad</TableCell>
            <TableCell style={styles.th}>Soyad</TableCell>
            <TableCell style={styles.th}>Talep Edilen Gün Sayısı</TableCell>
            <TableCell style={styles.th}>Açıklama</TableCell>
            <TableCell style={styles.th}>Talep Türü</TableCell>
            <TableCell style={styles.th}>İzin Başlangıç Tarihi</TableCell>
            <TableCell style={styles.th}>İzin Bitiş Tarihi</TableCell>
            <TableCell style={styles.th}>İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaveRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell style={styles.td}>{request.employeeName}</TableCell>
              <TableCell style={styles.td}>{request.employeeLastName}</TableCell>
              <TableCell style={styles.td}>{request.numberOfDays}</TableCell>
              <TableCell style={styles.td}>{request.description}</TableCell>
              <TableCell style={styles.td}>{request.type}</TableCell>
              <TableCell style={styles.td}>{request.leaveDate}</TableCell>
              <TableCell style={styles.td}>{request.dueDate}</TableCell>
              <TableCell>
                <Button style={styles.buttonApprove} onClick={() => updateLeaveStatus(request.id, 2)}>Onayla</Button>
                <Button style={styles.buttonReject} onClick={() => updateLeaveStatus(request.id, 3)}>Reddet</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default LeaveApprovalScreen;
