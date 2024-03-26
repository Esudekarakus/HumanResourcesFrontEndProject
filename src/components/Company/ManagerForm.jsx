
import React, { useState } from 'react';
 
const ManagerForm = () => {
  // Form state'i
  const [manager, setManager] = useState({
    photo: null,
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    birthDate: '',
    birthPlace: '',
    tckn: '',
    startDate: '',
    endDate: '',
    isActive: true,
    jobTitle: '',
    department: '',
    company: '',
    companyEmail: '',
    address: '',
    phone: '',
    salary: '',
  });
 
  // Input değişikliklerini handle eden fonksiyon
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setManager({
      ...manager,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };
 
  // Form submit fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verisini işleme ve gönderme
    console.log(manager);
  };
 
  // İnline CSS stil tanımlamaları
  const styles = {
    container: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '20px',
      color: '#007bff', // Koyu mavi
    },
    form: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '20px',
      gridRowGap: '15px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: '5px',
    },
    submitButton: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
      padding: '10px 0',
      backgroundColor: '#007bff', // Mavi düğme
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    uploadButton: {
      gridColumnStart: '1',
      gridColumnEnd: '2',
      padding: '10px 15px',
      backgroundColor: '#6c757d', // Gri düğme
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '20px',
      textAlign: 'center',
      justifySelf:'start',//Butonu sol tarafa ekliyor
    },
    activeStatus:{
        display:'flex',
        alignItems:'center',
        gridColumnStart:'2',
        gridColumnEnd:'3',
        ustifySelf:'start',
    },
  };
 
  return (
<div style={styles.container}>
<h2 style={styles.header}>Yönetici Ekle</h2>
<form onSubmit={handleSubmit} style={styles.form}>
<div style={styles.uploadButton}>Fotoğraf Yükle
<input
            type="file"
            name="photo"
            onChange={handleChange}
            style={{ display: 'none' }}
          />
</div>
<div style={styles.activeStatus}>
<input
            style={styles.checkbox}
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={manager.isActive}
            onChange={handleChange}
          />
<label style={styles.label} htmlFor="isActive">Aktiflik Durumu</label>
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="firstName">Ad*</label>
<input
            style={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            value={manager.firstName}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="middleName">İkinci Ad</label>
<input
            style={styles.input}
            type="text"
            id="middleName"
            name="middleName"
            value={manager.middleName}
            onChange={handleChange}
          />
</div>
        {/* ... Diğer form elemanları aşağıda ... */}
        {/* Formu bitir ve submit düğmesini ekle */}
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="lastName">Soyad*</label>
<input
            style={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={manager.lastName}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="secondLastName">İkinci Soyad</label>
<input
            style={styles.input}
            type="text"
            id="secondLastName"
            name="secondLastName"
            value={manager.secondLastName}
            onChange={handleChange}
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="birthDate">Doğum Tarihi*</label>
<input
            style={styles.input}
            type="date"
            id="birthDate"
            name="birthDate"
            value={manager.birthDate}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="birthPlace">Doğum Yeri*</label>
<input
            style={styles.input}
            type="text"
            id="birthPlace"
            name="birthPlace"
            value={manager.birthPlace}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="tckn">TCKN*</label>
<input
            style={styles.input}
            type="text"
            id="tckn"
            name="tckn"
            value={manager.tckn}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="jobTitle">Meslek*</label>
<input
            style={styles.input}
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={manager.jobTitle}
            onChange={handleChange}
            required
	    />	
        </div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="startDate">İşe Giriş Tarihi</label>
<input
            style={styles.input}
            type="date"
            id="startDate"
            name="startDate"
            value={manager.startDate}
            onChange={handleChange}
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="endDate">İşten Çıkış Tarihi</label>
<input
            style={styles.input}
            type="date"
            id="endDate"
            name="endDate"
            value={manager.endDate}
            onChange={handleChange}
          />
</div>

<div style={styles.formGroup}>
<label style={styles.label} htmlFor="department">Departman*</label>
<input
            style={styles.input}
            type="text"
            id="department"
            name="department"
            value={manager.department}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="company">Şirket*</label>
<input
            style={styles.input}
            type="text"
            id="company"
            name="company"
            value={manager.company}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="companyEmail">Şirket Maili*</label>
<input
            style={styles.input}
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={manager.companyEmail}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="address">Adres*</label>
<textarea
            style={styles.input}
            id="address"
            name="address"
            value={manager.address}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="phone">Telefon*</label>
<input
            style={styles.input}
            type="tel"
            id="phone"
            name="phone"
            value={manager.phone}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="salary">Maaş</label>
<input
            style={styles.input}
            type="number"
            id="salary"
            name="salary"
            value={manager.salary}
            onChange={handleChange}
          />
        </div>

<button style={styles.submitButton} type="submit">Ekle</button>
</form>
</div>
  );
};
 
export default ManagerForm;