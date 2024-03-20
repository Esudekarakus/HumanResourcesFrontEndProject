import React from 'react';
 
const LeaveRequestsTable = ({ leaveRequests }) => {
  // Stilleri bileşen içerisinde tanımlama
  const tableContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1em',
    maxWidth: '800px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #007bff',
  };
 
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
 
  const thStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: '1px solid #007bff',
    fontSize: '0.9em',
  };
 
  const tdStyle = {
    textAlign: 'center',
    padding: '10px 15px',
    border: '1px solid #007bff',
    fontSize: '0.9em',
    backgroundColor: 'white',
  };
 
  const headerStyle = {
    textAlign: 'center',
    color: '#007bff',
    margin: '0 0 1em 0',
    padding: '0.5em',
  };
 
  return (
<div style={tableContainerStyle}>
<h3 style={headerStyle}>Taleplerim</h3>
<table style={tableStyle}>
<thead>
<tr>
<th style={thStyle}>Talep Türü</th>
<th style={thStyle}>Talep Tarihi</th>
<th style={thStyle}>Cevaplama Tarihi</th>
<th style={thStyle}>İzin Başlangıç</th>
<th style={thStyle}>İzin Bitiş</th>
<th style={thStyle}>Talep Durumu</th>
<th style={thStyle}>Gün Sayısı</th>
</tr>
</thead>
<tbody>
          {leaveRequests.map((request, index) => (
<tr key={index}>
<td style={tdStyle}>{request.type}</td>
<td style={tdStyle}>{request.requestDate}</td>
<td style={tdStyle}>{request.responseDate}</td>
<td style={tdStyle}>{request.startDate}</td>
<td style={tdStyle}>{request.endDate}</td>
<td style={tdStyle}>{request.status}</td>
<td style={tdStyle}>{request.dayCount}</td>
</tr>
          ))}
</tbody>
</table>
</div>
  );
};
 
// Örnek izin talepleri listesi
const leaveRequests = [
  { type: 'Yıllık İzin', requestDate: '2024-03-01', responseDate: '2024-03-02', startDate: '2024-03-05', endDate: '2024-03-10', status: 'Onaylandı', dayCount: 5 },
  { type: 'Mazeret İzni', requestDate: '2024-03-10', responseDate: 'Beklemede', startDate: '2024-03-15', endDate: '2024-03-16', status: 'Beklemede', dayCount: 1 },
];
 
// Bileşeni kullanım örneği
const LeaveRequestList = () => (
<div>
<LeaveRequestsTable leaveRequests={leaveRequests} />
</div>
);
 
export default LeaveRequestList;