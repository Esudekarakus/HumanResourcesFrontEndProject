
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { fetchEmployerById } from '../../service/EmployerService';

function Home() {
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini tutmak için state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchEmployerById(2); // Kullanıcı kimliğini buraya geçirin
        setUser(userData); // Kullanıcı bilgilerini state'e ayarla
      } catch (error) {
        console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
      }
    };

    fetchUser(); // useEffect çağrıldığında kullanıcı bilgilerini getir
  }, []); // [] geçerek sadece bir kere çağrılmasını sağla, eğer bir değişiklikten etkilenmemesi gerekiyorsa.

  // Kullanıcı bilgileri yüklenene kadar bir yükleme durumu göster
  if (!user) {
    return <div>Loading...</div>;
  }

  // Kullanıcı bilgilerini göster
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Anasayfa</h2>
      <h5 style={{ textAlign: 'center' }}>Hoş geldiniz!</h5>
      <br />
      <Divider />
      <br />
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={user.avatar} sx={{ height: '120px', width: '120px' }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: 'left' }}>
            <Typography variant="h5">
              <label>Ad Soyad:</label> {user.name}
            </Typography>
            <Typography color="text.secondary" variant="h7">
              <label>Email:</label> {user.email}
            </Typography>
            <Typography color="text.secondary" variant="h7">
              <label>Telefon: </label> {user.phone}
            </Typography>
            <Typography color="text.secondary" variant="h7">
              <label>Adres:</label> {user.address}, <label></label>
              {user.country}
            </Typography>
            <Typography color="text.secondary" variant="h7">
              <label>Departman:</label> {user.department}
            </Typography>
            <Typography color="text.secondary" variant="h7">
              <label>İş Ünvanı:</label> {user.profession}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </div>
  );
}

export default Home;
