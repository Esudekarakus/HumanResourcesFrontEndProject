import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import {getExpenseWithEmployee} from '../../service/ExpenseService';
 

const styles = {
  card: {
    backgroundColor: '#f0faff',
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
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
  },
  buttonApprove: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgreen',
    },
    margin: '5px',
  },
  buttonReject: {
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkred',
    },
    margin: '5px',
  },
};

function ExpenseScreen() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getExpenseWithEmployee();
        setExpenses(response.result);
      } catch (error) {
        console.error('İzin talepleri yüklenirken bir hata oluştu:', error);
      }
    }

    fetchData();
  }, []);

  const updateExpenseStatus = async (expenseId, newStatus) => {
    console.log(`Updating status for expenseId: ${expenseId} with newStatus: ${newStatus}`);
    const url = `https://localhost:7287/api/expense/${expenseId}`;
    console.log(`Request URL: ${url}`);
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: expenseId, approvalStatus: newStatus }),
        
      });

      if (!response.ok) {
        throw new Error('Durum güncelleme başarısız');
      }

      // API çağrısı başarılıysa, liste güncellenir
      const updatedList = expenses.map(request => {
        if (request.id === expenseId) {
          return { ...request, approvalStatus: newStatus };
        }
        return request;
      });
      alert(`Harcama talebi ID: ${expenseId} başarıyla güncellendi.`);
      setLeaveRequests(updatedList);
    } catch (error) {
      console.error('İzin durumu güncellenirken bir hata oluştu:', error);
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.header}> Masraf Talep Onay Ekranı</h2>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell style={styles.th}>Ad</TableCell>
            <TableCell style={styles.th}>Soyad</TableCell>
            <TableCell style={styles.th}>Talep Edilen Miktar</TableCell>
            <TableCell style={styles.th}>Açıklama</TableCell>
            <TableCell style={styles.th}>Talep Türü</TableCell>
            <TableCell style={styles.th}>Talep Tarihi</TableCell>
            
            <TableCell style={styles.th}>İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell style={styles.td}>{expense.employeeName}</TableCell>
              <TableCell style={styles.td}>{expense.employeeLastName}</TableCell>
              <TableCell style={styles.td}>{expense.amount}</TableCell>
              <TableCell style={styles.td}>{expense.description}</TableCell>
              <TableCell style={styles.td}>{expense.expenseType}</TableCell>
              <TableCell style={styles.td}>{expense.createdDate}</TableCell>
            
              <TableCell>
                <Button style={styles.buttonApprove} onClick={() => updateExpenseStatus(expense.id, 2)}>Onayla</Button>
                <Button style={styles.buttonReject} onClick={() => updateExpenseStatus(expense.id, 3)}>Reddet</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ExpenseScreen;
