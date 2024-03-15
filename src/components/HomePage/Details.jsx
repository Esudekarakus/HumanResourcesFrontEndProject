// Details.js
import { Avatar } from "@mui/material";
import React from "react";

function Details() {
  // Örnek detay listesi
  const details = [
    {
    img: "/path/to/photo1.jpg", 
    name: "Johnson", 
    secondname: "Hasan",
    surname: "Kara",
    secondsurname: "-",
    birthdate: "05.01.1997",
    birthplace: "Adana",
    idno: "142758493",
    startdateofwork: "01.01.2023",
    terminationdate: "-",
    activepassive: "Aktif",
    job: "Mühendis",
    department: "AR-GE",
    companyinfo: "Samsung",
    email: "hasankara@bilgeadamboost.com",
    address: "Kadıköy, İstanbul", 
    phone: "0(530) 897 6232",
    salary: "49000"
    },
  ];

  // Bu fonksiyon, yeni bir pencere açar
  const openNewWindow = () => {
    window.open("https://www.example.com", "_blank", "noopener,noreferrer");
  };
  
 return (
    <div>
      <h2>Detaylar</h2>
      <br />
      {details.map((detail,index) => (
        <div key={index}> {/* Benzersiz bir key prop'u eklendi */}
            <div>
            <Avatar src={detail.img} style={{ height: '120px', width: '120px'}} />
            </div>
            <br />
          <p>Ad: {detail.name}</p>
          <p>İkinci Ad: {detail.secondname}</p>
          <p>Soyad: {detail.surname}</p>
          <p>İkinci Soyad: {detail.secondsurname}</p>
          <p>Doğum Tarihi: {detail.birthdate}</p>
          <p>Doğum Yeri: {detail.birthplace}</p>
          <p>TC No: {detail.idno}</p>
          <p>İşe Giriş Tarihi: {detail.startdateofwork}</p>
          <p>İşten Çıkış Tarihi: {detail.terminationdate}</p>
          <p>Aktif / Pasif: {detail.activepassive}</p>
          <p>Meslek: {detail.job}</p>
          <p>Departman: {detail.department}</p>
          <p>Şirket Bilgisi: {detail.companyinfo}</p>
          <p>Email: {detail.email}</p>
          <p>Adres: {detail.address}</p>
          <p>Telefon: {detail.phone}</p>
          <p>Maaş: {detail.salary}</p>
          <br />
          <button onClick={openNewWindow} style={{ position:'relative', bottom:'20px', left: '85%',transform: 'translateX(-50%)', padding: '8px 40px', fontSize: '16px', borderRadius: '8px', cursor: 'pointer'}}>Güncelle</button>
        </div>
      ))}
    </div>
  );
}

export default Details;