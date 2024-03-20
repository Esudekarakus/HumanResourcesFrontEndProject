import React, { useState } from 'react';
 
const styles = {
  card: {
    backgroundColor: '#f0faff', // Açık mavi arka plan
    border: '1px solid #007bff', // Mavi çerçeve
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#007bff', // Mavi başlık metni
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#0056b3', // Daha koyu mavi metin
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
    backgroundColor: '#007bff', // Mavi buton
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
 
const AdvanceRequestForm = ({ userSalary = 10000, lastAdvanceRequest = 20000 }) => {
  const [requestDate, setRequestDate] = useState('');
  const [advanceAmount, setAdvanceAmount] = useState('');
  const [currency, setCurrency] = useState('TRY');
  const [description, setDescription] = useState('');
  const [advanceType, setAdvanceType] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('pending');
  const [responseDate, setResponseDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const maxAdvanceAmount = userSalary * 3;
  const remainingAdvanceLimit = maxAdvanceAmount - lastAdvanceRequest;
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(advanceAmount) > remainingAdvanceLimit) {
      setErrorMessage(`Maksimum talep edilebilecek avans miktarı: ${remainingAdvanceLimit} TL`);
      return;
    }
 
    console.log({ requestDate, advanceAmount, currency, description, advanceType, approvalStatus, responseDate });
    alert('Avans talebi gönderildi.');
 
    setRequestDate('');
    setAdvanceAmount('');
    setCurrency('TRY');
    setDescription('');
    setAdvanceType('');
    setApprovalStatus('pending');
    setResponseDate('');
    setErrorMessage('');
  };
 
  return (
<div style={styles.card}>
<form onSubmit={handleSubmit}>
<h2 style={styles.header}>Avans Talep Formu</h2>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
<div style={styles.formGroup}>
<label style={styles.label}>Talep Tarihi:</label>
<input
            style={styles.input}
            type="date"
            value={requestDate}
            onChange={(e) => setRequestDate(e.target.value)}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label}>Avans Tutarı:</label>
<input
            style={styles.input}
            type="number"
            value={advanceAmount}
            onChange={(e) => setAdvanceAmount(e.target.value)}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label}>Para Birimi:</label>
<select
            style={styles.select}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
>
<option value="TRY">Türk Lirası (TRY)</option>
<option value="USD">Amerikan Doları (USD)</option>
<option value="EUR">Euro (EUR)</option>
</select>
</div>
<div style={styles.formGroup}>
<label style={styles.label}>Açıklama:</label>
<textarea
            style={styles.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
></textarea>
</div>
<div style={styles.formGroup}>
<label style={styles.label}>Avans Türü:</label>
<select
            style={styles.select}
            value={advanceType}
            onChange={(e) => setAdvanceType(e.target.value)}
            required
>
<option value="">Seçiniz</option>
<option value="personal">Kişisel</option>
<option value="medical">Sağlık</option>
<option value="travel">Seyahat</option>
</select>
</div>

<div style={styles.formGroup}>
<label style={styles.label}>Cevaplanma Tarihi:</label>
<input
            style={styles.input}
            type="date"
            value={responseDate}
            onChange={(e) => setResponseDate(e.target.value)}
          />
</div>
<button type="submit" style={styles.submitButton}>Talep Et</button>
</form>
</div>
  );
};
 
export default AdvanceRequestForm;


