import React, { useState, useEffect } from "react";
import { fetchEmployers } from '../../service/EmployerService';

function Managers() {
  const [managers, setManagers] = useState([]); // Yönetici listesi için state tanımlayın

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const data = await fetchEmployers(); // API'den verileri al
        setManagers(data); // Yönetici listesi state'ini güncelle
      } catch (error) {
        console.error("Yönetici verileri alınırken bir hata oluştu:", error);
      }
    };

    fetchManagers(); // useEffect çağrıldığında yönetici verilerini getir
  }, []); // [] geçerek sadece bir kere çağrılmasını sağla, eğer bir değişiklikten etkilenmemesi gerekiyorsa.

  return (
    <div>
      <h2>Yöneticiler</h2>
      <ul>
        {managers.map((manager) => (
          <li key={manager.Id}>
            {manager.name} - {manager.profession}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Managers;
