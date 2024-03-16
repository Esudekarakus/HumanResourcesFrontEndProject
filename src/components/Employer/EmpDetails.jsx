import { useState, useEffect } from 'react'; // React'i dahil edin
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { fetchEmployerById } from '../../service/EmployerService';

export function EmpDetails() {
  const UserProfile = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          // Kullanıcı bilgilerini almak için API'yi çağır
          const userData = await fetchEmployerById(2); // Kullanıcı ID'si 1 olanı alır
          setUser(userData);
        } catch (error) {
          console.error('Kullanıcı getirme hatası:', error);
        }
      };
  
      fetchUser(); // useEffect, bileşen yüklendiğinde çalışacak
    }, []);

    return (
      <Card>
        <CardContent>
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <div>
              <Avatar src={user?.imagePath} sx={{ height: '180px', width: '180px' }} />
            </div>
            <Stack spacing={1} sx={{ textAlign: 'center' }}>
              <Typography variant="h5">{user?.name}</Typography>
              <Typography variant="h5">{user?.lastName}</Typography>
              <Typography color="text.secondary" variant="body2">
                {user?.address} {user?.address}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {user?.timezone}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions>
          <Button fullWidth variant="text">
            Fotoğraf Yükle
          </Button>
        </CardActions>
      </Card>
    );
  };

  return <UserProfile />;
}
