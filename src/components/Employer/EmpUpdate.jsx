'use client';

import React from 'react';
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

export function EmpUpdate() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Bilgilerinizi düzenleyebilirsiniz" title="Profil" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Ad</InputLabel>
                <OutlinedInput defaultValue="Hakkı" label="First name" name="firstName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Soyad</InputLabel>
                <OutlinedInput defaultValue="Alkan" label="Last name" name="lastName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Email Adresi</InputLabel>
                <OutlinedInput defaultValue="hakkialkan@bilgeadamboost.com" label="Email address" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Telefon Numarası</InputLabel>
                <OutlinedInput label="Phone number" name="phone" type="tel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Ülke</InputLabel>
                <Select defaultValue="türkiye" label="State" name="state" variant="outlined">
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
                <InputLabel>Şehir</InputLabel>
                <OutlinedInput label="City" />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Detayları kaydet</Button>
        </CardActions>
      </Card>
    </form>
  );
}
