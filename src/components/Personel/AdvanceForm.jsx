import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

const styles = {
  card: {
    backgroundColor: '#f0faff', // Light blue background
    border: '1px solid #007bff', // Blue border
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#007bff', // Blue header text
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#0056b3', // Darker blue text
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '0 0 10px 0',
    borderRadius: '4px',
    border: '1px solid #007bff',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #007bff',
    marginBottom: '10px',
  },
  submitButton: {
    backgroundColor: '#007bff', // Blue button
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '15px',
  },
};

const AdvanceRequestForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('1');
  const [description, setDescription] = useState('');
  const [advanceType, setAdvanceType] = useState('1');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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



  const handleSubmit = async (e) => {
    e.preventDefault();
    const advanceData = {
      Description: description,
      Currency: parseInt(currency, 10),
      AdvanceType: parseInt(advanceType, 10),
      Amount: parseFloat(amount),
      EmployeeId: personalId, // Assuming a fixed value for simplicity
    };

    try {
      await createAdvance(advanceData);
      
      // Reset the form
      setAmount('');
      setCurrency('1');
      setDescription('');
      setAdvanceType('1');
      setErrorMessage('');
    } catch (error) {
      console.error('Request error:', error);
      setErrorMessage(error.message || 'An error occurred, please try again later.');
    }
  };

  async function createAdvance(advanceData) {
    try {
      const response = await fetch('https://localhost:7287/api/advance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(advanceData),
      });

      if (response.ok) {
        setSuccessMessage('Talebiniz işleme alınmıştır');
        setTimeout(() => setSuccessMessage(''), 4000);
        
      }
      else{
        alert('İşlem başarısız')
      }

     
    } catch (error) {
      console.error('Error during the request:', error);
      throw error;
    }
  }

  return (
    <div style={styles.card}>
      
      <form onSubmit={handleSubmit}>
        <h2 style={styles.header}>Avans Talep Form</h2>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <div style={styles.formGroup}>
          <label style={styles.label}>Talep Edilen Miktar:</label>
          <input style={styles.input} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Döviz:</label>
          <select style={styles.select} value={currency} onChange={(e) => setCurrency(e.target.value)} required>
            <option value="1">Turkish Lira (TL)</option>
            <option value="2">US Dollar (USD)</option>
            <option value="3">Euro (EUR)</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Açıklama:</label>
          <textarea style={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Avans Türü:</label>
          <select style={styles.select} value={advanceType} onChange={(e) => setAdvanceType(e.target.value)} required>
            <option value="1">Personal</option>
            <option value="2">Health</option>
            <option value="3">Travel</option>
          </select>
        </div>
        <button type="submit" style={styles.submitButton}>Submit Request</button>
      </form>
      <br/>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default AdvanceRequestForm;
