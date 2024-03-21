import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
// import { makeStyles } from '@mui/styles';

const states = [
  { value: "türkiye", label: "Türkiye" },
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

const company=[
  { value: "samsung", label: "Samsung" },
  { value: "huawei", label: "Huawei" },
  { value: "türktelekom", label: "TürkTelekom" },
  { value: "vestel", label: "Vestel" },
  { value: "aselsan", label: "Aselsan" },
  { value: "apple ", label: "Apple" },
  { value: "tesla", label: "Tesla" },
  { value: "amazon", label: "Amazon" },
  { value: "trendyol", label: "Trendyol" },
  { value: "hepsiburada", label: "Hepsiburada" },
];
// const useStyles = makeStyles({
//   input: {
//     marginTop: '16px',
//   },
// });

export function AddEmp() {
  const [empData, setEmpData] = useState({
    photo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    middleSurname: "",
    birthDate: "",
    birthPlace: "",
    tc: "",
    startDate: "",
    activeStatus: false,
    profession: "",
    department: "",
    companyName: "",
    email: "",
    state: "",
    city: "",
    phone: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmpData({
      ...empData,
      [name]: type === "checkbox" ? checked : value,
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
        <CardHeader
          title="Personel Ekle"
          subheader="Yeni personel ekleyebilirsiniz"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" component="label">
                Fotoğraf Yükle
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  name="photo"
                />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={empData.activeStatus}
                    onChange={handleChange}
                    name="activeStatus"
                  />
                }
                label="Aktiflik Durumu"
              />
            </Grid>
            {/* Ad */}
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel
                  htmlFor="firstName"
                  InputLabelProps={{ shrink: !!empData.firstName }}
                >
                  Ad
                </InputLabel>
                <OutlinedInput
                  id="firstName"
                  name="firstName"
                  value={empData.firstName}
                  onChange={handleChange}
                  label="Ad"
                />
              </FormControl>
            </Grid>
            {/* İkinci ad */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="middleName"
                  InputLabelProps={{ shrink: !!empData.middleName }}
                >
                  İkinci Ad
                </InputLabel>
                <OutlinedInput
                  id="middleName"
                  name="middleName"
                  value={empData.middleName}
                  onChange={handleChange}
                  label="İkinci Ad"
                />
              </FormControl>
            </Grid>
            {/* Soyad */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="lastName"
                  InputLabelProps={{ shrink: !!empData.lastName }}
                >
                  Soyad
                </InputLabel>
                <OutlinedInput
                  id="lastName"
                  name="lastName"
                  value={empData.lastName}
                  onChange={handleChange}
                  label="Soyad"
                />
              </FormControl>
            </Grid>
            {/* İkinci soyad */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="middleSurname"
                  InputLabelProps={{ shrink: !!empData.middleSurname }}
                >
                  İkinci Soyad
                </InputLabel>
                <OutlinedInput
                  id="middleSurname"
                  name="middleSurname"
                  value={empData.middleSurname}
                  onChange={handleChange}
                  label="İkinci Soyad"
                />
              </FormControl>
            </Grid>
            {/* Doğum Tarihi */}
            <Grid item xs={12} md={6}>
              <TextField
                id="birthDate"
                label="Doğum Tarihi"
                type="date"
                name="birthDate"
                value={empData.birthDate}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            {/* Doğum Yeri */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="birthPlace"
                  InputLabelProps={{ shrink: !!empData.birthPlace }}
                >
                  Doğum Yeri
                </InputLabel>
                <OutlinedInput
                  id="birthPlace"
                  name="birthPlace"
                  value={empData.birthPlace}
                  onChange={handleChange}
                  label="Doğum Yeri"
                />
              </FormControl>
            </Grid>
            {/* TC Kimlik No */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="tc"
                  InputLabelProps={{ shrink: !!empData.tc }}
                >
                  TC Kimlik No
                </InputLabel>
                <OutlinedInput
                  id="tc"
                  name="tc"
                  value={empData.tc}
                  onChange={handleChange}
                  label="TC Kimlik No"
                />
              </FormControl>
            </Grid>
            {/* İşe Giriş Tarihi */}
            <Grid item xs={12} md={6}>
              <TextField
                id="startDate"
                label="İşe Giriş Tarihi"
                type="date"
                name="startDate"
                value={empData.startDate}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true, // Bu etiketin her zaman küçültülmesini sağlar
                }}
              />
            </Grid>
            {/* Meslek */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="profession"
                  InputLabelProps={{ shrink: !!empData.profession }}
                >
                  Meslek
                </InputLabel>
                <OutlinedInput
                  id="profession"
                  name="profession"
                  value={empData.profession}
                  onChange={handleChange}
                  label="Meslek"
                />
              </FormControl>
            </Grid>
            {/* Departman */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="department"
                  InputLabelProps={{ shrink: !!empData.department }}
                >
                  Departman
                </InputLabel>
                <OutlinedInput
                  id="department"
                  name="department"
                  value={empData.department}
                  onChange={handleChange}
                  label="Departman"
                />
              </FormControl>
            </Grid>
            {/* Şirket Bilgisi */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  id="company-label"
                  InputLabelProps={{ shrink: !!empData.company }}
                >
                  Şirket Bilgisi
                </InputLabel>
               
                <Select
                  labelId="company-label"
                  id="company"
                  name="company"
                  value={empData.company}
                  onChange={handleChange}
                  label="Şirket Bilgisi"
                >
                  {company.map((company) => (
                    <MenuItem key={company.value} value={company.value}>
                      {company.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* Email */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="email"
                  InputLabelProps={{ shrink: !!empData.email }}
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  id="email"
                  name="email"
                  value={empData.email}
                  onChange={handleChange}
                  label="Email"
                />
              </FormControl>
            </Grid>
            {/* Ülke */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  id="state-label"
                  InputLabelProps={{ shrink: !!empData.state }}
                >
                  Ülke
                </InputLabel>
                <Select
                  labelId="state-label"
                  id="state"
                  name="state"
                  value={empData.state}
                  onChange={handleChange}
                  label="Ülke"
                >
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
                <InputLabel
                  htmlFor="city"
                  InputLabelProps={{ shrink: !!empData.city }}
                >
                  Şehir
                </InputLabel>
                <OutlinedInput
                  id="city"
                  name="city"
                  value={empData.city}
                  onChange={handleChange}
                  label="Şehir"
                />
              </FormControl>
            </Grid>
            {/* Telefon */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="phone"
                  InputLabelProps={{ shrink: !!empData.phone }}
                >
                  Telefon
                </InputLabel>
                <OutlinedInput
                  id="phone"
                  name="phone"
                  value={empData.phone}
                  onChange={handleChange}
                  type="tel"
                  label="Telefon"
                />
              </FormControl>
            </Grid>
            {/* Maaş */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel
                  htmlFor="salary"
                  InputLabelProps={{ shrink: !!empData.salary }}
                >
                  Maaş
                </InputLabel>
                <OutlinedInput
                  id="salary"
                  name="salary"
                  value={empData.salary}
                  onChange={handleChange}
                  type="salary"
                  label="Maaş"
                />
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
