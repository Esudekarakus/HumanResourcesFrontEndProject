import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, makeStyles } from '@material-ui/core';
import { getLeaveByEmployeeId } from '../../service/LeaveService';
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
 
function LeaveRequestList() {
  const [leaveRequests, setLeaveRequests] = useState([]);
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
 
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLeaveByEmployeeId(personalId);
        setLeaveRequests(data);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    }
 
    fetchData();
  }, []);
  const getApprovalStatusText = (status) => {
    switch (status) {
      case 1:
        return 'Onay Bekleniyor';
      case 2:
        return 'Onaylandı';
      case 3:
        return 'Reddedildi';
      default:
        return 'Onay Bekleniyor'; // Varsayılan durum
    }
  };
  const getLeaveTypeText = (type) => {
    switch (type) {
      case 1:
    return 'Yıllık İzin';
      case 2:
          return 'Ücretsiz Izin';
      case 3:
          return 'Mazeret İzni';

      case 4:
          return 'Raporlu İzin'; 
      case 5:
          return 'Özel İzin';
      case 6:
          return 'Uzun Süreli İzin'; 
      case 7:
          return 'Hastalık İzni';
      case 8:
          return 'Doğum İzni';
      case 9:
          return 'Evlilik İzni';
      case 10:
          return 'Ölüm İzni';
      case 11:
          return 'Annelik İzni';
      case 12:
          return 'Babalık İzni';
      default:
          return 'Mazeret İzni';
    }
  };
  return (
    <div style={styles.card}>
      <h2 style={styles.header}>İzin Taleplerim</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Talep Türü</th>
            <th style={styles.th}>Açıklama</th>
            <th style={styles.th}>Cevaplanma Tarihi</th>
            <th style={styles.th}>İzin Başlangıç</th>
            <th style={styles.th}>İzin Bitiş</th>
            <th style={styles.th}>Talep Durumu</th>
            {/* <th style={styles.th}>Gün Sayısı</th> */}
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request, index) => (
            <tr key={index}>
              <td style={styles.td}>{getLeaveTypeText(request.type)}</td>
              <td style={styles.td}>{request.description}</td>
              <td style={styles.td}>{request.approvalDate || '-'}</td>
              <td style={styles.td}>{request.leaveDate}</td>
              <td style={styles.td}>{request.dueDate}</td>
              <td style={styles.td}>{getApprovalStatusText(request.approvalStatus)}</td>
              {/* <td style={styles.td}> {request.numberOfDays}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default LeaveRequestList;