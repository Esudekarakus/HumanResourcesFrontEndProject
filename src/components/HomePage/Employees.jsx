// Employees.js
import React from "react";

function Employees() {
  // Örnek çalışan listesi
  const employees = [
    { id: 1, name: "Charlie Davis" },
    { id: 2, name: "Dana Ellis" },
  ];

  return (
    <div>
      <h2>Çalışanlar</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;