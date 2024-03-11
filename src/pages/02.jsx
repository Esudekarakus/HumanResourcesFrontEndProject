import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Page02 = () => {
  const { id } = useParams(); // react-router-dom'un useParams hook'u ile URL'den gelen ID'yi al

  const [employerDetails, setEmployerDetails] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    address: '',
    phoneNumber: '',
    
  });

  const fetchEmployerDetails = async () => {
    try {
      const response = await fetch(`https://localhost:7287/api/Employer/GetEmployerWithCompanyById?id=${id}`);
      const data = await response.json();
      setEmployerDetails(data);
    } catch (error) {
      console.error('İşveren detaylarını getirme hatası:', error);
    }
  };

  useEffect(() => {
    // URL'den gelen ID'yi kullanarak API'den işveren detaylarını çek
    if (id) {
      fetchEmployerDetails();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://localhost:7287/api/Employer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(id), // JSON verisine id'yi ekleyin ve integer'a çevirin
          ...updatedInfo,
        }),
      });

      if (response.ok) {
        // Başarılı durumu
        console.log('İşveren bilgileri başarıyla güncellendi');
        // Güncelleme işlemi başarılıysa, detayları tekrar çekerek sayfayı güncelle
        fetchEmployerDetails();
      } else {
        console.error('İşveren bilgilerini güncelleme hatası:', response.statusText);
      }
    } catch (error) {
      console.error('İşveren bilgilerini güncelleme hatası:', error);
    }
  };

  if (!employerDetails) {
    return <p>İşveren detayları yükleniyor...</p>;
  }

  return (
    <section>
      <h2>Şirket Yönetici Detayları</h2>
      <p>
        İşveren Adı: {employerDetails.name} <br />
        Soyadı: {employerDetails.lastName} <br />
        E-posta: {employerDetails.email} <br />
        Telefon Numarası: {employerDetails.phoneNumber} <br />
        Adres: {employerDetails.address} <br />
        Meslek: {employerDetails.profession} <br />
        Şirket Adı: {employerDetails.companyName} <br />
      </p>

      {/* Güncelleme Formu */}
      <h3>Bilgileri Güncelle</h3>
      <label>
        Adres:
        <input type="text" name="address" value={updatedInfo.address} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Telefon Numarası:
        <input type="text" name="phoneNumber" value={updatedInfo.phoneNumber} onChange={handleInputChange} />
      </label>
      {/* Diğer güncellenecek alanlar için benzer şekilde inputlar ekleyin */}
      <br />
      <button onClick={handleUpdate}>Güncelle</button>
    </section>
  );
};

export default Page02;