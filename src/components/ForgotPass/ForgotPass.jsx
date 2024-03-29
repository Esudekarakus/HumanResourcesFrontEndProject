import { useState, } from 'react';
import { ChangePassword, VerifyCode } from '../../service/AccountService';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const [privateMail, setPrivateMail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [codeDirectionInput, setCodeDirectionInput] = useState(false);
  const [showSuccessLabel, setShowSuccessLabel] = useState(false);


  const handleVerifyCode = async () => {
    try {
      console.log(verificationCode);
      console.log(privateMail);
      console.log(email);
      console.log(confirmPassword);
      const verifyCode = await VerifyCode(verificationCode, privateMail, email, newPassword, confirmPassword);
      if (verifyCode) {
        setShowSuccessLabel(true);
        setEmail('');
        setVerificationCode('');
        setNewPassword('');
        setConfirmPassword('');
        setPrivateMail('');
        setOldPassword('');
      }


    } catch (error) {
      console.error('Şifre güncellenirken bir hata oluştu', error);
      setErrorMessage(error.message);
    }
  }


  const handleUpdatePassword = async () => {
    try {
      const result = await ChangePassword(email, privateMail, newPassword, confirmPassword);
      if (result) {
        setShowVerificationInput(true);
        setCodeDirectionInput(true);
      }
    } catch (error) {
      console.error('Şifre güncellenirken bir hata oluştu', error);
      setErrorMessage(error.message);
    }


  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px', color: 'white' }}>
      <h2 style={{ textAlign: 'center', color: '#2196F3' }}>Şifre Değiştirme</h2>
      {codeDirectionInput && (
        <>
          <div style={{ margin: '20px 0' }}>
            <label>Mailinizi kontrol ederek aşağıya kodu giriniz..</label>
          </div>
        </>
      )}

      <div style={{ margin: '20px 0' }}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email Adresi *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Private Mail:</label>
        <input
          type="email"
          placeholder="Private Email Adresi *"
          value={privateMail}
          onChange={(e) => setPrivateMail(e.target.value)}
          className="form-control"
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Eski Şifre</label>
        <input
          type="password"
          placeholder="Eski Şifre *"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="form-control"
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Yeni Şifre:</label>
        <input
          type="password"
          placeholder="Yeni Şifre *"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
        />
      </div>

      <div style={{ margin: '20px 0' }}>
        <label>Tekrar Yeni Şifre:</label>
        <input
          type="password"
          placeholder="Yeni Şifre Tekrar *"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control"
        />

        {showVerificationInput && (
          <>
            <div style={{ margin: '20px 0' }}>
              <label>Gelen Kod:</label>
              <input
                type="text"
                placeholder="Gelen kod *"
                value={verificationCode.toString()}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="form-control" />

              <button
                onClick={handleVerifyCode}
                style={{
                  backgroundColor: '#2196F3',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Kodu onayla
              </button>
            </div>
          </>
        )}

        {showSuccessLabel && (
          <>
            <div style={{ margin: '20px 0' }}>
              <label>Şifre Değiştirme işlemi başarılı.</label>
              <Link
                to="/SignIn"
                style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
              >
                Giriş Ekranına Gider..
              </Link>
            </div>
          </>
        )}

      </div>

      {errorMessage && <div style={{ color: 'red', margin: '10px 0' }}>{errorMessage}</div>}

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
