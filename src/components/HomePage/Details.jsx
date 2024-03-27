import React from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
// İkonlar için importlar
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CakeIcon from "@mui/icons-material/Cake";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

function Details() {
  const detail = useSelector((state) => state.userDetails);

  const getStatusText = (status) => {
    if (status === 2) return "Aktif";
    if (status === 1) return "Pasif";
    return "Bilinmiyor"; // Eğer beklenmedik bir değerse
  };
 
  const openNewWindow = () => {
    window.open("/update", "_self"); // Yeni pencere yerine mevcut pencerede yönlendirme yapar
  };

  if (!detail) {
    return <CircularProgress />;
  }

  return (
    <Card sx={{ maxWidth: 600, m: "auto", mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" align="center" gutterBottom>
          Detaylar
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack spacing={2} alignItems="center">
          <Avatar src={detail.img} sx={{ height: 120, width: 120 }} />
          <List dense>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Ad" secondary={detail.name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="İkinci Ad" secondary={detail.middleName} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Soyad" secondary={detail.lastName} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="İkinci Soyad"
                secondary={detail.secondLastName}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Doğum Tarihi"
                secondary={detail.dateOfBirth}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText
                primary="Doğum Yeri"
                secondary={detail.birthOfPlace}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FingerprintIcon />
              </ListItemIcon>
              <ListItemText
                primary="TCKN"
                secondary={detail.idendificationNumber}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText
                primary="İşe Giriş Tarihi"
                secondary={detail.dateOfStart}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText
                primary="İşten Çıkış Tarihi"
                secondary={detail.dateOfEnd || "Çalışıyor"}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Meslek" secondary={detail.profession} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Departman" secondary={detail.department} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Şirket" secondary={detail.companyName || "Bilge Adam"} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="Şirket Maili"
                secondary={detail.companyEmail || "elmascelebi@BilgeAdamBost.com"}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Adres" secondary={detail.address} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Telefon" secondary={detail.phoneNumber} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Maaş" secondary={`${detail.salary} TL`} />
            </ListItem>
          </List>
          <Button
            variant="contained"
            onClick={openNewWindow}
            sx={{
              mt: 2,
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Güncelle
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Details;
