<<<<<<< HEAD
import React, { useState } from 'react';
import { ChangePassword } from '../../service/AccountService'; // AccountService'ten ChangePassword fonksiyonunu içeri aktarın

=======
// ForgotPass.jsx
 
import React, { useState } from 'react';
import axios from 'axios';
 
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdatePassword = async () => {
    try {
      // Şifre değiştirme isteği için ChangePassword fonksiyonunu çağırın
      await ChangePassword(email, newPassword, confirmPassword);

      console.log('Şifre başarıyla güncellendi');
      alert('Şifre başarıyla güncellendi');
    } catch (error) {
      console.error('Şifre güncellenirken bir hata oluştu', error);
      // API'den gelen hata mesajını al ve kullanıcıya göster
      setErrorMessage(error.message);
    }

    // Alanları temizle
=======
 
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

>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
    setEmail('');
    setVerificationCode('');
    setNewPassword('');
    setConfirmPassword('');
  };
<<<<<<< HEAD

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px', color: 'white' }}>
      <h2 style={{ textAlign: 'center', color: '#2196F3' }}>Şifre Değiştirme</h2>

      <div style={{ margin: '20px 0' }}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email Adresi *"
=======
 
  return (
<div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px', color: 'white' }}>
<h2 style={{ textAlign: 'center', color: '#2196F3' }}>Şifre Değiştirme</h2>
 
      <div style={{ margin: '20px 0' }}>
<label>Email:</label>
<input
          type="email"
          placeholder='Email Adresi *'
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
<<<<<<< HEAD
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Gelen Kod:</label>
        <input
          type="text"
          placeholder="Gelen kod *"
=======
</div>
 
      <div style={{ margin: '20px 0' }}>
<label>Gelen Kod:</label>
<input
          type="text"
          placeholder='Gelen kod *'
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="form-control"
        />
<<<<<<< HEAD
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Yeni Şifre:</label>
        <input
          type="password"
          placeholder="Yeni Şifre *"
=======
</div>
 
      <div style={{ margin: '20px 0' }}>
<label>Yeni Şifre:</label>
<input
          type="password"
          placeholder='Yeni Şifre *'
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
        />
<<<<<<< HEAD
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Tekrar Yeni Şifre:</label>
        <input
          type="password"
          placeholder="Yeni Şifre Tekrar *"
=======
</div>
 
      <div style={{ margin: '20px 0' }}>
<label>Tekrar Yeni Şifre:</label>
<input
          type="password"
          placeholder='Yeni Şifre Tekrar *'
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control"
        />
<<<<<<< HEAD
      </div>

      {/* Hata mesajını göstermek için */}
      {errorMessage && <div style={{ color: 'red', margin: '10px 0' }}>{errorMessage}</div>}

      <div style={{ textAlign: 'center' }}>
        <button
=======
</div>
 
      <div style={{ textAlign: 'center' }}>
<button
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
          onClick={handleUpdatePassword}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
<<<<<<< HEAD
        >
          Şifreyi Güncelle
        </button>
      </div>
    </div>
  );
};

export default ForgotPass;

=======
>
          Şifreyi Güncelle
</button>
</div>
</div>
  );
};
 
export default ForgotPass;
>>>>>>> c6a139a3f12d257b860310ef08b123ad23a3e073
