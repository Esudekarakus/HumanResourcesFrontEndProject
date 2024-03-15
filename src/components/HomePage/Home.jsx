import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const user = {
    avatar: '/assets/avatar.png',
    name: 'Hakkı Alkan',
    email: 'hakkialkan@bilgeadamboost.com',
    phone: '0(532) 227 2727',
    country: 'Türkiye',
    city: 'Gaziantep',
    jobTitle: 'Kıdemli Yazılım Geliştirici',
    department: 'BT'
};
function Home() {
  return (
<div>
<h2 style={{ textAlign: 'center'}}>Anasayfa</h2>
<h5 style={{ textAlign: 'center'}}>Hoş geldiniz!</h5>
<br />
<Divider></Divider>
<br />
<CardContent>
<Stack spacing={2} sx={{ alignItems: 'center' }}>
<div>
<Avatar src={user.avatar} sx={{ height: '120px', width: '120px'}} />
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
<label>Adres:</label> {user.city}, <label></label>{user.country}
</Typography>
<Typography color="text.secondary" variant="h7">
<label>Departman:</label> {user.department}
</Typography>
<Typography color="text.secondary" variant="h7">
<label>İş Ünvanı:</label> {user.jobTitle}
</Typography>
</Stack>
</Stack>
</CardContent>
</div>
  );
}
export default Home;