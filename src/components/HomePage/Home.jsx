import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { fetchEmployerById } from '../../service/EmployerService';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress'; // CircularProgress bileşenini import ediyoruz

function Home() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchEmployerById(userId);
        setUser(userData);
      } catch (error) {
        console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
      }
    };

    fetchUser();
  }, [userId]); 

  if (!user) {
    return <CircularProgress />; // Loading durumu için CircularProgress
  }

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
