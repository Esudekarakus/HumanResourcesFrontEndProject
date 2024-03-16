// ForgotPass.jsx
 
import React, { useState } from 'react';
import axios from 'axios';
 
const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  const handleUpdatePassword = async () => {
    try {
      // API'ye şifre güncelleme isteği gönderme
      const response = await axios.put('https://localhost:7287/api/Account/ChangePassword', {
        email: email,
        password: newPassword,
        confirmPassword: confirmPassword,
      });
  
      
      console.log('Şifre başarıyla güncellendi:');
      alert("Şifre başarıyla güncellendi");
  
    } catch (error) {
     
      console.error('Şifre güncellenirken bir hata oluştu',error);
      alert("Şifre güncelleme hatası");
    }

    setEmail('');
    setVerificationCode('');
    setNewPassword('');
    setConfirmPassword('');
  };
 
  return (
<div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px', color: 'white' }}>
<h2 style={{ textAlign: 'center', color: '#2196F3' }}>Şifre Değiştirme</h2>
 
      <div style={{ margin: '20px 0' }}>
<label>Email:</label>
<input
          type="email"
          placeholder='Email Adresi *'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
</div>
 
      <div style={{ margin: '20px 0' }}>
<label>Gelen Kod:</label>
<input
          type="text"
          placeholder='Gelen kod *'
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="form-control"
        />
</div>
 
      <div style={{ margin: '20px 0' }}>
<label>Yeni Şifre:</label>
<input
          type="password"
          placeholder='Yeni Şifre *'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
        />
</div>
 
      <div style={{ margin: '20px 0' }}>
<label>Tekrar Yeni Şifre:</label>
<input
          type="password"
          placeholder='Yeni Şifre Tekrar *'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control"
        />
</div>
 
      <div style={{ textAlign: 'center' }}>
<button
          onClick={handleUpdatePassword}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
>
          Şifreyi Güncelle
</button>
</div>
</div>
  );
};
 
export default ForgotPass;