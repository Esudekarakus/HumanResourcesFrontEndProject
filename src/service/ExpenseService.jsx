export async function getExpenseWithEmployee() {
    const response = await fetch('https://localhost:7287/api/Expense');
    if (!response.ok) {
      throw new Error('Failed to fetch leave data with employee');
    }
    return response.json();
  }

  export async function getExpensesByEmployeeId(employeeId) {
    const response = await fetch(`https://localhost:7287/api/Expense/id?id=${employeeId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch advances for employee ${employeeId}`);
    }
    return response.json();
  }