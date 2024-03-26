import { useState } from "react";
import { FormControlLabel, Typography } from "@mui/material";
import { addEmployeeByEmployer } from "../../service/EmployerService";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";

const companies = [
  { id: 1, label: "Samsung" },
  { id: 2, label: "Huawei" },
  { id: 3, label: "TürkTelekom" },
  { id: 4, label: "Vestel" },
  { id: 5, label: "Aselsan" },
  { id: 6, label: "Apple" },
  { id: 7, label: "Tesla" },
  { id: 8, label: "Amazon" },
  { id: 9, label: "Trendyol" },
  { id: 10, label: "Hepsiburada" },
];

export function AddEmp() {

  // const [password, setPassword] = useState('');
  // const [validPassword, setValidPassword] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);

  // const [matchPassword, setMatchPassword] = useState('');
  // const [validMatchPassword, setValidMatchPassword] = useState(false);
  // const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);


  const [empData, setEmpData] = useState({
    name: "",
    middleName: "",
    lastName: "",
    secondLastName: "",
    dateOfBirth: "",
    birthOfPlace: "",
    address: "",
    identificationNumber: "",
    companyId: 1,
    status: 1,
    dateOfStart: "",
    phoneNumber: "",
    salary: "",
    privateMail: "",
    profession: "",
    department: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "status") {
      // Handle switch for status
      setEmpData({ ...empData, [name]: checked ? 1 : 2 });
    } else if (name === "salary") {
      // Parse salary as float and handle NaN
      setEmpData({ ...empData, [name]: isNaN(parseFloat(value)) ? "" : parseFloat(value) });
    } else {
      // Handle all other inputs
      setEmpData({ ...empData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!empData.name || !empData.lastName || !empData.dateOfBirth || !empData.address || !empData.identificationNumber || !empData.dateOfStart || !empData.phoneNumber || !empData.privateMail || !empData.department) {
        setError("Lütfen tüm gerekli alanları doldurun.");
        return;
      }
      console.log(empData);
      const responseData = await addEmployeeByEmployer(empData);
      console.log("Employee added successfully:", responseData);


      setEmpData({
        name: "",
        middleName: "",
        lastName: "",
        secondLastName: "",
        dateOfBirth: "",
        birthOfPlace: "",
        address: "",
        identificationNumber: "",
        companyId: 1,
        status: 1,
        dateOfStart: "",
        phoneNumber: "",
        salary: "",
        privateMail: "",
        profession: "",
        department: "",
      });
      setError("");
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Personel eklenirken bir hata oluştu.");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          title="Personel Ekle"
          subheader="Yeni personel ekleyebilirsiniz"
        />
        <Divider />
        <CardContent>
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ad"
                name="name"
                onChange={handleChange}
                value={empData.name}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="İkinci Ad"
                name="middleName"
                onChange={handleChange}
                value={empData.middleName}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Soyad"
                name="lastName"
                onChange={handleChange}
                value={empData.lastName}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="İkinci Soyad"
                name="secondLastName"
                onChange={handleChange}
                value={empData.secondLastName}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Doğum Tarihi"
                name="dateOfBirth"
                onChange={handleChange}
                type="date"
                value={empData.dateOfBirth}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Doğum Yeri"
                name="birthOfPlace"
                onChange={handleChange}
                value={empData.birthOfPlace}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres"
                name="address"
                onChange={handleChange}
                value={empData.address}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="TC Kimlik No"
                name="identificationNumber"
                onChange={handleChange}
                value={empData.identificationNumber}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="İşe Giriş Tarihi"
                name="dateOfStart"
                onChange={handleChange}
                type="date"
                value={empData.dateOfStart}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telefon"
                name="phoneNumber"
                onChange={handleChange}
                value={empData.phoneNumber}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Maaş"
                name="salary"
                onChange={handleChange}
                value={empData.salary}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="privateMail"
                onChange={handleChange}
                value={empData.privateMail}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Meslek"
                name="profession"
                onChange={handleChange}
                value={empData.profession}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={empData.status === 1}
                    onChange={handleChange}
                    name="status"
                  />
                }
                label="Aktiflik Durumu"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Departman"
                name="department"
                onChange={handleChange}
                value={empData.department}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel id="companyId-label">Şirket Bilgisi</InputLabel>
                <Select
                  labelId="companyId-label"
                  id="companyId"
                  name="companyId"
                  value={empData.companyId}
                  onChange={handleChange}
                  label="Şirket Bilgisi"
                  variant="outlined"
                >
                  {companies.map((company) => (
                    <MenuItem key={company.id} value={company.id}>
                      {company.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "center" }}>
          <Button type="submit" variant="contained" size="large">
            Ekle
          </Button>
        </CardActions>
      </Card>
    </form>
    </>
  )
}

export default AddEmp;
