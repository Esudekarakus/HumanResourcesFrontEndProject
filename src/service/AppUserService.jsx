import axios from "axios";

export const getAppUserDetailsByMail = async (email)=>{

    try {
        const response = await axios.post(
            `https://localhost:7287/api/Account/GetAppUserDetails`,
            { mail: email }, // API beklenen formatta veriyi gönder
            {
                headers: {
                    'Content-Type': 'application/json', 
                },
            }
        );
        return response.data;
        
    } catch (err) {
        console.error("Kullanıcı detayları alınırken bir hata oluştu:", err);
        throw err;
    }
}