import axios from "axios";

export const GetCompanyList = async () => {
  try {
    const response = await axios.get(
        `https://localhost:7287/api/Company/GetCompanyList`,{},
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    console.log(response);

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    console.log(error.response.data); // Use error.response.data to access response data in catch block
    return error;
  }
}

export const fetchCompanyById = async (id) =>{
  try{
      const response = await fetch(`https://localhost:7287/api/Company/${id}`);
      const data = await response.json();
      return data;
  }catch(error){
      console.error('Çalışan getirme hatası',error);
  }
}


