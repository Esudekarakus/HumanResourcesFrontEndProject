import React from 'react';
import { Avatar, CardContent, Divider, Stack, Button, Typography } from '@mui/material';
 
function Details() {
  const detail = {
    img: "/path/to/photo1.jpg",
    name: "Arda",
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
  };
 
  const openNewWindow = () => {
    window.open("https://www.example.com", "_blank", "noopener,noreferrer");
  };
 
  return (
<div>
<h2 style={{ textAlign: 'center' }}>Detaylar</h2>
<br />
<Divider />

<CardContent>
<Stack spacing={2} alignItems='center'>
<Avatar src={detail.img} sx={{ height: 120, width: 120 }} />
<Stack spacing={1} sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
<Typography variant="subtitle1" component="p"><b>Ad:</b> {detail.name}</Typography>
<Typography variant="subtitle1" component="p"><b>İkinci Ad:</b> {detail.secondname}</Typography>
<Typography variant="subtitle1" component="p"><b>Soyad:</b> {detail.surname}</Typography>
<Typography variant="subtitle1" component="p"><b>İkinci Soyad:</b> {detail.secondsurname}</Typography>
<Typography variant="subtitle1" component="p"><b>Doğum Tarihi:</b> {detail.birthdate}</Typography>
<Typography variant="subtitle1" component="p"><b>Doğum Yeri:</b> {detail.birthplace}</Typography>
<Typography variant="subtitle1" component="p"><b>TC No:</b> {detail.idno}</Typography>
<Typography variant="subtitle1" component="p"><b>İşe Giriş Tarihi:</b> {detail.startdateofwork}</Typography>
<Typography variant="subtitle1" component="p"><b>İşten Çıkış Tarihi:</b> {detail.terminationdate}</Typography>
<Typography variant="subtitle1" component="p"><b>Aktif / Pasif:</b> {detail.activepassive}</Typography>
<Typography variant="subtitle1" component="p"><b>Meslek:</b> {detail.job}</Typography>
<Typography variant="subtitle1" component="p"><b>Departman:</b> {detail.department}</Typography>
<Typography variant="subtitle1" component="p"><b>Şirket Bilgisi:</b> {detail.companyinfo}</Typography>
<Typography variant="subtitle1" component="p"><b>Email:</b> {detail.email}</Typography>
<Typography variant="subtitle1" component="p"><b>Adres:</b> {detail.address}</Typography>
<Typography variant="subtitle1" component="p"><b>Telefon:</b> {detail.phone}</Typography>
<Typography variant="subtitle1" component="p"><b>Maaş:</b> {detail.salary}</Typography>
<Button variant="contained" onClick={openNewWindow} sx={{mt: 2, // margintop 
bgcolor: 'primary.main', '&:hover': 
{bgcolor: 'primary.dark',
}}}>Güncelle
</Button>
</Stack>
</Stack>
</CardContent>
</div>
  );
}
 
export default Details;