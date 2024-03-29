import axios from "axios";

export  const GetCompaniesList = async ()=>{
    try {
        const response = await axios.post(
            `https://localhost:7287/api/Account/GetCompaniesList`,{
                headers: {
                    'Content-Type':'application/json',
                }
            }

        );
        if(response.status===200){
            return response.data;
        }
        
        
    } catch (error) {
        console.log(error);
        console.log(response.data);
        return error;
    }
}