import React from 'react';
 
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
 
const AdvanceRequestsList = () => {
  // Örnek talep verileri
  const requests = [
    { type: 'Kişisel', amount: '5000', status: 'Onaylandı', responseDate: '2024-03-10', requestDate: '2024-03-05' },
    { type: 'Sağlık', amount: '10000', status: 'Beklemede', responseDate: '', requestDate: '2024-03-07' },
    // Daha fazla örnek veri ekleyebilirsiniz
  ];
 
  return (
<div style={styles.card}>
<h2 style={styles.header}>Taleplerim</h2>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Talep Türü</th>
<th style={styles.th}>Talep Miktarı</th>
<th style={styles.th}>Talep Durumu</th>
<th style={styles.th}>Cevaplanma Tarihi</th>
<th style={styles.th}>Talep Etme Tarihi</th>
</tr>
</thead>
<tbody>
          {requests.map((request, index) => (
<tr key={index}>
<td style={styles.td}>{request.type}</td>
<td style={styles.td}>{request.amount}</td>
<td style={styles.td}>{request.status}</td>
<td style={styles.td}>{request.responseDate || 'N/A'}</td>
<td style={styles.td}>{request.requestDate}</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
};
 
export default AdvanceRequestsList;