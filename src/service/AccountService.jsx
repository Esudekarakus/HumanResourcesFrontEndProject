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



  export const ChangePassword = async (email, password, confirmPassword) => {
    try {
        const response = await axios.put('https://localhost:7287/api/Account/ChangePassword', {
            email,
            password,
            confirmPassword
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error('İstek başarısız oldu:', response.status, response.statusText);
            throw new Error('İstek başarısız oldu');
        }
    } catch (error) {
        console.error('Bir hata oluştu:', error.message);
        throw error;
    }
}          
