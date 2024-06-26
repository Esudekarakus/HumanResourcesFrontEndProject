import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { authLogin } from "../../controllers/authController";
import { useDispatch } from "react-redux";
import { decodeToken } from "../../service/JwtDecoder";
import { useLocation, useNavigate } from "react-router";
import { loginSuccess } from "../../service/redux/actions/authActions";
import { setUserDetails } from "../../service/redux/actions/userAction";

import { getAppUserDetailsByMail } from "../../service/AppUserService";

import backgroundImage from "/images/clean-2721104_1280.jpg";
//import { GetCompaniesList } from "../../service/CompanyService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState([]);
  const [showErrorDiv, setErrorDiv] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(search);
  const error = queryParams.get("error");

  const ErrorText = styled(Typography)(({ theme, show }) => ({
    color: "red",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    display: show ? "block" : "none",
  }));

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      const result = await authLogin(data.get("email"), data.get("password"));
      const emailToSend = data.get("email");
      console.log(result);

      if (result && result.data) {
        const decoded = decodeToken();
        console.log(decoded);
        console.log(decoded.Role);
        console.log(decoded.Email);
        console.log(JSON.stringify(result.data));
        dispatch(
          loginSuccess({
            email: decoded.Email,
            token: result.data,
            role: decoded.Role,
            isAuthenticated: true,
          })
        );



        console.log(emailToSend);
        const apiResponse = await getAppUserDetailsByMail(emailToSend);

        console.log(apiResponse);
        dispatch(setUserDetails(apiResponse));
        navigate("/home/:userId");
        setErrMsg([]);
        setErrorDiv(false);
        setEmail("");
        setPwd("");
      } else if (result.status === 400||result.status===404) {
        console.log(result.errors);
        const errorMessages = Object.values(result.errors).flatMap(messages => messages);
        console.log(errorMessages);
        setErrMsg(errorMessages.join('\n'));
        setErrorDiv(true);
      }else{
        setErrMsg("Kullanıcı adı veya şifre hatalı tekrar kontrol ediniz..")
      }

    } catch (err) {
      console.log(err);
      if (!err?.response === 400) {
        setErrMsg("No server response");
      } else if (err.reponse?.status === 400) {
        setErrMsg("Missing username or pass");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("login failed");
      }
      console.log(err);
      setErrMsg(err);
    }
  };

  return (
    <>
      <ThemeProvider theme={createTheme()}>
        {/* <Container> */}
        <CssBaseline />
        <section
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            position: 'fixed', // Arka planı sabit tut
            top: 0,
            left: 0,
            width: "100vw",
            minHeight: '100vh', // 'height' yerine 'minHeight' kullanın
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="main"
            maxWidth="xs"
            sx={{
              width: "100%", // Tüm kutunun genişliği
              maxWidth: "400px", // Kutunun maksimum genişliği
              //padding: '1em', // İçerik kutusunun etrafındaki boşluk
              display: "flex", // Flexbox kullanımı
              flexDirection: "column", // Çocukları dikey sırada dizmek
              alignItems: "center", // Yatay eksende ortalamak
              marginTop: 8, // Üstten boşluk
              marginBottom: 8, // Alttan boşluk, footer yüksekliği kadar olabilir
              padding: (theme) => theme.spacing(3), // Tema'dan boşluk değeri kullanmak
              boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)", // Gölge efekti
              borderRadius: "8px", // Kenar yuvarlaklığı
              //backgroundColor: "#ffffff", // Arka plan rengi
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Arka planın biraz saydam olması için

              justifyContent: "center",
              textAlign: 'center'

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Giriş Yap
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
              {showErrorDiv && (
                <div style={{ color: "red", margin: "10px 0" }}>
                  {Array.isArray(errMsg) ? (
                    errMsg.map((errorGroup, index) => (
                      <div key={index}>
                        {Array.isArray(errorGroup) ? (
                          errorGroup.map((message, index) => (
                            <div key={index}>{message}</div>
                          ))
                        ) : (
                          <div>{message.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div>{errMsg.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
                  )}
                </div>
              )}

              <Grid container>
                <Grid item xs>
                  <Link href="forgot-password" variant="body2">
                    Şifremi Unuttum :(
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2"></Link>
                </Grid>

              </Grid>
              <Typography
                variant="body2"
                color="text.secondary"
                padding={"20px"}
                align="center"
              >
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                  insankaynaklari.com
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Box>

          {/* Telif hakkı bilgisi */}
          {/* <Typography
            variant="body2"
            color="text.secondary"
            padding={"20px"}
            align="center"
          >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              insankaynaklari.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography> */}
          {/* </Container> */}
        </section>
      </ThemeProvider>
      )
    </>
  );
};

export default Login;
