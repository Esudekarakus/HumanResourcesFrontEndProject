'use client';
 
import React from 'react';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch 2'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
 
const states = [
  { value: 'türkiye', label: 'Türkiye' },
  { value: 'abd', label: 'ABD' },
  { value: 'almanya', label: 'Almanya' },
  { value: 'rusya', label: 'Rusya' },
  { value: 'hindistan', label: 'Hindistan' },
  { value: 'fransa ', label: 'Fransa' },
  { value: 'italya', label: 'İtalya' },
  { value: 'danimarka', label: 'Danimarka' },
  { value: 'japonya', label: 'Japonya' },
  { value: 'ingiltere', label: 'İngiltere' }
];
 
export function AddEmp() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Yeni personel ekleyebilirsiniz" title="Personel Ekle" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
          <Grid item md={6} xs={12}><FormControl fullWidth><Button variant="contained" component="label">                    Fotoğraf Yükle                     
            <input type="file"hidden name="photo"/>
            </Button>
            </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Ad</InputLabel>
                <OutlinedInput label="First name" name="firstName" />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
            <FormControlLabel
            control={<Switch name="activeStatus" />}
            label="Aktiflik Durumu"
            />
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="middleName">İkinci Ad</InputLabel><OutlinedInput id="middleName" name="middleName" /></FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Soyad</InputLabel>
                <OutlinedInput label="Last name" name="lastName" />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="middleSurname">İkinci Soyad</InputLabel><OutlinedInput id="middleSurname" name="middleSurname" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="birthDate">Doğum Tarihi</InputLabel><OutlinedInput id="birthDate" name="birthDate" type="" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="birthPlace">Doğum Yeri</InputLabel><OutlinedInput id="birthPlace" name="birthPlace" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="tc">TC Kimlik No</InputLabel><OutlinedInput id="tc" name="tc" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="startDate">İşe Giriş Tarihi</InputLabel><OutlinedInput id="startDate" name="startDate" type="" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="profession">Meslek</InputLabel><OutlinedInput id="profession" name="profession" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="department">Departman</InputLabel><OutlinedInput id="department" name="department" /></FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="companyName">Şirket Bilgisi</InputLabel><OutlinedInput id="companyName" name="companyName" /></FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Email</InputLabel>
                <OutlinedInput label="Email address" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Ülke*</InputLabel>
                <Select label="State" name="state" variant="outlined">
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Şehir*</InputLabel>
                <OutlinedInput label="City" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Telefon*</InputLabel>
                <OutlinedInput label="Phone number" name="phone" type="tel" />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}><FormControl fullWidth required><InputLabel htmlFor="salary">Maaş</InputLabel><OutlinedInput id="salary" name="salary" type="number" /></FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{mt: 2, // margintop
        justifyContent:'center',
        bgcolor: 'primary.main', '&:hover':
        {bgcolor: 'primary.dark',
        }}}>Ekle
        </Button>
        </CardActions>
      </Card>
    </form>
  );
}
 
export default AddEmp;