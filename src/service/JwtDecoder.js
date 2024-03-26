import { jwtDecode } from 'jwt-decode';

export const decodeToken = () => {

    const token = localStorage.getItem("jwt");
    if (token) {
        try {
            const decoded = jwtDecode(token);
            console.log(decoded);
            console.log(decoded.Role);
            return decoded;
        } catch (error) {
            console.error("Token decode error:", error);
            return {};
        }
    }
    return {};
};

export default decodeToken;