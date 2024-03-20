// AdvanceService.jsx

export async function getAdvanceWithEmployee() {
    const response = await fetch('https://localhost:7287/api/advance');
    if (!response.ok) {
      throw new Error('Failed to fetch advance data with employee');
    }
    return response.json();
  }
  
  export async function getAdvancesByEmployeeId(employeeId) {
    const response = await fetch(`https://localhost:7287/api/advance/${employeeId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch advances for employee ${employeeId}`);
    }
    return response.json();
  }
  
  export async function createAdvance(advanceData) {
    const response = await fetch('https://localhost:7287/api/advance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(advanceData),
    });
    if (!response.ok) {
      throw new Error('Failed to create advance');
    }
    return response.json();
  }
  
  export async function removeAdvance(advanceId) {
    const response = await fetch(`https://localhost:7287/api/advance/${advanceId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to remove advance with ID ${advanceId}`);
    }
    return response.json();
  }
  
  export async function updateAdvance(advanceId, advanceData) {
    const response = await fetch(`https://localhost:7287/api/advance/${advanceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(advanceData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update advance with ID ${advanceId}`);
    }
    return response.json();
  }
  