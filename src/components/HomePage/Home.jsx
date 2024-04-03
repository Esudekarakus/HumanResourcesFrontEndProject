import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
 
function Home() {
  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails.personalId);
 
  if (!userDetails) {
    return <CircularProgress />;
  }
 
  return (
<Box sx={{ flexGrow: 1, m: 2 }}>
<Card raised sx={{ minWidth: 275 }}>
<CardContent>
<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
<Avatar
              src={userDetails.imageSrc}
              sx={{ height: '120px', width: '120px', mb: 2 }}
            />
<Typography variant="h5" component="div" gutterBottom>
              Hoş geldiniz {userDetails.name}!
</Typography>
</Box>
<Divider variant="middle" sx={{ mb: 2 }} />
<Paper elevation={0} sx={{ p: 2 }}>
<List>
<ListItem>
<ListItemIcon>
<WorkIcon />
</ListItemIcon>
<ListItemText primary="Ad Soyad" secondary={userDetails.name} />
</ListItem>
<ListItem>
<ListItemIcon>
<EmailIcon />
</ListItemIcon>
<ListItemText primary="Email" secondary={userDetails.email} />
</ListItem>
<ListItem>
<ListItemIcon>
<PhoneIcon />
</ListItemIcon>
<ListItemText primary="Telefon" secondary={userDetails.phoneNumber} />
</ListItem>
<ListItem>
<ListItemIcon>
<HomeIcon />
</ListItemIcon>
<ListItemText primary="Adres" secondary={userDetails.address} />
</ListItem>
<ListItem>
<ListItemIcon>
<WorkIcon />
</ListItemIcon>
<ListItemText primary="Departman" secondary={userDetails.department} />
</ListItem>
<ListItem>
<ListItemIcon>
<WorkIcon />
</ListItemIcon>
<ListItemText primary="İş Ünvanı" secondary={userDetails.profession} />
</ListItem>
</List>
</Paper>
</CardContent>
</Card>
</Box>
  );
}
 
export default Home;