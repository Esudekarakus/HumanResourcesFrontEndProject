import {jwtDecode} from 'jwt-decode'; // Bu şekilde import edilir.

export const decodeToken = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
        try {
            const decoded = jwtDecode(token);
            return decoded;
        } catch (error) {
            console.error("Token decode error:", error);
            return {};
        }
    }
    return {};
};

export default decodeToken;