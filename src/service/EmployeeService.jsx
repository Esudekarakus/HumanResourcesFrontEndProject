export const fetchEmployees = async () =>{
    try{
        const response= await fetch ('https://localhost:7287/api/Employee/GetEmployeesWithCompany');
        const data = await response.json();
        return data;
    }catch(error){
        console.error('Çalışanları getirme hatası',error);
    }
}

export const fetchEmployeeById = async (id) =>{
    try{
        const response = await fetch(`https://localhost:7287/api/Employee/GetEmployeeByIdWithCompany?id=${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error('Çalışan getirme hatası',error);
    }
}

export const updateEmployer = async(id,updatedData) =>{
    try{
        const response = await fetch(`https://localhost:7287/api/Employee/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if(!response.ok){
            throw new Error('HTTP error, status = '+response.data);
        }
        const data= await response.json();

    }catch(error){
        console.error('Güncelleme başarısız',error);
        throw error;
    }
}