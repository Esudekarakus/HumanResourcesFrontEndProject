import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, InputAdornment, IconButton, FormControl, InputLabel, Input, Grid, Typography } from '@material-ui/core';
import { AttachFile as AttachFileIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  formContainer: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#e3f2fd',
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  fileInput: {
    display: 'none',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: '#bbdefb',
  },
}));
 
function ExpenseForm() {
  const classes = useStyles();
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
<div>
<Paper className={classes.formContainer}>
<Typography variant="h6">Harcama Talep Formu</Typography>
<form onSubmit={handleSubmit}>
<TextField label="Harcama Türü" value={expenseType} onChange={(e) => setExpenseType(e.target.value)} fullWidth margin="normal" />
<TextField label="Tutar" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" InputProps={{
            endAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }} />
<TextField label="Para Birimi" value={currency} onChange={(e) => setCurrency(e.target.value)} fullWidth margin="normal" />
<input accept=".pdf,.xls,.xlsx" className={classes.fileInput} id="contained-button-file" multiple type="file" onChange={handleFileChange} />
<label htmlFor="contained-button-file">
<Button variant="contained" color="default" component="span" startIcon={<AttachFileIcon />}>
              Dosya Ekle
</Button>
</label>
<Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
            Talep Ekle
</Button>
</form>
</Paper>
<TableContainer component={Paper} className={classes.tableContainer}>
<Table>
<TableHead>
<TableRow>
<TableCell>Harcama Türü</TableCell>
<TableCell align="right">Tutar</TableCell>
<TableCell align="right">Para Birimi</TableCell>
<TableCell align="right">Dosya</TableCell>
</TableRow>
</TableHead>
<TableBody>
            {expenses.map((expense, index) => (
<TableRow key={index}>
<TableCell component="th" scope="row">
                  {expense.expenseType}
</TableCell>
<TableCell align="right">{expense.amount}</TableCell>
<TableCell align="right">{expense.currency}</TableCell>
<TableCell align="right">{expense.file ? expense.file.name : 'Yok'}</TableCell>
</TableRow>
            ))}
</TableBody>
</Table>
</TableContainer>
</div>
  );
}
 
export default ExpenseForm;