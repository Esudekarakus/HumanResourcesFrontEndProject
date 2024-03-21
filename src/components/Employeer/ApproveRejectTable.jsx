import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, makeStyles } from '@material-ui/core';
import { getAdvanceWithEmployee } from '../../service/AdvanceService'; 

const useStyles = makeStyles({
  card: {
    margin: '20px',
    backgroundColor: '#bbdefb',
  },
  table: {
    minWidth: 650,
  },
  button: {
    margin: '5px' 
  }
})

function ApproveRejectTable() {
  const classes = useStyles();
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
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Avans Talep Onay Ekranı
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>Soyad</TableCell>
              <TableCell>Talep Tutarı</TableCell>
              <TableCell>Talep Tarihi</TableCell>
              <TableCell>Talep Türü</TableCell>
              <TableCell align="center">İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell component="th" scope="row">
                    {request.employeeName}
                  </TableCell>
                  <TableCell>{request.employeeLastName}</TableCell>
                  <TableCell>{request.amount}</TableCell>
                  <TableCell>{request.createdDate}</TableCell>
                  <TableCell>{request.advanceType}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => handleApprove(request.id)}
                    >
                      Onayla
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => handleReject(request.id)}
                    >
                      Reddet
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">Veri yükleniyor...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ApproveRejectTable;
