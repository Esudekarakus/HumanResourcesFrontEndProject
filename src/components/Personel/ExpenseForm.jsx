import React, { useState } from 'react';
import { Button, Input, InputAdornment, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const id =1;
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#f0faff',
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#007bff',
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#0056b3',
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
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}));

function ExpenseForm() {
  const classes = useStyles();
  const [expenses, setExpenses] = useState([]);
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [invoicePath, setInvoicePath] = useState('');


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'expenseType') {
      setExpenseType(value);
    } else if (name === 'currency') {
      setCurrency(value);
    }else if (name === 'amount') {
    const doubleAmount = parseFloat(value);
    setAmount(doubleAmount);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'invoicePath') {
      setInvoicePath(value);
    }
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append('description',description);
    formData.append('currency', currency);
    formData.append('expenseType', expenseType);
    formData.append('invoicePath',invoicePath);
    formData.append('amount', amount);
    formData.append('employeeId',id);
    formData.append('formFile', file);
    
  
    try {
      console.log(formData);
      const response = await fetch('https://localhost:7287/api/Expense', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Expense submitted successfully:', responseData);
        // İşlem başarılı olduğunda gerekli adımları burada gerçekleştirin
      } else {
        console.error('Error submitting expense:', response.statusText);
        // İşlem başarısız olduğunda gerekli adımları burada gerçekleştirin
      }
    } catch (error) {
      console.error('Error submitting expense:', error.message);
      // Hata durumunda gerekli adımları burada gerçekleştirin
    }
  
    // Formu temizle
    setExpenseType('');
    setAmount('');
    setCurrency('');
    setFile(event.target.files[0]);
  };

  return (
    <div className={classes.card}>
      <form onSubmit={handleSubmit}>
        <h2 className={classes.header}>Masraf Talep Formu</h2>
        <div className={classes.formGroup}>
          <label className={classes.label}>Masraf Türü:</label>
          <Select
            name="expenseType"
            value={expenseType}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className={classes.select}
          >
            <MenuItem value={1}>Konut</MenuItem>
            <MenuItem value={2}>Seyahat</MenuItem>
            <MenuItem value={3}>Gıda İhtiyaçları</MenuItem>
            <MenuItem value={4}>Malzemeler</MenuItem>
            <MenuItem value={5}>Eğitim</MenuItem>
            <MenuItem value={6}>Sağlık</MenuItem>
            <MenuItem value={7}>Yakıt</MenuItem>
            <MenuItem value={8}>Diğer</MenuItem>
          </Select>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label}>Tutar:</label>
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
           
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label}>Para Birimi:</label>
          <Select
            name="currency"
            value={currency}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className={classes.select}
          >
            <MenuItem value={1}>TL</MenuItem>
            <MenuItem value={2}>USD</MenuItem>
            <MenuItem value={3}>EUR</MenuItem>
          </Select>
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Açıklama :</label>
          <Input
            name="description"
            value={description}
            onChange={handleChange}
            fullWidth
            margin="normal"
           
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Fatura Numarası : </label>
          <Input
            name='invoicePath'
            value={invoicePath}
            onChange={handleChange}
            fullWidth
            margin="normal"
           
            className={classes.input}
          />
        </div>
        <input
          accept=".pdf,.xls,.xlsx"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleFileChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
          Talep Gönder
        </Button>
      </form>
    </div>
  );
}

export default ExpenseForm;
