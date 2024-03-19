import React from 'react';
 
const LeaveRequestsTable = ({ leaveRequests }) => {
  // Stilleri bileşen içerisinde tanımlama
  const tableContainerStyle = {
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    padding: '1em',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
 
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
 
  const thStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: '1px solid #007bff',
  };
 
  const tdStyle = {
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #007bff',
  };
 
  const headerStyle = {
    textAlign: 'center',
    color: '#007bff',
    margin: '0',
    padding: '0.5em',
  };
 
  return (
<div style={tableContainerStyle}>
<h3 style={headerStyle}>Taleplerim</h3>
<table style={tableStyle}>
<thead>
<tr>
<th style={thStyle}>Talep Türü</th>
<th style={thStyle}>Talep Miktarı</th>
<th style={thStyle}>Talep Durumu</th>
<th style={thStyle}>Cevaplama Tarihi</th>
<th style={thStyle}>Talep Etme Tarihi</th>
</tr>
</thead>
<tbody>
          {leaveRequests.map((request, index) => (
<tr key={index}>
<td style={tdStyle}>{request.type}</td>
<td style={tdStyle}>{request.amount}</td>
<td style={tdStyle}>{request.status}</td>
<td style={tdStyle}>{request.responseDate}</td>
<td style={tdStyle}>{request.requestDate}</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
};
 
// Örnek izin talepleri listesi
const leaveRequests = [
  { type: 'Kişisel', amount: '5000', status: 'Onaylandı', responseDate: '2024-03-10', requestDate: '2024-03-05' },
  { type: 'Sağlık', amount: '10000', status: 'Beklemede', responseDate: 'N/A', requestDate: '2024-03-07' },
];
 
// Bileşeni kullanım örneği
const LeaveRequestList = () => (
<div>
<LeaveRequestsTable leaveRequests={leaveRequests} />
</div>
);
 
export default LeaveRequestList;
