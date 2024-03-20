export const fetchEmployers = async () => {
    try{
        const response = await fetch('https://hrprojectapi.azurewebsites.net/api/Employer');
        const data = await response.json();
        alert('Şirket yöneticileri başarıyla listelendi');
        return data;
        
    }catch(error){
        console.error('İşverenleri getirme hatası',error);
    }
}

export const fetchEmployerById = async (id) => {
    try {
        const response = await fetch(`https://hrprojectapi.azurewebsites.net/api/Employer/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('işveren getirme hatası',error);
    }
};

export const updateEmployer = async(id,updatedData) =>{
    try{
        const response = await fetch(`https://hrprojectapi.azurewebsites.net/api/Employer/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updatedData),

            });
            if(!response.ok){
                throw new Error('HTTP error, status = ' + response.status);
            }
            const data = await response.json();
            return data;
    }catch(error){
        console.error('Güncelleme başarısız',error);
        throw error;
    }
}

export const addEmployeeByEmployer = async (addData) => {
    try {
        const formData = new FormData();
        formData.append('name', addData.firstName);
        formData.append('middleName', addData.middleName);
        formData.append('lastName', addData.lastName);
        formData.append('secondLastName', addData.middleSurname);
        formData.append('dateOfBirth', addData.birthDate);
        formData.append('birthOfPlace', addData.birthPlace);
        formData.append('address', addData.address);
        formData.append('identificationNumber', addData.tc);
        formData.append('dateOfStart', addData.startDate);
       
        formData.append('companyId', addData.companyId);
        formData.append('department', addData.department);
        formData.append('status', addData.status);
        formData.append('phoneNumber', addData.phone);
        formData.append('salary', addData.salary);
       
        formData.append('profession', addData.profession);
        formData.append('privateMail', addData.email);

        const response = await fetch(`https://localhost:7287/api/Employer/CreateEmployeeByEmployer`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('API isteği sırasında bir hata oluştu.');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Güncelleme başarısız', error);
        throw error;
    }
}

