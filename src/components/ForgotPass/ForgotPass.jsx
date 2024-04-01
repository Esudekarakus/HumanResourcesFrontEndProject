import { useState } from "react";
import { ChangePassword, VerifyCode } from "../../service/AccountService";
import { Link } from "react-router-dom";
import backgroundImage from "/images/clean-2721104_1280.jpg";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [privateMail, setPrivateMail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [codeDirectionInput, setCodeDirectionInput] = useState(false);
  const [showSuccessLabel, setShowSuccessLabel] = useState(false);

  const handleVerifyCode = async () => {
    try {
      console.log(verificationCode);
      console.log(privateMail);
      console.log(email);
      console.log(confirmPassword);
      const verifyCode = await VerifyCode(
        verificationCode,
        privateMail,
        email,
        newPassword,
        confirmPassword
      );
      if (verifyCode.status===200) {
        setShowSuccessLabel(true);
        setEmail("");
        setVerificationCode("");
        setNewPassword("");
        setConfirmPassword("");
        setPrivateMail("");
        setOldPassword("");
        setErrorMessage([]);
      }else{
        if (result.data && result.data.errors&&result===400) {
          console.log(result);
          setErrorMessage(result.data);
      }else{
        setErrorMessage("An error occurred. Please try again.");
      }
    }
    } catch (error) {
      console.error("Şifre güncellenirken bir hata oluştu", error);
      setErrorMessage(error.message);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const result = await ChangePassword(
        email,
        privateMail,
        newPassword,
        confirmPassword
      );
      console.log(result);
      if (result.status===200) {
        setShowVerificationInput(true);
        setCodeDirectionInput(true);
      }else{
        if (result.data && result.data.errors) {
          const errorMessages = Object.values(result.data.errors).flatMap(messages => messages);
          setErrorMessage(errorMessages.join('\n'));
      }else{
        setErrorMessage("An error occurred. Please try again.");
      }
    }
    } catch (error) {
      console.error("Şifre güncellenirken bir hata oluştu", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      style={{
        width: "100vw", // Viewport Width'a göre tam ekran genişlik
        height: "100vh", // Viewport Height'a göre tam ekran yükseklik
        position: "fixed", // Arka planı sabit tut
        top: 0,
        left: 0,
        display: "flex", // Flex container oluştur
        flexDirection: "column", // Çocukları dikey olarak hizala
        alignItems: "center", // Yatay eksen etrafında merkeze hizala
        justifyContent: "center", // Dikey eksen etrafında merkeze hizala
        background: `url(${backgroundImage}) no-repeat center center`, // Arka plan resmi
        backgroundSize: "cover", // Arka plan resmi kaplasın
      }}
    >
      <div
        style={{
          maxWidth: "400px", // İçerik div'inin maksimum genişliği
          width: "100%", // İçerik div'inin genişliği
          padding: "50px", // İçerik div'inin etrafındaki boşluk
          color: "black", // Yazı rengi
          backgroundColor: "white", // İçerik div'inin arka plan rengi, biraz saydamlık ekledik
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // İçerik div'ine gölge efekti
          borderRadius: "4px", // İçerik div'inin köşelerini yuvarlak yap
          //padding: '1em', // İçerik kutusunun etrafındaki boşluk
        }}
      >
        <h2 style={{ textAlign: "center", color: "#2196F3" }}>
          Şifre Değiştirme
        </h2>
        {codeDirectionInput && (
          <>
            <div style={{ margin: "20px 0" }}>
              <label>Mailinizi kontrol ederek aşağıya kodu giriniz..</label>
            </div>
          </>
        )}

        <div style={{ margin: "20px 0" }}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Adresi *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div style={{ margin: "20px 0" }}>
          <label>Private Mail:</label>
          <input
            type="email"
            placeholder="Private Email Adresi *"
            value={privateMail}
            onChange={(e) => setPrivateMail(e.target.value)}
            className="form-control"
          />
        </div>

        <div style={{ margin: "20px 0" }}>
          <label>Eski Şifre</label>
          <input
            type="password"
            placeholder="Eski Şifre *"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <div style={{ margin: "20px 0" }}>
          <label>Yeni Şifre:</label>
          <input
            type="password"
            placeholder="Yeni Şifre *"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <div style={{ margin: "20px 0" }}>
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
              <div style={{ margin: "20px 0" }}>
                <label>Gelen Kod:</label>
                <input
                  type="text"
                  placeholder="Gelen kod *"
                  value={verificationCode.toString()}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="form-control"
                />

                <button
                  onClick={handleVerifyCode}
                  style={{
                    backgroundColor: "#2196F3",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Kodu onayla
                </button>
              </div>
            </>
          )}

          {showSuccessLabel && (
            <>
              <div style={{ margin: "20px 0" }}>
                <label>Şifre Değiştirme işlemi başarılı.</label>
                <Link
                  to="/SignIn"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Giriş Ekranına Gider..
                </Link>
              </div>
            </>
          )}
        </div>

        {errorMessage && (
          <div style={{ color: "red", margin: "10px 0" }}>
            {Array.isArray(errorMessage) ? (
              errorMessage.map((errorGroup, index) => (
                <div key={index}>
                  {Array.isArray(errorGroup) ? (
                    errorGroup.map((message, index) => (
                      <div key={index}>{message}</div>
                    ))
                  ) : (
                    <div>{message.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
                  )}
                </div>
              ))
            ) : (
              <div>{errorMessage.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
            )}
          </div>
        )}


        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleUpdatePassword}
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Şifreyi Güncelle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
