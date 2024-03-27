const initialState = {
    logo: '',
    name: '',
    title: '',
    mersisNo: '',
    taxNo: '',
    taxOffice: '',
    phone: '',
    address: '',
    email: '',
    employeeCount: '',
    foundationYear: '',
    contractStartDate: '',
    contractEndDate: '',
    isActive: false,
  };
  
  const companyDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMPANY_DETAILS':
        return {
          ...state,
          ...action.payload // Bu kullanım, payload'da bulunan tüm key-value çiftlerini state'e kopyalar.
        };
        case'UPDATE_COMPANY_DETAILS':
          return{
            ...state,
            ...action.payload 
          };
      default:
        return state;
    }
  };
  
  export default companyDetailsReducer;
