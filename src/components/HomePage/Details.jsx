import { Avatar, CardContent, Divider, Stack, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function Details() {

  const detail = useSelector((state) => state.userDetails);

  const getStatusText = (status) => {
    if (status === 2) return "Aktif";
    if (status === 1) return "Pasif";
    return "Bilinmiyor"; // Eğer beklenmedik bir değerse
  };

  const openNewWindow = () => {
    window.open("/update", "_self"); // Yeni pencere yerine mevcut pencerede yönlendirme yapar
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
            <Typography variant="subtitle1" component="p"><b>İkinci Ad:</b> {detail.middleName}</Typography>
            <Typography variant="subtitle1" component="p"><b>Soyad:</b> {detail.lastName}</Typography>
            <Typography variant="subtitle1" component="p"><b>İkinci Soyad:</b> {detail.secondLastName}</Typography>
            <Typography variant="subtitle1" component="p"><b>Doğum Tarihi:</b> {detail.dateOfBirth}</Typography>
            <Typography variant="subtitle1" component="p"><b>Doğum Yeri:</b> {detail.birthOfPlace}</Typography>
            <Typography variant="subtitle1" component="p"><b>TC No:</b> {detail.idendificationNumber}</Typography>
            <Typography variant="subtitle1" component="p"><b>İşe Giriş Tarihi:</b> {detail.dateOfStart}</Typography>
            <Typography variant="subtitle1" component="p"><b>İşten Çıkış Tarihi:</b> {detail.dateOfEnd}</Typography>
            <Typography variant="subtitle1" component="p"><b>Aktif / Pasif:</b> {getStatusText(detail.status)}</Typography>
            <Typography variant="subtitle1" component="p"><b>Meslek:</b> {detail.profession}</Typography>
            <Typography variant="subtitle1" component="p"><b>Departman:</b> {detail.department}</Typography>
            <Typography variant="subtitle1" component="p"><b>Şirket Bilgisi:</b> {detail.companyName}</Typography>
            <Typography variant="subtitle1" component="p"><b>Email:</b> {detail.email}</Typography>
            <Typography variant="subtitle1" component="p"><b>Email:</b> {detail.privateMail}</Typography>
            <Typography variant="subtitle1" component="p"><b>Adres:</b> {detail.address}</Typography>
            <Typography variant="subtitle1" component="p"><b>Telefon:</b> {detail.phoneNumber}</Typography>
            <Typography variant="subtitle1" component="p"><b>Maaş:</b> {detail.salary}</Typography>
            <Button variant="contained" onClick={openNewWindow} sx={{
              mt: 2, // margintop 
              bgcolor: 'primary.main', '&:hover':
              {
                bgcolor: 'primary.dark',
              }
            }}>Güncelle
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </div>
  );
}

export default Details;