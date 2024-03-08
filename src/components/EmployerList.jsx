// src/components/EmployerList.jsx

import React, { useState, useEffect } from 'react';

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await fetch('https://hrprojectapi.azure-api.net/');
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.error('İşverenleri getirme hatası:', error);
      }
    };

    fetchEmployers();
  }, []);

  return (
    <section>
      <h2>İşveren Listesi</h2>
      <ul>
        {employers.map((employer) => (
          <li key={employer.id}>
            {employer.name} - {employer.profession}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EmployerList;
