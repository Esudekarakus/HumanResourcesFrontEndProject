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
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from 'react';
import { authLogin } from '../../controllers/authController';
import { useDispatch } from "react-redux";
import { decodeToken } from '../../service/JwtDecoder';
import { useLocation, useNavigate } from 'react-router';
import { loginSuccess } from '../../service/redux/actions/authActions';
import { setUserDetails } from '../../service/redux/actions/userAction';

import { getAppUserDetailsByMail } from '../../service/AppUserService';





const Login = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const { search } = useLocation();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(search);
    const error = queryParams.get('error');

    const ErrorText = styled(Typography)(({ theme, show }) => ({
        color: 'red',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        display: show ? 'block' : 'none',
    }));

   
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = new FormData(e.currentTarget);
            const result = await authLogin(data.get("email"), data.get("password"));
            const emailToSend = data.get("email");
            if (result && result.data) {
                const decoded = decodeToken(); 
                console.log(decoded);
                console.log(decoded.Role);
                console.log(decoded.Email);
                console.log(JSON.stringify(result.data));
                dispatch(loginSuccess({
                    email:decoded.Email,
                    token: result.data,
                    role: decoded.Role,
                    isAuthenticated: true
                }));


                console.log(emailToSend);
                const apiResponse = await getAppUserDetailsByMail(emailToSend);

                console.log(apiResponse);
                dispatch(setUserDetails(apiResponse));
                navigate("/home/:userId");
            } else if (error) {
                setErrMsg(error);
                toast.error(error);
            } else if (result === null) {
                setErrMsg("Bir sorun oluştu tekrar deneyiniz")
            } else {
                toast.warning("Bir sorun oluştu tekrar deneyiniz")
            }

        } catch (err) {
            if (!err?.response) {
                toast.error('No server response');
            } else if (err.reponse?.status === 400) {
                toast.error('Missing username or pass');
            } else if (err.response?.status === 401) {
                toast.error('Unauthorized');
            } else {
                toast.error('login failed')
            }
            console.log(err);
            toast.error(err);
            setErrMsg(err);
        }
    }

    return (
        <>

                <section>

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
                                        type="text"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Adresi"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        name="password"
                                        label="Şifre"
                                        type="password"
                                        id="password"
                                    //autoComplete="current-password"
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
                                    <ErrorText show={!!errMsg} variant="body2">
                                        {errMsg}
                                    </ErrorText>
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
                </section>
            )
        </>
    )
}

export default Login;

