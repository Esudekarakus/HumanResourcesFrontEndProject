import React, { useState } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, makeStyles } from '@material-ui/core';
 
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
});
 
const initialRequests = [
  { id: 1, firstName: 'Ayşe', lastName: 'Yılmaz', amount: '500', date: '20/03/2024', type: 'Ulaşım' },
  { id: 2, firstName: 'Ali', lastName: 'Demir', amount: '300', date: '19/03/2024', type: 'Konaklama' },
  // Daha fazla talep buraya eklenebilir...
];
 
function ApproveRejectTable() {
  const classes = useStyles();
  const [requests, setRequests] = useState(initialRequests);
 
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
            {requests.map((request) => (
<TableRow key={request.id}>
<TableCell component="th" scope="row">
                  {request.firstName}
</TableCell>
<TableCell>{request.lastName}</TableCell>
<TableCell>{request.amount}</TableCell>
<TableCell>{request.date}</TableCell>
<TableCell>{request.type}</TableCell>
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
            ))}
</TableBody>
</Table>
</CardContent>
</Card>
  );
}
 
export default ApproveRejectTable;