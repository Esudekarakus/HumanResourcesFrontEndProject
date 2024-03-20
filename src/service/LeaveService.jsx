// LeaveService.jsx

export async function getLeaveWithEmployee() {
    const response = await fetch('https://localhost:7287/api/leave');
    if (!response.ok) {
      throw new Error('Failed to fetch leave data with employee');
    }
    return response.json();
  }
  
  export async function getLeaveByEmployeeId(employeeId) {
    const response = await fetch(`https://localhost:7287/api/leave/${employeeId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch leave data for employee ${employeeId}`);
    }
    return response.json();
  }
  
  export async function createLeave(leaveData) {
    const response = await fetch('https://localhost:7287/api/leave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leaveData),
    });
    if (!response.ok) {
      throw new Error('Failed to create leave');
    }
    return response.json();
  }
  
  export async function removeLeave(leaveId) {
    const response = await fetch(`https://localhost:7287/api/leave/${leaveId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to remove leave with ID ${leaveId}`);
    }
    return response.json();
  }
  
  export async function updateLeave(leaveId, leaveData) {
    const response = await fetch(`https://localhost:7287/api/leave/${leaveId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leaveData),
    });
    if (!response.ok) {
      throw new Error(`Failed to update leave with ID ${leaveId}`);
    }
    return response.json();
  }
  