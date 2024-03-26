import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import React, { useState, useEffect } from 'react';
import { fetchEmployerById } from '../../service/EmployerService';
import { useParams } from 'react-router';



import CircularProgress from '@mui/material/CircularProgress'; // 


// import  { useState, useEffect } from 'react';
// import { fetchEmployerById } from '../../service/EmployerService';
// import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function Home() {

  const userDetails = useSelector((state) => state.userDetails);



  if (!userDetails) {
    return <CircularProgress />; 
  }

  return (
    <>
    <div>
      <h2 style={{ textAlign: 'center' }}>Anasayfa</h2>
      <h5 style={{ textAlign: 'center' }}>Hoş geldiniz <strong>{userDetails.name}!</strong></h5>  
      <br />
      <Divider />
      <br />
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={userDetails.avatar} sx={{ height: '120px', width: '120px' }} /> <br/>
          </div>
          <Stack spacing={1} sx={{ textAlign: 'left' }}>
            <Typography variant="h6">
              <label><strong>Ad Soyad:</strong></label> {userDetails.name}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Email:</strong></label> {userDetails.email}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Telefon:</strong></label> {userDetails.phoneNumber}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Adres:</strong></label> {userDetails.address}, <label></label>
              {userDetails.address}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>Departman:</strong></label> {userDetails.department}
            </Typography>
            <Typography color="" variant="h7">
              <label><strong>İş Ünvanı:</strong></label> {userDetails.profession}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </div>
    </>
  );
}

export default Home;
