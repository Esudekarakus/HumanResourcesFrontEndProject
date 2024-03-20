import React, { useState } from 'react';
 
const LeaveRequestForm = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [requestDate, setRequestDate] = useState(new Date().toISOString().split('T')[0]);
 
  const formStyles = {
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
  };
 
  const titleStyles = {
    textAlign: 'center',
    color: '#007bff',
  };
 
  const formGroupStyles = {
    marginBottom: '15px',
  };
 
  const labelStyles = {
    display: 'block',
    marginBottom: '5px',
  };
 
  const inputSelectStyles = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #007bff',
  };
 
  const buttonStyles = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
 
  const handleLeaveTypeChange = (event) => {
    const type = event.target.value;
    setLeaveType(type);
    if (type === 'Maternity' || type === 'Paternity' || type === 'Bereavement') {
      let newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() + 10);
      setEndDate(newEndDate.toISOString().split('T')[0]);
    }
  };
 
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    if (leaveType === 'Maternity' || leaveType === 'Paternity' || leaveType === 'Bereavement') {
      let newEndDate = new Date(event.target.value);
      newEndDate.setDate(newEndDate.getDate() + 10);
      setEndDate(newEndDate.toISOString().split('T')[0]);
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('İzin Talebi Gönderildi');
  };
 
  return (
<div style={formStyles}>
<form onSubmit={handleSubmit}>
<h2 style={titleStyles}>İzin Talep Formu</h2>
<div style={formGroupStyles}>
<label htmlFor="leaveType" style={labelStyles}>İzin Türü</label>
<select id="leaveType" value={leaveType} onChange={handleLeaveTypeChange} required style={inputSelectStyles}>
<option value="">Seçiniz</option>
<option value="Annual">Yıllık İzin</option>
<option value="Maternity">Annelik İzni</option>
<option value="Paternity">Babalık İzni</option>
<option value="Bereavement">Yas İzni</option>
<option value="Other">Diğer</option>
</select>
</div>
<div style={formGroupStyles}>
<label htmlFor="startDate" style={labelStyles}>Başlangıç Tarihi</label>
<input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} required style={inputSelectStyles} />
</div>
<div style={formGroupStyles}>
<label htmlFor="endDate" style={labelStyles}>Bitiş Tarihi</label>
<input type="date" id="endDate" value={endDate} disabled={leaveType !== 'Annual' && leaveType !== 'Other'} required style={inputSelectStyles} />
</div>
<div style={formGroupStyles}>
<label htmlFor="requestDate" style={labelStyles}>Talep Tarihi</label>
<input type="date" id="requestDate" value={requestDate} readOnly style={inputSelectStyles} />
</div>
<button type="submit" style={buttonStyles}>Talep Gönder</button>
</form>
</div>
  );
};
 
export default LeaveRequestForm;