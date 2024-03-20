import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginF } from '../../service/AccountService';
import jwt_decode from 'jwt-decode'; 



function SignIn() {
  
  const handleSubmit = async (event) => {
    event.preventDefault();
      
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
     
    try {
      const response = await LoginF(email, password);
      console.log(response); 
      const decodedToken = jwt_decode(response);
       const userId = decodedToken.userId;
       const userEmail = decodedToken.email;
       console.log(decodedToken);
      alert("Giriş başarılı");
      window.location.href = `/home/${userId}`;
    } catch (error) {
      console.error('Giriş işlemi başarısız oldu:', error);
      console.log('Response:', error.response); 
      alert("Giriş başarısız");
    }
    
   
    event.target.reset();
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Giriş Yap
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Adresi"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Beni Hatırla"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              GİrİŞ Yap
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="forgot-password" variant="body2">
                  Şifremi Unuttum :(
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Telif hakkı bilgisi */}
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            insankaynaklari.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
