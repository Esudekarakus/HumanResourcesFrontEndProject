const initialState = {
  personalId: "",
  name: "",
  middleName: "",
  lastName: "",
  secondLastName: "",
  dateOfBirth: "",
  birthOfPlace: "",
  address: "",
  idendificationNumber: "",
  dateOfStart: "",
  dateOfEnd: "",
  companyId: 0,
  department: "",
  status: 0,
  phoneNumber: "",
  email: "",
  salary: 0,
  offDays: 0,
  profession: "",
  privateMail: "",
  password: ""
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS':
      return {
        ...state,
        ...action.payload // Bu kullanım, payload'da bulunan tüm key-value çiftlerini state'e kopyalar.
      };
    case 'UPDATE_USER_DETAILS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
