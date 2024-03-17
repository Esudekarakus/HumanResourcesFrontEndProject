
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
        const userData = await fetchEmployerById(2); 
        setUser(userData); 
      } catch (error) {
        console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
      }
    };

    fetchUser(); 
  }, []); 


  if (!user) {
    return <div>Loading...</div>;
  }

  // Kullanıcı bilgilerini göster
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Anasayfa</h2>
      <h5 style={{ textAlign: 'center' }}>Hoş geldiniz <strong>{user.name}!</strong></h5>  
      <br />
      <Divider />
      <br />
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={user.avatar} sx={{ height: '120px', width: '120px' }} /> <br/>
          </div>
          <Stack spacing={1} sx={{ textAlign: 'left' }}>
            <Typography variant="h6">
              <label><strong>Ad Soyad:</strong></label> {user.name}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Email:</strong></label> {user.email}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Telefon:</strong></label> {user.phone}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Adres:</strong></label> {user.address}, <label></label>
              {user.country}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Departman:</strong></label> {user.department}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>İş Ünvanı:</strong></label> {user.profession}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </div>
  );
}

export default Home;
