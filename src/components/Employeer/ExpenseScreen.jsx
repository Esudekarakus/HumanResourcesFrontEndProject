import React, { useState } from 'react';
 
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
    expenseScreen: {
      backgroundColor: '#f0f4f8',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '20px auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #dddddd',
    },
    button: {
      marginRight: '5px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    approveBtn: {
      backgroundColor: '#28a745',
      color: '#ffffff',
    },
    rejectBtn: {
      backgroundColor: '#dc3545',
      color: '#ffffff',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };
 
  return (
<div style={styles.expenseScreen}>
<h2>Masraf Onay Ekranı</h2>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Ad</th>
<th style={styles.th}>Soyad</th>
<th style={styles.th}>Masraf Türü</th>
<th style={styles.th}>Masraf Tutarı</th>
<th style={styles.th}>Talep Tarihi</th>
<th style={styles.th}>Masraf Belgesi</th>
<th style={styles.th}>İşlemler</th>
</tr>
</thead>
<tbody>
          {expenses.map((expense) => (
<tr key={expense.id}>
<td style={styles.td}>{expense.ad}</td>
<td style={styles.td}>{expense.soyad}</td>
<td style={styles.td}>{expense.masrafTuru}</td>
<td style={styles.td}>{expense.masrafTutari}</td>
<td style={styles.td}>{expense.talepTarihi}</td>
<td style={styles.td}>
<a style={styles.link} href={`/documents/${expense.masrafBelgesi}`} target="_blank" rel="noopener noreferrer">
                  Belgeyi Görüntüle
</a>
</td>
<td style={styles.td}>
<button style={{...styles.button, ...styles.approveBtn}}>Onayla</button>
<button style={{...styles.button, ...styles.rejectBtn}}>Reddet</button>
</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
}
 
export default ExpenseScreen;