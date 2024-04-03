import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

const LeaveRequestForm = () => {
  const [leaveType, setLeaveType] = useState('0'); // Başlangıç değeri olarak '0' (seçim yapılmadı)
  const [leaveDate, setLeaveDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Sabit bir EmployeeId değeri kullanılacak
  // Gerçek uygulamada bu değer dinamik olarak kullanıcı oturum bilgisinden alınmalıdır.
  const [personalIdRole, setPersonalIdRole] = useState({ personalId: '', personalRole: '' });

  const personalId = useSelector((state) => state.userDetails.personalId);
  const personalRole = useSelector((state) => state.auth.role);

  useEffect(() => {
    // burada ikisinide bir use state ile tuttum buradan alıp kullanılabilir.
    setPersonalIdRole({ personalId, personalRole });
  }, [personalId, personalRole]);

  // denemeler.
  console.log(personalIdRole.personalId);
  console.log(personalIdRole.personalRole);
  const employeeId = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API endpoint'inizi buraya yazın
    const apiUrl = 'https://localhost:7287/api/leave';
    const leaveData = {
      Type: parseInt(leaveType, 10), // Backend'in beklediği int türünde
      LeaveDate: leaveDate,
      DueDate: dueDate,
      Description: description,
      NumberOfDays: (new Date(dueDate).getTime() - new Date(leaveDate).getTime()) / (1000 * 3600 * 24), // Otomatik hesaplama
      EmployeeId: personalId,
    };

    try {
      const response = await fetch('https://localhost:7287/api/leave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leaveData),
      });

      if (response.ok) {
        setSuccessMessage('Talebiniz işleme alınmıştır');
        setTimeout(() => setSuccessMessage(''), 4000);
      }
      else{
        
      }

    
      // Formu sıfırla
      setLeaveType('0');
      setLeaveDate('');
      setDueDate('');
      setDescription('');
    } catch (error) {
      console.error('Error during the request:', error);
      alert(error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0faff', border: '1px solid #007bff', borderRadius: '8px', padding: '20px', maxWidth: '500px', margin: '20px auto', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#007bff' }}>Leave Request Form</h2>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>Leave Type</label>
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', marginBottom: '10px' }} required>
            <option value="0">Select Leave Type</option>
            <option value="1">Annual</option>
            <option value="2">Maternity</option>
            <option value="3">Paternity</option>
            <option value="4">Bereavement</option>
            <option value="5">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>Start Date</label>
          <input type="date" value={leaveDate} onChange={(e) => setLeaveDate(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', marginBottom: '10px' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>End Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', marginBottom: '10px' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#0056b3' }}>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', marginBottom: '10px' }} required />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit Request</button>
      </form>
      <br />
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default LeaveRequestForm;
