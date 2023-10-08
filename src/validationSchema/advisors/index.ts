import * as yup from 'yup';

export const advisorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  expertise: yup.string().required(),
  rating: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
