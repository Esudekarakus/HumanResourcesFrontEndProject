// src/components/EmployerList.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await fetch('https://localhost:7287/api/Employer/GetEmployerWithCompany');
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.error('İşverenleri getirme hatası:', error);
      }
    };

    fetchEmployers();
  }, []);

  const handleDetailButtonClick = (employerId) => {
    window.location.href = `/employer-details/${employerId}`;
  };

  return (
    <section>
      <h2>İşveren Listesi</h2>
      <ul>
        {employers.map((employer) => (
          <li key={employer.id}>
            {employer.name} - {employer.lastName} - {employer.email} - {employer.phoneNumber} - {employer.address} - {employer.profession} - {employer.companyName}
            <button onClick={() => handleDetailButtonClick(employer.id)}>Detayları Göster</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EmployerList;