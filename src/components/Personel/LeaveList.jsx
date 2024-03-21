import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, makeStyles } from '@material-ui/core';
import { getLeaveByEmployeeId } from '../../service/LeaveService'; 

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

function LeaveRequestList() {
  const classes = useStyles();
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLeaveByEmployeeId(1); 
        setLeaveRequests(data);
      } catch (error) {
        console.error(error);
        // Handle error, e.g., set an error state
      }
    }

    fetchData();
  }, []); 

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Taleplerim
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Talep Türü</TableCell>
              <TableCell>Açıklama</TableCell>
              <TableCell>Cevaplama Tarihi</TableCell>
              <TableCell>İzin Başlangıç</TableCell>
              <TableCell>İzin Bitiş</TableCell>
              <TableCell>Talep Durumu</TableCell>
              <TableCell>Gün Sayısı</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request, index) => (
              <TableRow key={index}>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{request.approvalDate}</TableCell>
                <TableCell>{request.leaveDate}</TableCell>
                <TableCell>{request.dueDate}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{request.numberOfDays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default LeaveRequestList;
