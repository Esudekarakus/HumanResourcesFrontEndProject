import axios from "axios";

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

        const response = await axios.post(`https://localhost:7287/api/Account/CreateEmployerByAdmin`, formData);
        if (response) {
            console.log(response);
            return response;
        }


    } catch (error) {
        
        console.log(error);
        return error.response;
    }
};


