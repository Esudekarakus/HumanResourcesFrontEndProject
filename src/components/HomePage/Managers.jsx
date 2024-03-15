// Managers.js
import React from "react";

function Managers() {
  // Örnek yönetici listesi
  const managers = [
    { id: 1, name: "Jane Doe", position: "IT Müdürü" },
    { id: 2, name: "John Smith", position: "Finans Müdürü" },
  ];

  return (
    <div>
      <h2>Yöneticiler</h2>
      <ul>
        {managers.map((manager) => (
          <li key={manager.id}>{manager.name} - {manager.position}</li>
        ))}
      </ul>
    </div>
  );
}

export default Managers;
