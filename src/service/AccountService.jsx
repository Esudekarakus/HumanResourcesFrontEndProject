import axios from 'axios';

export const LoginF = async (email, password) => {
    try {
        const response = await axios.post('https://localhost:7287/api/Account/Login', { email, password });
        
        // İsteğin başarılı olduğunu kontrol etmek için 200-299 arasındaki status kodlarına bakabilirsiniz
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            // Diğer durumlar için gerekli işlemleri yapabilirsiniz
            console.error('İstek başarısız oldu:', response.status, response.statusText);
            throw new Error('İstek başarısız oldu');
        }
    } catch (error) {
        console.error('Bir hata oluştu:', error.message);
        throw error;
    } 

}


export const ChangePassword = async (email,privateMail, password, confirmPassword) => {
    try {
        const response = await axios.put('https://localhost:7287/api/Account/ChangePassword', {
            email,
            privateMail,
            password,
            confirmPassword
        });

        if (response) {
            return response;
        } else {
            console.error('İstek başarısız oldu:', response.status, response.statusText);
            throw new Error('İstek başarısız oldu');
        }
    } catch (error) {
        console.error('Bir hata oluştu:', error.message);
        throw error;
    }
}

export const VerifyCode = async (code,privateMail,email, password, confirmPassword) => {
    try {
        const response = await axios.post('https://localhost:7287/api/Account/VerifyCode', {
            code,
            privateMail,
            email,
            password,
            confirmPassword
        });

        if (response) {
            return response;
        } else {
            console.error('İstek başarısız oldu:', response.status, response.statusText);
            throw new Error('İstek başarısız oldu');
        }
    } catch (error) {
        console.error('Bir hata oluştu:', error.message);
        throw error;
    }
}


export const updateAppUserDetailsById = async(id,address,phoneNumber)=>{

        try {
            const response = await axios.post(
                `https://localhost:7287/api/Account/UpdateAppUserDetailsById`,
                { AppUserId: id, Address:address,PhoneNumber:phoneNumber }, // API beklenen formatta veriyi gönder
                {
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                }
            );
            if(response.data!==JSON){
                return"kullanıcı detayları güncellenemedi";
            }
            return response.data;
            
        } catch (error) {
            console.log(error);
        }


}
       



