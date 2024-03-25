
import axios from "axios";

export const authLogin = async (email, password) => {
  try {
    const response = await axios.post(
      `https://localhost:7287/api/Account/Login`,
      {
        email,
        password,
      }
    );
    console.log(JSON.stringify(response?.data));
    console.log(JSON.stringify(response));
    const accessToken = response?.data?.accessToken;
    const roles=response?.data?.roles;
    console.log(accessToken);
    console.log(roles);

    if (response.data) {
      localStorage.setItem("jwt", JSON.stringify(response.data));
      localStorage.setItem("auth", JSON.stringify("true"));

      return response;
    }
  } catch (error) {
    localStorage.setItem("auth", JSON.stringify(false));
    const errorResponse = error.response ? error.response.data : null;
    console.log(errorResponse);
    return errorResponse;

  }

};

export const logOut = () => {
  localStorage.setItem("auth", JSON.stringify(false));
  localStorage.removeItem("jwt");
};


