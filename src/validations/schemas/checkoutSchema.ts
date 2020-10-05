import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const checkoutSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('First name is required'),
  lastName: Yup.string().min(2).max(50).required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  shippingLocation: Yup.string()
    .ensure()
    .notOneOf(['none'], 'Shipping location is required')
    .required('Shipping location is required'),
});
