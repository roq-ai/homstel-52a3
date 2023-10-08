import * as yup from 'yup';

export const hostelValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
