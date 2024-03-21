import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  makeStyles
} from '@material-ui/core';
import { getLeaveWithEmployee } from '../../service/LeaveService'; 

const useStyles = makeStyles({
  card: {
    margin: '20px',
    backgroundColor: '#bbdefb',
  },
  table: {
    minWidth: 650,
  },
  button: {
    margin: '5px',
  },
  approveButton: {
    backgroundColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  rejectButton: {
    backgroundColor: '#f44336',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  }
});

function LeaveApprovalScreen() {
  const classes = useStyles();
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
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Yıllık İzin Onay Ekranı
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ad</TableCell>
              <TableCell>Soyad</TableCell>
              <TableCell>Talep Edilen Gün Sayısı</TableCell>
              <TableCell>Açıklama</TableCell>
              <TableCell>Talep Türü</TableCell>
              <TableCell>İzin Başlangıç Tarihi</TableCell>
              <TableCell>İzin Bitiş Tarihi</TableCell>
              <TableCell align="center">İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.employeeName}</TableCell>
                <TableCell>{request.employeeLastName}</TableCell>
                <TableCell>{request.numberOfDays}</TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.leaveDate}</TableCell>
                <TableCell>{request.dueDate}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    className={`${classes.button} ${classes.approveButton}`}
                    onClick={() => handleApprove(request.id)}
                  >
                    Onayla
                  </Button>
                  <Button
                    variant="contained"
                    className={`${classes.button} ${classes.rejectButton}`}
                    onClick={() => handleReject(request.id)}
                  >
                    Reddet
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default LeaveApprovalScreen;
