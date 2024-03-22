import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { getAdvanceWithEmployee } from '../../service/AdvanceService';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#f0faff',
    border: '1px solid #007bff',
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
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function ApproveRejectTable() {
  const classes = useStyles();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAdvanceWithEmployee();
        setRequests(data.result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleApprove = (id) => {
    alert(`Talep ${id} onaylandı.`);
  };

  const handleReject = (id) => {
    alert(`Talep ${id} reddedildi.`);
  };

  return (
    <div className={classes.card}>
      <h2 className={classes.header}>
        Avans Talep Onay Ekranı
      </h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.th}>Ad</th>
            <th className={classes.th}>Soyad</th>
            <th className={classes.th}>Talep Tutarı</th>
            <th className={classes.th}>Talep Tarihi</th>
            <th className={classes.th}>Talep Türü</th>
            <th className={classes.th} align="center">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request) => (
              <tr key={request.id}>
                <td>{request.employeeName}</td>
                <td>{request.employeeLastName}</td>
                <td>{request.amount}</td>
                <td>{request.createdDate}</td>
                <td>{request.advanceType}</td>
                <td align="center">
                  <Button
                    style={{ backgroundColor: 'green' }}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => handleApprove(request.id)}
                  >
                    Onayla
                  </Button>
                  <Button
                    style={{ backgroundColor: 'red' }}
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
