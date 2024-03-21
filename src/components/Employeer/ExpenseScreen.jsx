
import React, { useState } from 'react';
import {Button} from '@material-ui/core';
 
const initialExpenses = [
  // Başlangıç verileri
  {
    id: 1,
    ad: "Ahmet",
    soyad: "Yılmaz",
    masrafTuru: "Ulaşım",
    masrafTutari: "150.00 TL",
    talepTarihi: "2024-03-20",
    masrafBelgesi: "ulasim-masrafi.pdf",
  },
  // Daha fazla örnek veri eklenebilir.
];
 
function ExpenseScreen() {
  const [expenses] = useState(initialExpenses);
 
  const styles = {
    card: {
      backgroundColor: '#f0faff', // Açık mavi arka plan
      border: '1px solid #007bff', // Mavi çerçeve
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '700px',
      margin: '20px auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      
      textAlign:'center'
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
 
  return (
<div style={styles.card}>
<h2 style={{color:'#007bff'}}>Masraf Onay Ekranı</h2>
<table style={styles.table}>
<thead>
<tr>
<td style={styles.th}>Ad</td>
<td style={styles.th}>Soyad</td>
<td style={styles.th}>Masraf Türü</td>
<td style={styles.th}>Masraf Tutarı</td>
<td style={styles.th}>Talep Tarihi</td>
<td style={styles.th}>Masraf Belgesi</td>
<td style={styles.th}>İşlemler</td>
</tr>
</thead>
<tbody>
          {expenses.map((expense) => (
<tr key={expense.id}>
<td >{expense.ad}</td>
<td >{expense.soyad}</td>
<td >{expense.masrafTuru}</td>
<td >{expense.masrafTutari}</td>
<td >{expense.talepTarihi}</td>
<td >
<a style={styles.link} href={`/documents/${expense.masrafBelgesi}`} target="_blank" rel="noopener noreferrer">
                  Belgeyi Görüntüle
</a>
</td>
<td align='center'>
<Button style={{backgroundColor:"green"}}
                    variant="contained"
                    className={`${expense.button} ${expense.approveButton}`}
                    onClick={() => handleApprove(expense.id)}
                  >
                    Onayla
                  </Button>
                  <Button style={{backgroundColor:"red"}}
                    variant="contained"
                    className={`${expense.button} ${expense.rejectButton}`}
                    onClick={() => handleReject(expense.id)}
                  >
                    Reddet
                  </Button>
</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
}
 
export default ExpenseScreen;