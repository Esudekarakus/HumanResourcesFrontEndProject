
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
} from '@mui/material';
// import { makeStyles } from '@mui/styles';

const states = [
  { value: 'türkiye', label: 'Türkiye' },
  { value: "abd", label: "ABD" },
  { value: "almanya", label: "Almanya" },
  { value: "rusya", label: "Rusya" },
  { value: "hindistan", label: "Hindistan" },
  { value: "fransa ", label: "Fransa" },
  { value: "italya", label: "İtalya" },
  { value: "danimarka", label: "Danimarka" },
  { value: "japonya", label: "Japonya" },
  { value: "ingiltere", label: "İngiltere" },

];

// const useStyles = makeStyles({
//   input: {
//     marginTop: '16px',
//   },
// });

export function AddEmp() {
  const [empData, setEmpData] = useState({
    photo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    middleSurname: '',
    birthDate: '',
    birthPlace: '',
    tc: '',
    startDate: '',
    activeStatus: false,
    profession: '',
    department: '',
    companyName: '',
    email: '',
    state: '',
    city: '',
    phone: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmpData({
      ...empData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setEmpData({ ...empData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme veya API'ye gönderme
    console.log(empData);
  };

  // const classes = useStyles();


  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Personel Ekle" subheader="Yeni personel ekleyebilirsiniz" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" component="label">
                Fotoğraf Yükle
                <input type="file" hidden onChange={handleFileChange} name="photo" />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Switch checked={empData.activeStatus} onChange={handleChange} name="activeStatus" />}
                label="Aktiflik Durumu"
              />
            </Grid>
            {/* Ad */}
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="firstName">Ad</InputLabel>
                <OutlinedInput id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} /*label="Ad" *//>
              </FormControl>
            </Grid>
            {/* İkinci ad */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="middleName">İkinci Ad</InputLabel>
                <OutlinedInput id="middleName" name="middleName" value={empData.middleName} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Soyad */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="lastName">Soyad</InputLabel>
                <OutlinedInput id="lastName" name="lastName" value={empData.lastName} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* İkinci soyad */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="middleSurname">İkinci Soyad</InputLabel>
                <OutlinedInput id="middleSurname" name="middleSurname" value={empData.middleSurname} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Doğum Tarihi */} 
             <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="birthDate">Doğum Tarihi</InputLabel>
                <OutlinedInput id="birthDate" type="date" name="birthDate" value={empData.birthDate} onChange={handleChange} /*classes={classes.input} *//>
             </FormControl>
            </Grid>
       
            {/* Doğum Yeri */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="birthPlace">Doğum Yeri</InputLabel>
                <OutlinedInput id="birthPlace" name="birthPlace" value={empData.birthPlace} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* TC Kimlik No */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="tc">TC Kimlik No</InputLabel>
                <OutlinedInput id="tc" name="tc" value={empData.tc} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* İşe Giriş Tarihi */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="startDate">İşe Giriş Tarihi</InputLabel>
                <OutlinedInput id="startDate" type="date" name="startDate" value={empData.startDate} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Meslek */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="profession">Meslek</InputLabel>
                <OutlinedInput id="profession" name="profession" value={empData.profession} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Departman */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="department">Departman</InputLabel>
                <OutlinedInput id="department" name="department" value={empData.department} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Şirket Bilgisi */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="companyName">Şirket Bilgisi</InputLabel>
                <OutlinedInput id="companyName" name="companyName" value={empData.companyName} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Email */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput id="email" name="email" value={empData.email} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Ülke */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="state-label">Ülke</InputLabel>
                <Select labelId="state-label" id="state" name="state" value={empData.state} onChange={handleChange} label="Ülke">
                  {states.map((state) => (
                    <MenuItem key={state.value} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Şehir */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="city">Şehir</InputLabel>
                <OutlinedInput id="city" name="city" value={empData.city} onChange={handleChange} />
              </FormControl>
            </Grid>
            {/* Telefon */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="phone">Telefon</InputLabel>
                <OutlinedInput id="phone" name="phone" value={empData.phone} onChange={handleChange} type="tel" />
              </FormControl>
            </Grid>
            {/* Maaş */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel htmlFor="salary">Maaş</InputLabel>
                <OutlinedInput id="salary" name="salary" value={empData.salary} onChange={handleChange} type="number" />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "center", padding: "16px" }}>
          <Button type="submit" variant="contained" size="large">
            Ekle
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default AddEmp;
