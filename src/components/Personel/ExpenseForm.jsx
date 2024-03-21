import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, InputAdornment, IconButton, FormControl, InputLabel, Input, Grid, Typography } from '@material-ui/core';
import { AttachFile as AttachFileIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
 
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
 
function ExpenseForm() {
  const [expenses, setExpenses] = useState([]);
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [file, setFile] = useState(null);
 
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      expenseType,
      amount,
      currency,
      file, // Normally you would handle file uploads differently
    };
    setExpenses([...expenses, newExpense]);
    setExpenseType('');
    setAmount('');
    setCurrency('');
    setFile(null);
  };
 
  return (
<div style={styles.card}>
<form onSubmit={handleSubmit}>
<h2 style={styles.header}>Masraf Talep Formu</h2>
 
<div style={styles.formGroup}>
   <label style={styles.label}>Masraf Türü:</label>
   <input value={expenseType} onChange={(e) => setExpenseType(e.target.value)} fullWidth margin="normal" />
</div>
 
<div style={styles.formGroup}>
<label style={styles.label}>Tutar:</label>
<input value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" InputProps={{
            endAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }} />
</div>
 
<div style={styles.formGroup}>
<label style={styles.label}>Para Birimi:</label>

<input value={currency} onChange={(e) => setCurrency(e.target.value)} fullWidth margin="normal" />

</div>
<input accept=".pdf,.xls,.xlsx" className={styles.AttachFile} id="contained-button-file" multiple type="file" onChange={handleFileChange} />
 <br />
{/* <label >
<Button variant="contained" color="default" component="span" startIcon={<AttachFileIcon />} multiple type="file" onChange={handleFileChange} accept=".pdf,.xls,.xlsx">
              Dosya Ekle
</Button>
</label> */}
<br />
<Button type="submit" variant="contained" color="primary" className={styles.submitButton}>
            Talep Ekle
</Button>
</form>
<table>
<thead>
<tr>
<td>Masraf Türü</td>
<td align="right">Tutar</td>
<td align="right">Para Birimi</td>
<td align="right">Dosya</td>
</tr>
</thead>
<tbody>
            {expenses.map((expense, index) => (
<tr key={index}>
<td component="th" scope="row">
                  {expense.expenseType}
</td>
<td align="right">{expense.amount}</td>
<td align="right">{expense.currency}</td>
<td align="right">{expense.file ? expense.file.name : 'Yok'}</td>
</tr>
            ))}
</tbody>
</table>
</div>
  );
}
 
export default ExpenseForm;