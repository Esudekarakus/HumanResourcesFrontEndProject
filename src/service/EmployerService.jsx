export const fetchEmployers = async () => {
    try{
        const response = await fetch('https://hrwebappapi.azure-api.net/api/Employer');
        const data = await response.json();
        alert('Şirket yöneticileri başarıyla listelendi');
        return data;
        
    }catch(error){
        console.error('İşverenleri getirme hatası',error);
    }
}

export const fetchEmployerById = async (id) => {
    try {
        const response = await fetch(`https://localhost:7287/api/Employer/GetEmployerWithCompanyById?id=${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('işveren getirme hatası',error);
    }
};

export const updateEmployer = async(id,updatedData) =>{
    try{
        const response = await fetch(`https://localhost:7287/api/Employer/${id}`,{
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