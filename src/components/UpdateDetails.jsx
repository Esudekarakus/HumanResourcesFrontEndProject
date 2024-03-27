import { useState,useEffect } from 'react';
import './UpdateDetails.css';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../service/redux/actions/userAction';
import { useSelector } from 'react-redux';
import decodeToken from '../service/JwtDecoder';
import axios from 'axios';
import { updateAppUserDetailsById } from '../service/AccountService';

const defaultImageSrc='/images/defaultImage.jpg';
const initialFieldValues ={
  id:1,
  phoneNumber:'',
  address:'',
  imageName:'',
  imgSrc:defaultImageSrc,
  imageFile:null
}
function PersonelGuncellemeFormu() {
  const [values,setValues] =useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
 
  const appUserMail = useSelector((state) => state.auth.Email);
  const decodedToken=decodeToken();

  console.log(decodedToken.UserId);


  const handleChange = e => {
    const { name, value } = e.target;
    setValues( {
      ...values,
      [name]: value
    })
  }
 const validate = () => {
   let temp = {}
   temp.imgSrc = values.imgSrc == defaultImageSrc?false : true;
   temp.address= values.address == ""?false:true;
   temp.phoneNumber = /^\d{11}$/.test(values.phoneNumber);
   setErrors(temp)
   return Object.values(temp).every(x=> x==true)
 }
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const formData = new FormData();
      formData.append('id', values.id);
      formData.append('address', values.address);
      formData.append('phoneNumber', values.phoneNumber);
      formData.append('imageFile', values.imageFile); // imageFile'i FormData'ya ekleyin

      

      const response = await updateAppUserDetailsById(
        decodedToken.UserId,values.address,values.phoneNumber,appUserMail
      );

      if (response.ok) {
        console.log('Çalışan başarıyla güncellendi');
        dispatch(updateUserDetails({ phoneNumber: values.phoneNumber, address: values.address }));
      } else {
        throw new Error('Çalışan güncellenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Hata:', error.message);
      // Hata durumunda yapılacak işlemler buraya gelebilir
    }
  }
};

  const showPreview = e =>{
    if(e.target.files && e.target.files[0]){
      let imageFile = e.target.files[0];
      const reader =new FileReader();
      reader.onload = x=>{
        setValues({
          ...values,
          imageFile,
          imgSrc : x.target.result
        })
      }
      reader.readAsDataURL(imageFile)
    }else{
      setValues({
        ...values,
        imageFile:null,
        imgSrc : defaultImageSrc
      });
    }
  }

  const applyErrorClass = field => ((field in errors && errors[field]==false)?'invalid-field':'')
  return (
<div className="form-container">
<form onSubmit={handleSubmit}>
<img src={values.imgSrc}  className='card-img-top'  />
<div  className="form-group">
<label>Fotoğraf: <input type="file" accept='image/*' /*sadece image format kabul etsin*/ name="fotograf" onChange={showPreview} className={""+applyErrorClass('imgSrc')}/></label>
</div>
<div className="form-group">
<label>Adres: <input type="adres" name="address" value={values.address} onChange={handleChange} className={""+applyErrorClass('address')}/></label>
</div>
<div className="form-group" >
<label>Telefon: <input type="tel" name="phoneNumber" value={values.phoneNumber} onChange={handleChange}  className={""+applyErrorClass('phoneNumber')}/></label>
</div>
<button type="submit">Bilgileri Güncelle</button>
</form>
</div>
  );
}
 
export default PersonelGuncellemeFormu;