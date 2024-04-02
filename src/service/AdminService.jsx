

export const CreateEmployerByAdmin = async (addData) => {
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
        formData.append('imageFile', addData.imageFile);
        formData.append('companyId', addData.companyId);
        formData.append('department', addData.department);
        formData.append('status', addData.status);
        formData.append('phoneNumber', addData.phoneNumber);
        formData.append('salary', addData.salary);
        formData.append('profession', addData.profession);
        formData.append('privateMail', addData.privateMail);

        const response = await fetch(`https://localhost:7287/api/Account/CreateEmployerByAdmin`, {
            method: 'POST',
            body: formData,
            
        });
        console.log(response.data);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Yanıt işleme
        const errorMessage = await response.text();
        console.log(errorMessage);
        console.log("Employee added successfully:", responseData);
        return responseData;
    } catch (error) {
        console.error("Error adding employee:", error);
        throw error;
    }
};


