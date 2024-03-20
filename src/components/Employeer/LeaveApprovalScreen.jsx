import React, { useState } from 'react';
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
 
const initialLeaveRequests = [
  { id: 1, firstName: 'Ayşe', lastName: 'Yılmaz', daysRequested: 5, requestDate: '2024-03-20', type: 'Yıllık İzin', startDate: '2024-03-25', endDate: '2024-03-30' },
  { id: 2, firstName: 'Ali', lastName: 'Demir', daysRequested: 10, requestDate: '2024-03-18', type: 'Yıllık İzin', startDate: '2024-04-01', endDate: '2024-04-11' },
  // Daha fazla izin talebi buraya eklenebilir...
];
 
function LeaveApprovalScreen() {
  const classes = useStyles();
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);
 
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
<TableCell>Talep Edilen Gün</TableCell>
<TableCell>Talep Tarihi</TableCell>
<TableCell>Talep Türü</TableCell>
<TableCell>İzin Başlangıç Tarihi</TableCell>
<TableCell>İzin Bitiş Tarihi</TableCell>
<TableCell align="center">İşlemler</TableCell>
</TableRow>
</TableHead>
<TableBody>
            {leaveRequests.map((request) => (
<TableRow key={request.id}>
<TableCell>{request.firstName}</TableCell>
<TableCell>{request.lastName}</TableCell>
<TableCell>{request.daysRequested}</TableCell>
<TableCell>{request.requestDate}</TableCell>
<TableCell>{request.type}</TableCell>
<TableCell>{request.startDate}</TableCell>
<TableCell>{request.endDate}</TableCell>
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