import * as yup from 'yup';

export const experienceValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
