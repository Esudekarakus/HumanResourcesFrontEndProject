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
        formData.append('name', addData.name);
        formData.append('middleName', addData.middleName);
        formData.append('lastName', addData.lastName);
        formData.append('secondLastName', addData.secondLastName);
        formData.append('dateOfBirth', addData.dateOfBirth);
        formData.append('birthOfPlace', addData.birthOfPlace);
        formData.append('address', addData.address);
        formData.append('identificationNumber', addData.identificationNumber);
        formData.append('dateOfStart', addData.dateOfStart);
       
        formData.append('companyId', addData.companyId);
        formData.append('department', addData.department);
        formData.append('status', addData.status);
        formData.append('phoneNumber', addData.phoneNumber);
        formData.append('salary', addData.salary);
       
        formData.append('profession', addData.profession);
        formData.append('privateMail', addData.privateMail);

        const response = await fetch(`https://localhost:7287/api/Employer/CreateEmployeeByEmployer`, {
            method: 'POST',
            body: formData,
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Yanıt işleme
        const responseData = await response.json();
        console.log("Employee added successfully:", responseData);
        return responseData;
    } catch (error) {
        console.error("Error adding employee:", error);
        throw error;
    }
};