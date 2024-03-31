
import React, { useState,useEffect } from 'react';
import { GetCompanyList } from '../../service/CompanyService';
import { useDispatch,useSelector } from 'react-redux';
import { CreateEmployerByAdmin } from '../../service/AdminService';
// const defaultImageSrc = "/images/defaultImage.jpg";

// const initialImgValues = {
//   imageName: "",
//   imageSrc: defaultImageSrc,
//   imageFile: null,
// };
 
const ManagerForm = () => {
  // Form state'i
  const [manager, setManager] = useState({
    imageFile: null,
    name: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    dateOfStart: '',
    birthOfPlace: '',
    identificationNumber: '',
    dateOfStart: '',
    status: 1,
    profession: '',
    department: '',
    companyId: '',
    privateMail: '',
    address: '',
    phoneNumber: '',
    salary: '',
  });
  const [companies, setCompanies] = useState([]);
  const UserRole = useSelector((state)=>state.auth.role);
  const [error,setError]=useState([]);
  // const [imgValues, setImgValues] = useState(initialImgValues);


  useEffect(() => {
    if (UserRole === "admin") {
      const fetchCompanies = async () => {
        try {
          const response = await GetCompanyList();
          setCompanies(response); 
        } catch (error) {
          console.error("Error fetching companies:", error);
          setError(error);
        }
      };
      fetchCompanies();
    }
  }, [UserRole]);



  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setManager({
      ...manager,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleCompanyChange = (e) => {
    console.log(e.target.value);
    setManager({
      ...manager,
      companyId: e.target.value
    });
  };

  // const showPreview = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     let imageFile = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (x) => {
  //       setImgValues({
  //         ...imgValues,
  //         imageFile,
  //         imageSrc: x.target.result,
  //       });
  //       setManager({
  //         ...manager,
  //         imageFile, // manager içindeki imageFile'ı güncelle
  //       });
  //     };
  //     reader.readAsDataURL(imageFile);
  //   } else {
  //     setImgValues({
  //       ...imgValues,
  //       imageFile: null,
  //       imageSrc: defaultImageSrc,
  //     });
  //     setManager({
  //       ...manager,
  //       imageFile: null, // manager içindeki imageFile'ı temizle
  //     });
  //   }
  // };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (UserRole === "admin") {
        const result = await CreateEmployerByAdmin(manager);
        if (result && result.status === 400) {
          setError("Kullanıcı zaten mevcut."); 
          
          setError(""); 
        }
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      setError(error);
    }
  };
 

  const styles = {
    container: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '20px',
      color: '#007bff', // Koyu mavi
    },
    form: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '20px',
      gridRowGap: '15px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '16px',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: '5px',
    },
    submitButton: {
      gridColumnStart: '1',
      gridColumnEnd: '3',
      padding: '10px 0',
      backgroundColor: '#007bff', // Mavi düğme
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    uploadButton: {
      gridColumnStart: '1',
      gridColumnEnd: '2',
      padding: '10px 15px',
      backgroundColor: '#6c757d', // Gri düğme
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '20px',
      textAlign: 'center',
      justifySelf:'start',//Butonu sol tarafa ekliyor
    },
    activeStatus:{
        display:'flex',
        alignItems:'center',
        gridColumnStart:'2',
        gridColumnEnd:'3',
        ustifySelf:'start',
    },
  };
 
  return (
<div style={styles.container}>
<h2 style={styles.header}>Yönetici Ekle</h2>
<form onSubmit={handleSubmit} style={styles.form}>
{/* <div style={styles.uploadButton}>Fotoğraf Yükle
<input
            type="file"
            accept="image/*"
            name="fotograf"
            onChange={showPreview}
          />
</div> */}
<div style={styles.activeStatus}>
<input
            style={styles.checkbox}
            type="checkbox"
            id="status"
            name="status"
            checked={manager.status}
            onChange={handleChange}
          />
<label style={styles.label} htmlFor="status">Aktiflik Durumu</label>
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="name">Ad*</label>
<input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={manager.name}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="middleName">İkinci Ad</label>
<input
            style={styles.input}
            type="text"
            id="middleName"
            name="middleName"
            value={manager.middleName}
            onChange={handleChange}
          />
</div>
        {/* ... Diğer form elemanları aşağıda ... */}
        {/* Formu bitir ve submit düğmesini ekle */}
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="lastName">Soyad*</label>
<input
            style={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={manager.lastName}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="secondLastName">İkinci Soyad</label>
<input
            style={styles.input}
            type="text"
            id="secondLastName"
            name="secondLastName"
            value={manager.secondLastName}
            onChange={handleChange}
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="birthDate">Doğum Tarihi*</label>
<input
            style={styles.input}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={manager.dateOfBirth}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="birthOfPlace">Doğum Yeri*</label>
<input
            style={styles.input}
            type="text"
            id="birthOfPlace"
            name="birthOfPlace"
            value={manager.birthOfPlace}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="identificationNumber">TCKN*</label>
<input
            style={styles.input}
            type="text"
            id="identificationNumber"
            name="identificationNumber"
            value={manager.identificationNumber}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="profession">Meslek*</label>
<input
            style={styles.input}
            type="text"
            id="profession"
            name="profession"
            value={manager.profession}
            onChange={handleChange}
            required
	    />	
        </div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="dateOfStart">İşe Giriş Tarihi</label>
<input
            style={styles.input}
            type="date"
            id="dateOfStart"
            name="dateOfStart"
            value={manager.dateOfStart}
            onChange={handleChange}
          />
</div>

<div style={styles.formGroup}>
<label style={styles.label} htmlFor="department">Departman*</label>
<input
            style={styles.input}
            type="text"
            id="department"
            name="department"
            value={manager.department}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="company">Şirket*</label>
<select
            id="company"
            name="company"
            value={manager.companyId}
            onChange={handleCompanyChange}
            required
          >
            <option value="">Select Company</option>
            {companies.map(company => (
              <option key={company.id} value={company.id}>{company.name}</option>
            ))}
          </select>
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="privateMail">Şirket Maili*</label>
<input
            style={styles.input}
            type="email"
            id="privateMail"
            name="privateMail"
            value={manager.privateMail}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="address">Adres*</label>
<textarea
            style={styles.input}
            id="address"
            name="address"
            value={manager.address}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="phoneNumber">Telefon*</label>
<input
            style={styles.input}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={manager.phone}
            onChange={handleChange}
            required
          />
</div>
<div style={styles.formGroup}>
<label style={styles.label} htmlFor="salary">Maaş</label>
<input
            style={styles.input}
            type="number"
            id="salary"
            name="salary"
            value={manager.salary}
            onChange={handleChange}
          />
</div>
<div style={styles.formGroup}>
  <label>{error.toString()}</label>

</div>
<button style={styles.submitButton} type="submit">Ekle</button>
</form>
</div>
  );
};
 
export default ManagerForm;