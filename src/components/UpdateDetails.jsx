import React, { useState } from 'react';
 
function PersonelGuncellemeFormu() {
  const [personel, setPersonel] = useState({
    fotograf: '',
    telefon: '',
    maas: '',
    istenCikisTarihi: '' // Yeni eklenen alan
    // Diğer sabit bilgiler burada duruyor olacak, ancak bunları state'de tutmaya gerek yok.
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonel(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Güncelleme işlemleri burada yapılır, örneğin API'ye bir istek atılabilir.
    console.log(personel);
  };
 
  return (
<form onSubmit={handleSubmit}>
<div>
<label>Fotoğraf: <input type="file" name="fotograf" onChange={handleChange} /></label>
</div>
<div>
<label>Telefon: <input type="tel" name="telefon" value={personel.telefon} onChange={handleChange} /></label>
</div>
<div>
<label>Maaş: <input type="number" name="maas" value={personel.maas} onChange={handleChange} /></label>
</div>
<div>
<label>İşten Çıkış Tarihi: <input type="date" name="istenCikisTarihi" value={personel.istenCikisTarihi} onChange={handleChange} /></label>
</div>
<button type="submit">Bilgileri Güncelle</button>
</form>
  );
}
 
export default PersonelGuncellemeFormu;